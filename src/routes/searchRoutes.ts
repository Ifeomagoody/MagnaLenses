// to search for products

import express from 'express';
import { searchProducts } from '../controllers/searchController';

const router = express.Router();

router.get('/search', searchProducts);

export default router;


