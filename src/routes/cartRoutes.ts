

// to get cart details

import express from 'express';
import { getCartDetails } from '../controllers/cartController';

const router = express.Router();

router.get('/cart/:userId', getCartDetails);

export default router;  


