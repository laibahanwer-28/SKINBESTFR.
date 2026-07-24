function NavigationButtons({
  currentStep,
  totalSteps,
  onNext,
  onPrevious,
}) {
  return (
    <div className="flex justify-between items-center mt-12">

      {/* Previous Button */}

      {currentStep > 1 ? (
        <button
          onClick={onPrevious}
          className="px-7 py-3 rounded-full border border-pink-300 text-pink-500 font-semibold hover:bg-pink-50 transition duration-300"
        >
          ← Previous
        </button>
      ) : (
        <div></div>
      )}

      {/* Next Button */}

      <button
        onClick={onNext}
        className="px-8 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-pink-400 to-purple-400 shadow-lg hover:scale-105 transition duration-300"
      >
        {currentStep === totalSteps
          ? "Generate Routine ✨"
          : "Next →"}
      </button>

    </div>
  );
}

export default NavigationButtons;
