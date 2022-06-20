import express from "express";
import {
  Register,
  getUsers,
  // deleteUsers,
  // putUsers
} from "../controllers/Users.js";

const router = express.Router();


router.post("/work", Register);

 router.get("/users", getUsers);
//  router.delete("/users", deleteUsers);
//  router.put("/users", putUsers);

export default router;
