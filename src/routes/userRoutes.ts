// to get list of users

import express from "express";
import { getUserList, getUser } from "../controllers/userController";

const router = express.Router();

router.get("/users", getUserList);
router.get("/users/:userId", getUser);

export default router;
