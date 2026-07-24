import { useLocation, useNavigate } from "react-router-dom";

function Results() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <h1 className="text-2xl font-bold">
          No AI Routine Found
        </h1>
      </div>
    );
  }

  const { aiRoutine } = state;

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100 py-10 px-6">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-bold text-center text-pink-600 mb-3">
          ✨ Your AI Skincare Routine
        </h1>

        <p className="text-center text-gray-600 mb-10">
          Generated specially for your skin.
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Morning */}
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-pink-500 mb-5">
              🌞 Morning Routine
            </h2>

            <ul className="space-y-3">
              {aiRoutine.morningRoutine.map((item, index) => (
                <li key={index}>
                  ✅ {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Night */}
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-purple-600 mb-5">
              🌙 Night Routine
            </h2>

            <ul className="space-y-3">
              {aiRoutine.nightRoutine.map((item, index) => (
                <li key={index}>
                  ✅ {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Weekly Care */}
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-pink-500 mb-5">
              💆 Weekly Care
            </h2>

            <ul className="space-y-3">
              {aiRoutine.weeklyCare.map((item, index) => (
                <li key={index}>
                  ⭐ {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Ingredients */}
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-purple-600 mb-5">
              🧴 Recommended Ingredients
            </h2>

            <ul className="space-y-3">
              {aiRoutine.recommendedIngredients.map((item, index) => (
                <li key={index}>
                  🌿 {item}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Lifestyle */}

        <div className="bg-white rounded-3xl shadow-xl p-8 mt-8">

          <h2 className="text-2xl font-bold text-pink-600 mb-5">
            💖 Lifestyle Tips
          </h2>

          <ul className="space-y-3">
            {aiRoutine.lifestyleTips.map((item, index) => (
              <li key={index}>
                💡 {item}
              </li>
            ))}
          </ul>

        </div>

        <div className="text-center mt-10">

          <button
            onClick={() => navigate("/assessment")}
            className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full font-bold"
          >
            Start New Assessment
          </button>

        </div>

      </div>

    </div>
  );
}

export default Results;
