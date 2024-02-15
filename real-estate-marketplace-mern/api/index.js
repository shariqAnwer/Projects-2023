import authRouter from "./routes/auth.route.js";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user.route.js";

dotenv.config();
// pass&user-shariqueanwer

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("connected to DB");
  })
  .catch((error) => console.log(error));

const app = express();
app.use(express.json());

app.listen(3000, () => console.log("listening on port  3000!!!"));

app.use("/api", userRouter);
app.use("/api/auth", authRouter);

//middleware to handle possible errors
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
