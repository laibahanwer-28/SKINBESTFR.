import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getLatestAssessment } from "../api/Assessment";

function Dashboard() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [assessment, setAssessment] = useState(null);
  const [error, setError] = useState("");

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    fetchAssessment();
  }, []);

  const fetchAssessment = async () => {
    try {
      setLoading(true);

      const response = await getLatestAssessment();

      setAssessment(response.data);

      setLoading(false);
    } catch (err) {
      console.log(err);

      setLoading(false);

      if (err.response?.status === 404) {
        setAssessment(null);
      } else {
        setError("Unable to load your dashboard.");
      }
    }
  };

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-pink-50">
        <h1 className="text-3xl font-bold text-pink-600">
          Loading Dashboard...
        </h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-pink-50">
        <h1 className="text-2xl text-red-500">
          {error}
        </h1>
      </div>
    );
  }

  if (!assessment) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-pink-50 to-purple-100">

        <h1 className="text-4xl font-bold text-pink-600 mb-4">
          Welcome {user?.name} 💖
        </h1>

        <p className="text-gray-600 mb-8">
          You haven't completed any assessment yet.
        </p>

        <button
          onClick={() => navigate("/assessment")}
          className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-full font-bold"
        >
          Take Your First Assessment
        </button>

      </div>
    );
  }
  return (
  <div className="min-h-screen bg-gradient-to-br from-pink-50 via-pink-100 to-purple-100 p-5 md:p-8">

    <div className="max-w-7xl mx-auto">

      {/* Welcome */}

      <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-center">

        <div>

          <h1 className="text-3xl md:text-4xl font-bold text-pink-600">
            Welcome, {user?.name} 👋
          </h1>

          <p className="text-gray-600 mt-2">
            Here's your latest skincare progress.
          </p>

        </div>

        <button
          onClick={logout}
          className="mt-5 md:mt-0 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full font-semibold"
        >
          Logout
        </button>

      </div>

      {/* Summary */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">

        <div className="bg-white rounded-3xl shadow-lg p-6">

          <div className="text-5xl">💧</div>

          <h2 className="font-bold text-xl mt-4 text-pink-600">
            Skin Type
          </h2>

          <p className="mt-2 text-gray-600">
            {assessment.skinType}
          </p>

        </div>

        <div className="bg-white rounded-3xl shadow-lg p-6">

          <div className="text-5xl">🎯</div>

          <h2 className="font-bold text-xl mt-4 text-purple-600">
            Goals
          </h2>

          <p className="mt-2 text-gray-600">
            {assessment.goals.join(", ")}
          </p>

        </div>

        <div className="bg-white rounded-3xl shadow-lg p-6">

          <div className="text-5xl">✅</div>

          <h2 className="font-bold text-xl mt-4 text-pink-600">
            Assessment
          </h2>

          <p className="text-green-600 mt-2 font-semibold">
            Completed
          </p>

        </div>

        <div className="bg-white rounded-3xl shadow-lg p-6">

          <div className="text-5xl">🤖</div>

          <h2 className="font-bold text-xl mt-4 text-purple-600">
            AI Routine
          </h2>

          <p className="text-green-600 mt-2 font-semibold">
            Generated
          </p>

        </div>

      </div>

      {/* Morning + Night */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">

        <div className="bg-white rounded-3xl shadow-lg p-8">

          <h2 className="text-2xl font-bold text-pink-600 mb-5">
            🌞 Morning Routine
          </h2>

          <ul className="space-y-3">

            {assessment.aiRoutine?.morningRoutine?.map((item, index) => (

              <li
                key={index}
                className="bg-pink-50 rounded-xl p-4"
              >
                {item}
              </li>

            ))}

          </ul>

        </div>

        <div className="bg-white rounded-3xl shadow-lg p-8">

          <h2 className="text-2xl font-bold text-purple-600 mb-5">
            🌙 Night Routine
          </h2>

          <ul className="space-y-3">

            {assessment.aiRoutine?.nightRoutine?.map((item, index) => (

              <li
                key={index}
                className="bg-purple-50 rounded-xl p-4"
              >
                {item}
              </li>

            ))}

          </ul>

        </div>

      </div>

      {/* Quick Actions */}

      <div className="bg-white rounded-3xl shadow-lg p-8 mt-10">

        <h2 className="text-2xl font-bold text-pink-600 mb-8">
          ⚡ Quick Actions
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          <button
            onClick={() => navigate("/assessment")}
            className="bg-pink-500 hover:bg-pink-600 text-white rounded-2xl py-4 font-semibold"
          >
            📝 New Assessment
          </button>

          <button
            onClick={() => navigate("/results")}
            className="bg-purple-500 hover:bg-purple-600 text-white rounded-2xl py-4 font-semibold"
          >
            ✨ View AI Routine
          </button>

          <button
            onClick={() => navigate("/profile")}
            className="bg-pink-400 hover:bg-pink-500 text-white rounded-2xl py-4 font-semibold"
          >
            👤 Profile
          </button>

          <button
            onClick={logout}
            className="bg-red-400 hover:bg-red-500 text-white rounded-2xl py-4 font-semibold"
          >
            🚪 Logout
          </button>

        </div>

      </div>

      {/* Tip */}

      <div className="bg-gradient-to-r from-pink-400 to-purple-400 rounded-3xl shadow-lg text-white text-center p-10 mt-10">

        <h2 className="text-3xl font-bold">
          💖 Daily Tip
        </h2>

        <p className="mt-4 text-lg">
          Healthy skin is built through consistency. Stick to your AI routine every day for the best results.
        </p>

      </div>

    </div>

  </div>
);

}

export default Dashboard;
