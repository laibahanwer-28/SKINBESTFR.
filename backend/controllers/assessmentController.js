import Assessment from "../models/Assessment.js";
import { generateRoutine } from "../services/groqService.js";

export const saveAssessment = async (req, res) => {
  try {
    // Save assessment in MongoDB
    const assessment = new Assessment(req.body);
    await assessment.save();

    // Generate AI skincare routine
    const aiRoutine = await generateRoutine(req.body);

    // Send both assessment and AI routine back
    res.status(201).json({
      success: true,
      message: "Assessment saved successfully!",
      assessment,
      aiRoutine,
    });

  } catch (error) {
    console.error("Assessment Error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};