import express from "express";
import {
  getUsers,
  Register,
  Update,
  Delete,
  getAttribute,
  createAttribute,
  getSelector,
  getSelect,
  sDelete
} from "../controllers/Users.js";
// import { verifyToken } from "../middleware/VerifyToken.js";
// import { refreshToken } from "../controllers/RefreshToken.js";

const router = express.Router();

router.get("/users", getUsers);
router.put("/update", Update);
router.delete("/delete", Delete);

//extension call
router.get("/extension", getAttribute);
router.post("/extension", createAttribute);

////
router.get("/selector", getSelector);

// selector call
router.post("/select", Register);
router.get("/select", getSelect);
router.delete("/select", sDelete);

export default router;
