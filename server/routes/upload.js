import express from "express";
import multer from "multer";
import path from "path";
import fs from "fs";
import dotenv from "dotenv";
import mysql from "mysql2";

if(process.env.NODE_ENV !== 'production')
    dotenv.config();

const router = express.Router();

const pool = mysql.createPool
({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise();

const uploadDir = path.join(process.env.PENDING_FILEPATH || "./pending");

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
//     const timestamp = Date.now();
//     const ext = path.extname(file.originalname);
//     const safeName = file.originalname.replace(/\s+/g, "_");
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage,
  limits: { files: 5 },
  // fileFilter: (req, file, cb) => {
  //   // Accept only images
  //   if (!file.mimetype.startsWith("image/")) {
  //     return cb(new Error("Only image files are allowed"), false);
  //   }
  //   cb(null, true);
  // },
});

async function generateUniqueEntryID() {
    let userId;
    let isUnique = false;

    while (!isUnique) {
        userId = Math.floor(10_000_000_000_000_0 + Math.random() * 9_000_000_000_000_000);
        const [rows] = await pool.query('SELECT ID FROM gallery_entry WHERE ID = ?', [userId]);

        if (rows.length === 0) {
            isUnique = true;
        }
    }

    return userId;
}

// Assumes frontend takes care of filename.
router.post("/uploadPhotos", upload.any("files", 5), async (req, res) => {
  try {
    const { name, email, title, year, description } = req.body;
    const files = req.files;
    let photoNames = [];

    for(let i = 0; i < files.length; i++)
        photoNames.push(files[i].originalname);

    if (!name || !email || !title || !year || !description) {
      return res.status(400).json({ error: "All fields are required" });
    }

    if (!files || files.length === 0) {
      return res.status(400).json({ error: "At least one image is required" });
    }

    const entryID = await generateUniqueEntryID();
    const photos = photoNames.join(',');

    const [insertGallery] = await pool.query('INSERT INTO gallery_entry (ID, Name, Email, Title, Year, Description, Photos) VALUES (?, ?, ?, ?, ?, ?, ?)', [
        entryID,
        name,
        email,
        title,
        year,
        description,
        photos
        ]);
    
    const [insertPending] = await pool.query('INSERT INTO pending (ID) VALUES (?)', [
        entryID,
        ]);

    res.json({
      success: true,
      message: "Upload successful",
    });
  } catch (err) {
    console.error("Upload error:", err);
    res.status(500).json({ error: "Failed to upload photos" });
  }
});

router.post("/approveImage", async (req, res) => {
    try {
      const { id } = req.body;
      const userid = req.user.id;

      const timestamp = new Date().getTime();

      const [insertApproved, removePending, operation] = await Promise.all([
        pool.query('INSERT INTO accepted (ID) VALUES (?)', [id]),
        pool.query('DELETE FROM pending WHERE ID = ?', [id]),
        pool.query('INSERT INTO operations (userid, Kind, Timestamp) VALUES (?, ?, ?)', [userid, "Approve", timestamp]),
      ]);

      const [imageNames] = await pool.query('SELECT Photos FROM gallery_entry WHERE ID=?', [id]);

      const photos = imageNames[0].Photos.split(',');

      for(let i = 0; i < photos.length; i++)
      {
        const oldPath = path.join(process.env.PENDING_FILEPATH, photos[i]);
        const newPath = path.join(process.env.UPLOADS_FILEPATH, photos[i]);

        fs.rename(oldPath, newPath, (err) => {
          if (err) {
            console.error('Error moving file:', err);
          } else {
            console.log('File moved successfully!');
          }
        });
      }

      res.json({
        success: true,
        message: "Approve successful",
      });
    } catch (err) {
      console.error("Upload error:", err);
      res.status(500).json({ error: "Failed to approve photos" });
    }
  });

router.post("/rejectImage", async (req, res) => {
  try {
    const { id } = req.body;
    const userid = req.user.id;

    const timestamp = new Date().getTime();
    
    const [removePending] = await Promise.all([
      pool.query('DELETE FROM pending WHERE ID = ?', [id]),
      pool.query('INSERT INTO operations (userid, Kind, Timestamp) VALUES (?, ?, ?)', [userid, "Reject", timestamp])
    ]);

    const [imageNames] = await pool.query('SELECT Photos FROM gallery_entry WHERE ID=?', [id]);

    const photos = imageNames[0].Photos.split(',');

    for(let i = 0; i < photos.length; i++)
    {
      const filePath = path.join(process.env.PENDING_FILEPATH, photos[i]);

      fs.unlink(filePath, (err) => {
        if (err) {
          console.error('Failed to delete file:', err);
        } else {
          console.log('File deleted successfully!');
        }
      });
    }

    res.json({
      success: true,
      message: "Reject successful",
    });
  } catch (err) {
    console.error("Upload error:", err);
    res.status(500).json({ error: "Failed to reject photos" });
  }
});

router.get("/getPendingIDs", async (req, res) => {
  try {

    const [getPending] = await Promise.all([
      pool.query('SELECT * FROM pending'),
    ]);

    res.json({
      ids: getPending[0],
    });
  } catch (err) {
    res.status(500).json({ error: "Failed to get ID's" });
  }
});


router.get("/getAcceptedIDs", async (req, res) => {
  try {

    const [getAccepted] = await Promise.all([
      pool.query('SELECT * FROM accepted'),
    ]);

    res.json({
      ids: getAccepted[0],
    });
  } catch (err) {
    res.status(500).json({ error: "Failed to get ID's" });
  }
});

router.get("/getPendingInfo", async (req, res) => {
  try {

    const [getPendingData] = await Promise.all([
      pool.query(`SELECT gallery_entry.ID, gallery_entry.Name, gallery_entry.Email, gallery_entry.Title, gallery_entry.Year, gallery_entry.Description, gallery_entry.Photos
        FROM gallery_entry 
        INNER JOIN pending ON gallery_entry.ID=pending.ID`),
    ]);


    res.json({
      pendingImages: getPendingData[0]  
    });
  } catch (err) {
    res.status(500).json({ error: "Failed to get info" });
  }
});

router.get("/getApprovedInfo", async (req, res) => {
  try {

    const [getPendingData] = await Promise.all([
      pool.query(`SELECT gallery_entry.ID, gallery_entry.Name, gallery_entry.Email, gallery_entry.Title, gallery_entry.Year, gallery_entry.Description, gallery_entry.Photos
        FROM gallery_entry 
        INNER JOIN accepted ON gallery_entry.ID=accepted.ID`),
    ]);


    res.json({
      acceptedImages: getPendingData[0]  
    });
  } catch (err) {
    res.status(500).json({ error: "Failed to get info" });
  }
});

export default router;
