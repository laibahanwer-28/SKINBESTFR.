function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-pink-100 to-purple-100 p-8">

      {/* Welcome Section */}

      <div className="max-w-7xl mx-auto">

        <div className="bg-white rounded-[35px] shadow-xl p-8 mb-8">

          <h1 className="text-4xl font-bold text-pink-600">
            👋 Welcome Back!
          </h1>

          <p className="text-gray-600 mt-2 text-lg">
            Ready to continue your skincare journey?
          </p>

        </div>

        {/* Summary Cards */}

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-white rounded-3xl shadow-lg p-6">

            <div className="text-5xl">💧</div>

            <h2 className="font-bold text-xl mt-4 text-pink-600">
              Skin Type
            </h2>

            <p className="mt-2 text-gray-600">
              Oily
            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6">

            <div className="text-5xl">🎯</div>

            <h2 className="font-bold text-xl mt-4 text-purple-600">
              Goal
            </h2>

            <p className="mt-2 text-gray-600">
              Reduce Acne
            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6">

            <div className="text-5xl">✅</div>

            <h2 className="font-bold text-xl mt-4 text-pink-600">
              Assessment
            </h2>

            <p className="mt-2 text-green-600 font-semibold">
              Completed
            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6">

            <div className="text-5xl">🤖</div>

            <h2 className="font-bold text-xl mt-4 text-purple-600">
              AI Routine
            </h2>

            <p className="mt-2 text-green-600 font-semibold">
              Generated
            </p>

          </div>

        </div>

        {/* Morning + Night */}

        <div className="grid md:grid-cols-2 gap-8 mt-10">

          <div className="bg-white rounded-3xl shadow-lg p-8">

            <h2 className="text-2xl font-bold text-pink-600 mb-5">
              🌞 Morning Routine
            </h2>

            <ul className="space-y-4">

              <li className="bg-pink-50 rounded-xl p-4">
                ☀️ Cleanser
              </li>

              <li className="bg-pink-50 rounded-xl p-4">
                💧 Serum
              </li>

              <li className="bg-pink-50 rounded-xl p-4">
                🧴 Moisturizer
              </li>

              <li className="bg-pink-50 rounded-xl p-4">
                🧴 Sunscreen
              </li>

            </ul>

          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8">

            <h2 className="text-2xl font-bold text-purple-600 mb-5">
              🌙 Night Routine
            </h2>

            <ul className="space-y-4">

              <li className="bg-purple-50 rounded-xl p-4">
                🌙 Cleanser
              </li>

              <li className="bg-purple-50 rounded-xl p-4">
                ✨ Treatment
              </li>

              <li className="bg-purple-50 rounded-xl p-4">
                💧 Moisturizer
              </li>

            </ul>

          </div>

        </div>

        {/* Quick Actions */}

        <div className="bg-white rounded-3xl shadow-lg p-8 mt-10">

          <h2 className="text-2xl font-bold text-pink-600 mb-8">
            ⚡ Quick Actions
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            <button className="bg-pink-500 hover:bg-pink-600 transition text-white rounded-2xl py-4 font-semibold">
              📝 New Assessment
            </button>

            <button className="bg-purple-500 hover:bg-purple-600 transition text-white rounded-2xl py-4 font-semibold">
              ✨ View AI Routine
            </button>

            <button className="bg-pink-400 hover:bg-pink-500 transition text-white rounded-2xl py-4 font-semibold">
              👤 Profile
            </button>

            <button className="bg-purple-400 hover:bg-purple-500 transition text-white rounded-2xl py-4 font-semibold">
              ⏰ Reminder
            </button>

          </div>

        </div>

        {/* Quote */}

        <div className="bg-gradient-to-r from-pink-400 to-purple-400 rounded-3xl shadow-lg text-white text-center p-10 mt-10">

          <h2 className="text-3xl font-bold">
            💖 Skincare Tip
          </h2>

          <p className="mt-4 text-lg">
            Healthy skin is a reflection of consistent care. Follow your AI routine every day for the best results.
          </p>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;
