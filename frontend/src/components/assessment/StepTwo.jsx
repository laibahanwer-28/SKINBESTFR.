const concerns = [
  "Acne",
  "Dark Spots",
  "Pigmentation",
  "Dryness",
  "Oiliness",
  "Redness",
  "Large Pores",
  "Wrinkles",
  "Dull Skin",
  "Uneven Skin Tone",
];

function StepTwo({ formData, setFormData }) {
  const toggleConcern = (concern) => {
    let updatedConcerns;

    if (formData.concerns.includes(concern)) {
      updatedConcerns = formData.concerns.filter(
        (item) => item !== concern
      );
    } else {
      updatedConcerns = [...formData.concerns, concern];
    }

    setFormData({
      ...formData,
      concerns: updatedConcerns,
    });
  };

  return (
    <div>
      <h2 className="text-4xl font-bold text-gray-800 mb-3">
        What are your skin concerns?
      </h2>

      <p className="text-gray-500 mb-10">
        You can select more than one option.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {concerns.map((concern) => {
          const selected = formData.concerns.includes(concern);

          return (
            <button
              key={concern}
              type="button"
              onClick={() => toggleConcern(concern)}
              className={`rounded-2xl p-5 border-2 transition-all duration-300 text-left

                ${
                  selected
                    ? "bg-pink-100 border-pink-400 text-pink-700"
                    : "bg-white border-gray-200 hover:border-pink-300"
                }
              `}
            >
              <div className="flex justify-between items-center">
                <span className="font-semibold">
                  {concern}
                </span>

                {selected && (
                  <span className="text-xl">✅</span>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {formData.concerns.length > 0 && (
        <div className="mt-8 p-4 rounded-2xl bg-pink-50 border border-pink-200">
          <p className="font-semibold text-pink-700 mb-2">
            Selected Concerns:
          </p>

          <div className="flex flex-wrap gap-2">
            {formData.concerns.map((item) => (
              <span
                key={item}
                className="px-3 py-1 rounded-full bg-pink-200 text-pink-700 text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default StepTwo;
