import {
  deleteUser,
  updateUser,
  user,
} from "../controllers/user.controller.js";

import express from "express";
import { verifyUser } from "../utils/verifyUser.js";

const router = express.Router();

router.get("/test", user);
router.post("/update/:id", verifyUser, updateUser);
router.delete("/delete/:id", verifyUser, deleteUser);

export default router;
