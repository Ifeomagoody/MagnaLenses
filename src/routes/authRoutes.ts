 // to authenticate user

import express from 'express';
import { authenticateUser, logoutUser, registerUser } from '../controllers/authController';

const router = express.Router();

router.post('/auth/login', authenticateUser);
router.post("/auth/logout", logoutUser);
router.post("/auth/register", registerUser);

export default router;


















