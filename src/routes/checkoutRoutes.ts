// to initiate checkout

import express from 'express';
import { initiateCheckout, makePayment } from '../controllers/checkoutController';

const router = express.Router();

router.post('/checkout', initiateCheckout);
router.post("/checkout/:orderId/payment", makePayment);

export default router;






