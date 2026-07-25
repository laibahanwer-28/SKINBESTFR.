import Assessment from "../models/Assessment.js";
import { generateRoutine } from "../services/groqService.js";

export const saveAssessment = async (req, res) => {
  try {
    // Generate AI routine
    const aiRoutine = await generateRoutine(req.body);

    // Save assessment linked to logged-in user
    const assessment = await Assessment.create({
      user: req.user._id,

      skinType: req.body.skinType,
      concerns: req.body.concerns,
      goals: req.body.goals,
      routinePreference: req.body.routinePreference,
      lifestyle: req.body.lifestyle,

      aiRoutine,
    });

    res.status(201).json({
      success: true,
      assessment,
      aiRoutine,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getLatestAssessment = async (req, res) => {
  try {

    const assessment = await Assessment.findOne({
      user: req.user._id,
    }).sort({ createdAt: -1 });

    if (!assessment) {
      return res.status(404).json({
        message: "No assessment found",
      });
    }

    res.json(assessment);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

