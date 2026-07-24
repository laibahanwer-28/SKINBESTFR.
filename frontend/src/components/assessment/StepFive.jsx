function StepFive({ formData, setFormData }) {
  const handleLifestyleChange = (e) => {
    setFormData({
      ...formData,
      lifestyle: {
        ...formData.lifestyle,
        [e.target.name]: e.target.value,
      },
    });
  };

  return (
    <div>
      <h2 className="text-4xl font-bold text-gray-800 mb-3">
        Tell us about your lifestyle 🌸
      </h2>

      <p className="text-gray-500 mb-10">
        These questions help our AI personalize your skincare routine.
      </p>

      <div className="grid md:grid-cols-2 gap-6">

        {/* Water Intake */}
        <div>
          <label className="block font-semibold mb-2">
            💧 Daily Water Intake
          </label>

          <select
            name="waterIntake"
            value={formData.lifestyle.waterIntake}
            onChange={handleLifestyleChange}
            className="w-full p-4 rounded-2xl border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-300"
          >
            <option value="">Select</option>
            <option>Less than 1L</option>
            <option>1–2L</option>
            <option>2–3L</option>
            <option>More than 3L</option>
          </select>
        </div>

        {/* Sleep */}
        <div>
          <label className="block font-semibold mb-2">
            😴 Sleep Duration
          </label>

          <select
            name="sleep"
            value={formData.lifestyle.sleep}
            onChange={handleLifestyleChange}
            className="w-full p-4 rounded-2xl border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-300"
          >
            <option value="">Select</option>
            <option>Less than 5 Hours</option>
            <option>5–7 Hours</option>
            <option>7–9 Hours</option>
            <option>More than 9 Hours</option>
          </select>
        </div>

        {/* Sunscreen */}
        <div>
          <label className="block font-semibold mb-2">
            ☀️ Do you use sunscreen daily?
          </label>

          <select
            name="sunscreen"
            value={formData.lifestyle.sunscreen}
            onChange={handleLifestyleChange}
            className="w-full p-4 rounded-2xl border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-300"
          >
            <option value="">Select</option>
            <option>Yes</option>
            <option>No</option>
            <option>Sometimes</option>
          </select>
        </div>

        {/* Stress */}
        <div>
          <label className="block font-semibold mb-2">
            😌 Stress Level
          </label>

          <select
            name="stressLevel"
            value={formData.lifestyle.stressLevel}
            onChange={handleLifestyleChange}
            className="w-full p-4 rounded-2xl border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-300"
          >
            <option value="">Select</option>
            <option>Low</option>
            <option>Moderate</option>
            <option>High</option>
          </select>
        </div>

        {/* Exercise */}
        <div className="md:col-span-2">
          <label className="block font-semibold mb-2">
            🏃 Exercise Frequency
          </label>

          <select
            name="exercise"
            value={formData.lifestyle.exercise}
            onChange={handleLifestyleChange}
            className="w-full p-4 rounded-2xl border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-300"
          >
            <option value="">Select</option>
            <option>Rarely</option>
            <option>1–2 Days/Week</option>
            <option>3–5 Days/Week</option>
            <option>Daily</option>
          </select>
        </div>

      </div>

      <div className="mt-10 bg-pink-50 border border-pink-200 rounded-3xl p-6">
        <h3 className="text-xl font-bold text-pink-600 mb-3">
          🌸 Almost There!
        </h3>

        <p className="text-gray-600">
          Click <strong>"Generate Routine ✨"</strong> to let our AI create a
          personalized skincare routine based on your assessment.
        </p>
      </div>
    </div>
  );
}

export default StepFive;
