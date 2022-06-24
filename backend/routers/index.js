import express from "express";
import {
  getUsers,
  Register,
  Update,
  Delete,
  getAttribute,
  createAttribute,
  getSelector,
} from "../controllers/Users.js";
// import { verifyToken } from "../middleware/VerifyToken.js";
// import { refreshToken } from "../controllers/RefreshToken.js";

const router = express.Router();

router.get("/users",  getUsers);
router.post("/users", Register);
router.put("/update", Update);
router.delete("/delete", Delete);

//extension call
router.get("/extension", getAttribute);
router.post("/extension", createAttribute);

////
router.get("/selector", getSelector);

export default router;
