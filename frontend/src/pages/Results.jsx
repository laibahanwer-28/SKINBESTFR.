import { useLocation, useNavigate } from "react-router-dom";

function Results() {
  const { state } = useLocation();
  const navigate = useNavigate();

  // Get AI Routine from navigation or localStorage
  const aiRoutine =
    state?.aiRoutine ||
    JSON.parse(localStorage.getItem("aiRoutine"));

  if (!aiRoutine) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-pink-100 to-purple-100 flex flex-col justify-center items-center px-6">

        <div className="bg-white rounded-[35px] shadow-2xl p-10 text-center max-w-lg w-full">

          <div className="text-7xl mb-5">
            🤖
          </div>

          <h1 className="text-4xl font-bold text-pink-600">
            No AI Routine Found
          </h1>

          <p className="text-gray-600 mt-4">
            Complete your skin assessment to generate your personalized skincare routine.
          </p>

          <button
            onClick={() => navigate("/assessment")}
            className="mt-8 bg-gradient-to-r from-pink-500 to-purple-500 hover:scale-105 transition text-white px-8 py-4 rounded-full font-bold"
          >
            📝 Take Assessment
          </button>

        </div>

      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-pink-100 to-purple-100 py-10 px-5">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-10">

          <h1 className="text-5xl font-bold text-pink-600">
            ✨ Your AI Skincare Routine
          </h1>

          <p className="text-gray-600 mt-3 text-lg">
            Personalized exclusively for your skin profile.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          {/* Morning Routine */}

          <div className="bg-white rounded-3xl shadow-xl p-8">

            <h2 className="text-3xl font-bold text-pink-500 mb-6">
              🌞 Morning Routine
            </h2>

            <ul className="space-y-4">

              {aiRoutine.morningRoutine?.map((step, index) => (

                <li
                  key={index}
                  className="bg-pink-50 rounded-xl p-4 shadow-sm"
                >
                  ✅ {step}
                </li>

              ))}

            </ul>

          </div>

          {/* Night Routine */}

          <div className="bg-white rounded-3xl shadow-xl p-8">

            <h2 className="text-3xl font-bold text-purple-600 mb-6">
              🌙 Night Routine
            </h2>

            <ul className="space-y-4">

              {aiRoutine.nightRoutine?.map((step, index) => (

                <li
                  key={index}
                  className="bg-purple-50 rounded-xl p-4 shadow-sm"
                >
                  🌙 {step}
                </li>

              ))}

            </ul>

          </div>

          {/* Weekly Care */}

          <div className="bg-white rounded-3xl shadow-xl p-8">

            <h2 className="text-3xl font-bold text-pink-500 mb-6">
              💆 Weekly Care
            </h2>

            <ul className="space-y-4">

              {aiRoutine.weeklyCare?.map((step, index) => (

                <li
                  key={index}
                  className="bg-pink-50 rounded-xl p-4 shadow-sm"
                >
                  ⭐ {step}
                </li>

              ))}

            </ul>

          </div>

          {/* Ingredients */}

          <div className="bg-white rounded-3xl shadow-xl p-8">

            <h2 className="text-3xl font-bold text-purple-600 mb-6">
              🌿 Recommended Ingredients
            </h2>

            <ul className="space-y-4">

              {aiRoutine.recommendedIngredients?.map((ingredient, index) => (

                <li
                  key={index}
                  className="bg-purple-50 rounded-xl p-4 shadow-sm"
                >
                  🧴 {ingredient}
                </li>

              ))}

            </ul>

          </div>

        </div>

        {/* Lifestyle Tips */}

        <div className="bg-white rounded-3xl shadow-xl p-8 mt-8">

          <h2 className="text-3xl font-bold text-pink-600 mb-6">
            💖 Lifestyle Tips
          </h2>

          <ul className="space-y-4">

            {aiRoutine.lifestyleTips?.map((tip, index) => (

              <li
                key={index}
                className="bg-pink-50 rounded-xl p-4 shadow-sm"
              >
                💡 {tip}
              </li>

            ))}

          </ul>

        </div>

        {/* Buttons */}

        <div className="flex flex-col md:flex-row justify-center gap-5 mt-10">

          <button
            onClick={() => navigate("/dashboard")}
            className="bg-purple-500 hover:bg-purple-600 transition text-white px-8 py-4 rounded-full font-bold shadow-lg"
          >
            🏠 Go to Dashboard
          </button>

          <button
            onClick={() => navigate("/assessment")}
            className="bg-pink-500 hover:bg-pink-600 transition text-white px-8 py-4 rounded-full font-bold shadow-lg"
          >
            📝 New Assessment
          </button>

          <button
            onClick={() => navigate("/profile")}
            className="bg-pink-400 hover:bg-pink-500 transition text-white px-8 py-4 rounded-full font-bold shadow-lg"
          >
            👤 My Profile
          </button>

        </div>

      </div>

    </div>
  );
}

export default Results;