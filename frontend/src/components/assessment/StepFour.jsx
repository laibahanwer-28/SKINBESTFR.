const routines = [
  {
    title: "Simple 🌿",
    value: "Simple",
    description: "3–4 easy skincare steps. Perfect for beginners or busy schedules.",
  },
  {
    title: "Balanced 🌸",
    value: "Balanced",
    description: "5–6 steps for a complete daily skincare routine.",
  },
  {
    title: "Advanced ✨",
    value: "Advanced",
    description: "7+ steps for skincare enthusiasts who enjoy detailed routines.",
  },
];

function StepFour({ formData, setFormData }) {
  return (
    <div>
      <h2 className="text-4xl font-bold text-gray-800 mb-3">
        Choose your routine preference
      </h2>

      <p className="text-gray-500 mb-10">
        Select the type of skincare routine you'd like the AI to create.
      </p>

      <div className="space-y-5">
        {routines.map((routine) => (
          <button
            key={routine.value}
            type="button"
            onClick={() =>
              setFormData({
                ...formData,
                routinePreference: routine.value,
              })
            }
            className={`w-full p-6 rounded-3xl border-2 text-left transition-all duration-300 hover:shadow-lg

              ${
                formData.routinePreference === routine.value
                  ? "bg-pink-50 border-pink-400"
                  : "bg-white border-gray-200 hover:border-pink-300"
              }
            `}
          >
            <h3 className="text-2xl font-bold text-gray-800">
              {routine.title}
            </h3>

            <p className="text-gray-500 mt-2">
              {routine.description}
            </p>
          </button>
        ))}
      </div>

      {formData.routinePreference && (
        <div className="mt-8 bg-pink-100 border border-pink-300 rounded-2xl p-4">
          <p className="text-pink-700 font-semibold">
            🌸 Selected Routine: {formData.routinePreference}
          </p>
        </div>
      )}
    </div>
  );
}

export default StepFour;
