import mongoose from "mongoose";
import { config } from "dotenv";

config();

const initDatabase = () => {
  const URL =
    process.env.MONGO_URL || "mongodb://localhost:27017/instagram_clone_db";
  mongoose.connect(URL);
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "conection error"));
  db.once("open", () => console.log("Connected"));
};

export default initDatabase;
