function ProgressBar({ currentStep, totalSteps }) {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="mb-12">
      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-3xl font-bold text-gray-800">
          Skin Assessment 🌸
        </h2>

        <span className="text-pink-500 font-semibold">
          Step {currentStep} of {totalSteps}
        </span>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-3 bg-pink-100 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-pink-400 to-purple-400 transition-all duration-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}

export default ProgressBar;
