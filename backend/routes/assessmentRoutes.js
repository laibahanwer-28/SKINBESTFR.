import express from "express";

const router = express.Router();

import { saveAssessment } from "../controllers/assessmentController.js";

router.post("/", saveAssessment);

export default router;