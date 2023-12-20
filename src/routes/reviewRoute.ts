// for all reviews
import express from "express";
import {
  getAllReviews,
  getReviewsForProduct,
} from "../controllers/reviewController";

const router = express.Router();

router.get("/reviews", getAllReviews);
router.get("/reviews/product/:productId", getReviewsForProduct);

export default router;
