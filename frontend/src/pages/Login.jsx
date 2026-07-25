import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { loginUser } from "../api/auth";
import InputField from "../components/common/InputField";
import heroImage from "../assets/images/hero.png";

function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");

    if (!form.email || !form.password) {
      setMessage("Please enter both email and password.");
      return;
    }

    try {
      setLoading(true);

      const response = await loginUser(form);

      // Save JWT Token
      localStorage.setItem("token", response.data.token);

      // Save User Info
      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );
      // Remove previous user's routine
localStorage.removeItem("aiRoutine");

      setLoading(false);

      alert("Login Successful! 🎉");

      navigate("/assessment");
    } catch (err) {
      setLoading(false);

      setMessage(
        err.response?.data?.message || "Login Failed"
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100 flex items-center justify-center p-6">

      <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden grid lg:grid-cols-2 max-w-6xl w-full">

        {/* Left Side Image */}

        <div className="hidden lg:flex items-center justify-center bg-gradient-to-br from-pink-100 to-purple-100 p-10">

          <img
            src={heroImage}
            alt="Login"
            className="w-full max-w-md"
          />

        </div>

        {/* Right Side */}

        <div className="p-8 md:p-10">

          <h1 className="text-4xl font-bold text-gray-800">
            Welcome Back 💖
          </h1>

          <p className="text-gray-500 mt-3">
            Login to continue your skincare journey.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-5"
          >

            <InputField
              label="Email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />

            <div className="relative">

              <InputField
                label="Password"
                type={showPassword ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter your password"
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
                className="absolute right-5 top-[52px]"
              >
                {showPassword ? (
                  <FaEyeSlash />
                ) : (
                  <FaEye />
                )}
              </button>

            </div>

            {message && (
              <p className="text-red-500 text-sm">
                {message}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-full text-white font-bold bg-gradient-to-r from-pink-400 to-purple-400 hover:scale-105 transition duration-300 disabled:opacity-60"
            >
              {loading ? "Logging In..." : "Login ✨"}
            </button>

            <p className="text-center text-gray-600">

              Don't have an account?

              <Link
                to="/signup"
                className="text-pink-500 font-bold ml-2"
              >
                Sign Up
              </Link>

            </p>

          </form>

        </div>

      </div>

    </div>
  );
}

export default Login;
