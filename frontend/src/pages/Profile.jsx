import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getLatestAssessment } from "../api/Assessment";
function Profile() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));
const [assessment, setAssessment] = useState(null);
const [loading, setLoading] = useState(true);
useEffect(() => {
  fetchAssessment();
}, []);

const fetchAssessment = async () => {
  try {
    const response = await getLatestAssessment();
    setAssessment(response.data);
  } catch (err) {
    console.log(err);
  } finally {
    setLoading(false);
  }
};

if (loading) {
  return (
    <div className="min-h-screen flex justify-center items-center bg-pink-50">
      <h1 className="text-3xl font-bold text-pink-600">
        Loading Profile...
      </h1>
    </div>
  );
}
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-pink-100 to-purple-100 flex justify-center items-center p-6">

      <div className="bg-white shadow-2xl rounded-[35px] p-10 w-full max-w-xl">

        <div className="text-center">

          <div className="text-7xl mb-4">
            👩
          </div>

          <h1 className="text-4xl font-bold text-pink-600">
            My Profile
          </h1>

          <p className="text-gray-500 mt-2">
            Manage your account information
          </p>

        </div>

        <div className="mt-10 space-y-6">

          <div className="bg-pink-50 rounded-2xl p-5">
            <h2 className="text-sm text-gray-500">
              Full Name
            </h2>

            <p className="text-xl font-semibold text-gray-700">
              {user?.name || "Not Available"}
            </p>
          </div>
{assessment && (
  <>
    <div className="bg-pink-50 rounded-2xl p-5">
      <h2 className="text-sm text-gray-500">
        Skin Type
      </h2>

      <p className="text-xl font-semibold text-gray-700">
        {assessment.skinType}
      </p>
    </div>

    <div className="bg-purple-50 rounded-2xl p-5">
      <h2 className="text-sm text-gray-500">
        Skin Goals
      </h2>

      <p className="text-xl font-semibold text-gray-700">
        {assessment.goals.join(", ")}
      </p>
    </div>

    <div className="bg-pink-50 rounded-2xl p-5">
      <h2 className="text-sm text-gray-500">
        Skin Concerns
      </h2>

      <p className="text-xl font-semibold text-gray-700">
        {assessment.concerns.join(", ")}
      </p>
    </div>

    <div className="bg-purple-50 rounded-2xl p-5">
      <h2 className="text-sm text-gray-500">
        Last Assessment
      </h2>

      <p className="text-xl font-semibold text-gray-700">
        {new Date(assessment.createdAt).toLocaleDateString()}
      </p>
    </div>
  </>
)}
          <div className="bg-purple-50 rounded-2xl p-5">
            <h2 className="text-sm text-gray-500">
              Email Address
            </h2>

            <p className="text-xl font-semibold text-gray-700">
              {user?.email || "Not Available"}
            </p>
          </div>

        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-10">

          <button
            onClick={() => navigate("/dashboard")}
            className="flex-1 bg-purple-500 hover:bg-purple-600 text-white py-3 rounded-full font-semibold"
          >
            🏠 Dashboard
          </button>

          <button
            onClick={() => {
              localStorage.removeItem("token");
              localStorage.removeItem("user");
              localStorage.removeItem("aiRoutine");

              navigate("/login");
            }}
            className="flex-1 bg-red-500 hover:bg-red-600 text-white py-3 rounded-full font-semibold"
          >
            🚪 Logout
          </button>

        </div>

      </div>

    </div>
  );
}

export default Profile;
