import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
dotenv.config();

const app = express();
const PORT = 5000 || process.env.PORT;

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});
