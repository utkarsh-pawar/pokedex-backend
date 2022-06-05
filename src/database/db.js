import mongoose from "mongoose";
import config from "../configs/config.js";

const db = () => {
  mongoose
    .connect(config.MONGO_URI)
    .then(() => {
      console.log("Database connected");
    })
    .catch((e) => {
      console.log(e);
      process.exit();
    });
};

export default db;
