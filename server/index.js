import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import contactRoutes from "./routes/contact.js";
import uploadRoutes from "./routes/upload.js";
import authRoutes from "./routes/auth.js";
import path from "path";
import passport from "passport";
import mysql from "mysql2";
import expressMySQLSession from 'express-mysql-session';
import session from "express-session";

const MySQLStore = expressMySQLSession(session);

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

let options = {
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
};

let connection = mysql.createConnection(options);
let sessionStore = new MySQLStore({
  checkExpirationInterval: 900000,
  expiration: 86400000,
  createDatabaseTable: true,
  schema: {
      tableName: 'sessions',
      columnNames: {
          session_id: 'session_id',
          expires: 'expires',
          data: 'data'
      }
  }
}, connection);

app.use(session({ 
  secret: ",xnv43732*7^53xb", 
  resave: false, 
  saveUninitialized: false, 
  store: sessionStore
}));

app.use(passport.authenticate('session'));
app.use(passport.initialize());
app.use(passport.session());

app.use("/contact", contactRoutes);
app.use("/upload", uploadRoutes);
app.use("/auth", authRoutes);

app.use('/pending', express.static(path.join(process.env.PENDING_FILEPATH)));
app.use('/approve', express.static(path.join(process.env.UPLOADS_FILEPATH)));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});