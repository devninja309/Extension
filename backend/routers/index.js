import express from "express";
import {
  getUsers,
  Register,
  Update,
  Delete,
} from "../controllers/Users.js";
// import { verifyToken } from "../middleware/VerifyToken.js";
// import { refreshToken } from "../controllers/RefreshToken.js";

const router = express.Router();

router.get("/users",  getUsers);
router.post("/users", Register);
router.put("/update", Update);
router.delete("/delete", Delete);

export default router;
