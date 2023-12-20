// for list of orders
import express from 'express';

import { getOrderList, getSingleOrder, createOrder } from '../controllers/orderController';

const router = express.Router();

router.get('/orders', getOrderList);
router.get("/orders/:orderId", getSingleOrder);
router.post("/orders", createOrder);

export default router;





 






