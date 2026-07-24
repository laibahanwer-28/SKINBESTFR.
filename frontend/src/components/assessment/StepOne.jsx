const skinTypes = [
  {
    name: "Oily",
    emoji: "💧",
    description: "Your skin produces excess oil and may appear shiny.",
  },
  {
    name: "Dry",
    emoji: "🌵",
    description: "Your skin often feels tight, rough, or flaky.",
  },
  {
    name: "Combination",
    emoji: "⚖️",
    description: "Oily in some areas and dry in others.",
  },
  {
    name: "Normal",
    emoji: "😊",
    description: "Balanced skin with minimal concerns.",
  },
  {
    name: "Sensitive",
    emoji: "🌸",
    description: "Your skin is easily irritated or reacts quickly.",
  },
];

function StepOne({ formData, setFormData }) {
  return (
    <div>
      <h2 className="text-4xl font-bold text-gray-800 mb-3">
        What's your skin type?
      </h2>

      <p className="text-gray-500 mb-10">
        Choose the option that best describes your skin.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skinTypes.map((type) => (
          <button
            key={type.name}
            type="button"
            onClick={() =>
              setFormData({
                ...formData,
                skinType: type.name,
              })
            }
            className={`p-6 rounded-3xl border-2 text-left transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1

              ${
                formData.skinType === type.name
                  ? "border-pink-400 bg-pink-50"
                  : "border-gray-200 bg-white hover:border-pink-300"
              }
            `}
          >
            <div className="text-5xl mb-4">
              {type.emoji}
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              {type.name}
            </h3>

            <p className="text-gray-500 leading-6">
              {type.description}
            </p>
          </button>
        ))}
      </div>

      {formData.skinType && (
        <div className="mt-8 bg-pink-100 rounded-2xl p-4 border border-pink-200">
          <p className="text-pink-700 font-semibold">
            ✅ Selected Skin Type: {formData.skinType}
          </p>
        </div>
      )}
    </div>
  );
}

export default StepOne;
