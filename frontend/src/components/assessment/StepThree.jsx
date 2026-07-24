const goals = [
  "Clear Acne",
  "Hydrated Skin",
  "Healthy Glow",
  "Even Skin Tone",
  "Reduce Redness",
  "Oil Control",
  "Anti-Aging",
  "Minimize Pores",
  "Reduce Pigmentation",
  "Smooth Texture",
];

function StepThree({ formData, setFormData }) {
  const toggleGoal = (goal) => {
    let updatedGoals;

    if (formData.goals.includes(goal)) {
      updatedGoals = formData.goals.filter(
        (item) => item !== goal
      );
    } else {
      updatedGoals = [...formData.goals, goal];
    }

    setFormData({
      ...formData,
      goals: updatedGoals,
    });
  };

  return (
    <div>
      <h2 className="text-4xl font-bold text-gray-800 mb-3">
        What are your skincare goals?
      </h2>

      <p className="text-gray-500 mb-10">
        Select all the goals you'd like to achieve.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {goals.map((goal) => {
          const selected = formData.goals.includes(goal);

          return (
            <button
              key={goal}
              type="button"
              onClick={() => toggleGoal(goal)}
              className={`rounded-2xl p-5 border-2 transition-all duration-300 text-left
                ${
                  selected
                    ? "bg-purple-100 border-purple-400 text-purple-700"
                    : "bg-white border-gray-200 hover:border-purple-300"
                }
              `}
            >
              <div className="flex justify-between items-center">
                <span className="font-semibold">
                  {goal}
                </span>

                {selected && (
                  <span className="text-xl">💜</span>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {formData.goals.length > 0 && (
        <div className="mt-8 p-4 rounded-2xl bg-purple-50 border border-purple-200">
          <p className="font-semibold text-purple-700 mb-2">
            Selected Goals:
          </p>

          <div className="flex flex-wrap gap-2">
            {formData.goals.map((goal) => (
              <span
                key={goal}
                className="px-3 py-1 rounded-full bg-purple-200 text-purple-700 text-sm"
              >
                {goal}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default StepThree;
