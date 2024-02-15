import dotenv from "dotenv";
import { error } from "console";
import express from "express";
import mongoose from "mongoose";

dotenv.config();
// pass&user-shariqueanwer

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("connected to DB");
  })
  .catch((error) => console.log(error));

const app = express();

app.listen(3000, () => console.log("listening on port  3000!!"));
