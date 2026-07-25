import { useState } from "react";
import { useNavigate } from "react-router-dom";

import ProgressBar from "../components/assessment/ProgressBar";
import NavigationButtons from "../components/assessment/NavigationButtons";
import StepOne from "../components/assessment/StepOne";
import StepTwo from "../components/assessment/StepTwo";
import StepThree from "../components/assessment/StepThree";
import StepFour from "../components/assessment/StepFour";
import StepFive from "../components/assessment/StepFive";

import { saveAssessment } from "../api/Assessment";
function Assessment() {
  const totalSteps = 5;

  const navigate = useNavigate();

  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    skinType: "",
    concerns: [],
    goals: [],
    routinePreference: "",
    lifestyle: {
      waterIntake: "",
      sleep: "",
      sunscreen: "",
      stressLevel: "",
      exercise: "",
    },
  });

  const nextStep = async () => {
    // Step 1 Validation
    if (currentStep === 1 && !formData.skinType) {
      alert("Please select your skin type.");
      return;
    }

    // Step 2 Validation
    if (currentStep === 2 && formData.concerns.length === 0) {
      alert("Please select at least one skin concern.");
      return;
    }

    // Step 3 Validation
    if (currentStep === 3 && formData.goals.length === 0) {
      alert("Please select at least one skincare goal.");
      return;
    }

    // Step 4 Validation
    if (currentStep === 4 && !formData.routinePreference) {
      alert("Please select a routine preference.");
      return;
    }

    // Step 5 Validation
    if (
      currentStep === 5 &&
      (
        !formData.lifestyle.waterIntake ||
        !formData.lifestyle.sleep ||
        !formData.lifestyle.sunscreen ||
        !formData.lifestyle.stressLevel ||
        !formData.lifestyle.exercise
      )
    ) {
      alert("Please complete all lifestyle questions.");
      return;
    }

    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      try {
        setLoading(true);

        const response = await saveAssessment(formData);

        console.log("Assessment Saved:", response.data);
        console.log(
  JSON.stringify(response.data.aiRoutine, null, 2)
);

        setLoading(false);

       // Save AI routine
localStorage.setItem(
  "aiRoutine",
  JSON.stringify(response.data.aiRoutine)
);

// Open Results page
navigate("/results", {
  state: {
    aiRoutine: response.data.aiRoutine,
  },
});

      } catch (error) {

        setLoading(false);

        console.error("Assessment Error:", error);

        if (error.response) {
          alert(
            `Status: ${error.response.status}\nMessage: ${
              error.response.data.message || "Unknown server error"
            }`
          );
        } else if (error.request) {
          alert("No response from backend server.");
        } else {
          alert(error.message);
        }
      }
    }
  };

  const previousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  if (loading) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-pink-100 to-purple-100 flex justify-center items-center px-6">

      <div className="bg-white rounded-[40px] shadow-2xl p-12 max-w-xl w-full text-center">

        <div className="text-7xl mb-5">
          🤖
        </div>

        <h1 className="text-4xl font-bold text-pink-600">
          SKINBESTFR AI
        </h1>

        <p className="mt-4 text-gray-600 text-lg">
          Creating your personalized skincare routine...
        </p>

        {/* Spinner */}

        <div className="flex justify-center mt-10">
          <div className="w-20 h-20 border-[10px] border-pink-200 border-t-pink-600 rounded-full animate-spin"></div>
        </div>

        {/* Progress Bar */}

        <div className="w-full bg-pink-100 rounded-full h-4 mt-10 overflow-hidden">

          <div className="bg-gradient-to-r from-pink-500 to-purple-500 h-4 rounded-full animate-pulse w-3/4"></div>

        </div>

        <div className="mt-10 space-y-4 text-left">

          <p className="text-pink-600 font-medium">
            🧠 Analyzing your skin profile...
          </p>

          <p className="text-purple-600 font-medium">
            💧 Checking your skin concerns...
          </p>

          <p className="text-pink-600 font-medium">
            🌿 Selecting the best ingredients...
          </p>

          <p className="text-purple-600 font-medium">
            🌞 Preparing your morning routine...
          </p>

          <p className="text-pink-600 font-medium">
            🌙 Preparing your night routine...
          </p>

          <p className="text-green-600 font-semibold">
            💖 Almost Ready...
          </p>

        </div>

      </div>

    </div>
  );
}

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100 py-12 px-6">

      <div className="max-w-5xl mx-auto bg-white rounded-[40px] shadow-2xl p-10">

        <ProgressBar
          currentStep={currentStep}
          totalSteps={totalSteps}
        />

        {currentStep === 1 && (
          <StepOne
            formData={formData}
            setFormData={setFormData}
          />
        )}

        {currentStep === 2 && (
          <StepTwo
            formData={formData}
            setFormData={setFormData}
          />
        )}

        {currentStep === 3 && (
          <StepThree
            formData={formData}
            setFormData={setFormData}
          />
        )}

        {currentStep === 4 && (
          <StepFour
            formData={formData}
            setFormData={setFormData}
          />
        )}

        {currentStep === 5 && (
          <StepFive
            formData={formData}
            setFormData={setFormData}
          />
        )}

        <NavigationButtons
          currentStep={currentStep}
          totalSteps={totalSteps}
          onNext={nextStep}
          onPrevious={previousStep}
        />

      </div>

    </div>
  );
}

export default Assessment;
