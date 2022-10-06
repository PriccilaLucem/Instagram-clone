import mongoose from "mongoose";

const initDatabase = () => {
  mongoose.connect("mongodb://localhost:27017/instagram_clone_db");
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "conection error"));
  db.once("open", () => console.log("Connected"));
};

export default initDatabase;
