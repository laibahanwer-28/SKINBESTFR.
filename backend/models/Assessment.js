import mongoose from "mongoose";

const assessmentSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    skinType: String,

    concerns: [String],

    goals: [String],

    routinePreference: String,

    lifestyle: {
      waterIntake: String,
      sleep: String,
      sunscreen: String,
      stressLevel: String,
      exercise: String,
    },

    aiRoutine: {
      morningRoutine: [String],
      nightRoutine: [String],
      weeklyCare: [String],
      recommendedIngredients: [String],
      lifestyleTips: [String],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Assessment", assessmentSchema);
