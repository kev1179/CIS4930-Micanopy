import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import contactRoutes from "./routes/contact.js";
import uploadRoutes from "./routes/upload.js";
import path from "path";
dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use("/contact", contactRoutes);
app.use("/upload", uploadRoutes);


app.use('/uploads', express.static(path.join(process.env.UPLOADS_FILEPATH)));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});