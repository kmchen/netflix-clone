import express from "express";
import { getTrendingTV,getTVByCategory, getTVSimilar, getTVTrailers, getTVDetails} from "../controllers/tv.controller.js";

const router = express.Router();

router.get("/trending", getTrendingTV);
router.get("/:id/trailers", getTVTrailers);
router.get("/:id/details", getTVDetails);
router.get("/:id/similar", getTVSimilar);
router.get("/:category", getTVByCategory);

export default router;
