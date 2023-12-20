// to get Sales Metrics and Aggregate Data
import express from "express";
import {
  getSalesMetrics,
  filterSalesByDate,
  getTopSellingProducts,
  getTrafficSources,
  getSalesByCountry,
} from "../controllers/analyticsController";

const router = express.Router();

router.get("/analytics/sales", getSalesMetrics);
router.get("/analytics/sales/filter", filterSalesByDate);
router.get("/analytics/top-selling-products", getTopSellingProducts);
router.get("/analytics/traffic-sources", getTrafficSources);
router.get("/analytics/sales-by-country", getSalesByCountry);

export default router;
