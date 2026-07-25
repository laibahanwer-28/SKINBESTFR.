import express from "express";
import { saveAssessment, getLatestAssessment } from "../controllers/assessmentController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Save assessment
router.post("/", protect, saveAssessment);

// Get latest assessment of logged-in user
router.get("/latest", protect, getLatestAssessment);

export default router;
