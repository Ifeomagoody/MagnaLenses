// to get list of all products

import express from 'express';
import { getAllProducts, getSingleProduct } from '../controllers/productController';

const router = express.Router();

router.get('/products', getAllProducts);
router.get('/products/:productId', getSingleProduct);
export default router;


