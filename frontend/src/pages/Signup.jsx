import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { registerUser } from "../api/auth";
import InputField from "../components/common/InputField";
import heroImage from "../assets/images/hero.png";

function Signup() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
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

    if (form.password !== form.confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);

      await registerUser({
        name: form.name,
        email: form.email,
        password: form.password,
      });

      setLoading(false);

      alert("Registration Successful!");

      navigate("/login");
    } catch (err) {
      setLoading(false);

      setMessage(
        err.response?.data?.message || "Registration Failed"
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100 flex items-center justify-center p-8">

      <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden grid lg:grid-cols-2 max-w-6xl w-full">

        {/* Left */}

        <div className="hidden lg:flex items-center justify-center bg-gradient-to-br from-pink-100 to-purple-100 p-10">

          <img
            src={heroImage}
            alt="Signup"
            className="w-full max-w-md"
          />

        </div>

        {/* Right */}

        <div className="p-10">

          <h1 className="text-4xl font-bold text-gray-800">

            Create Your Account 💖

          </h1>

          <p className="text-gray-500 mt-3">

            Join SKINBESTFR and start your glow journey.

          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-5"
          >

            <InputField
              label="Full Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />

            <InputField
              label="Email"
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
                placeholder="Password"
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
                className="absolute right-5 top-[52px]"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>

            </div>

            <div className="relative">

              <InputField
                label="Confirm Password"
                type={showConfirm ? "text" : "password"}
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
              />

              <button
                type="button"
                onClick={() =>
                  setShowConfirm(!showConfirm)
                }
                className="absolute right-5 top-[52px]"
              >
                {showConfirm ? <FaEyeSlash /> : <FaEye />}
              </button>

            </div>

            {message && (
              <p className="text-red-500">{message}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-full text-white font-bold bg-gradient-to-r from-pink-400 to-purple-400 hover:scale-105 transition"
            >
              {loading
                ? "Creating Account..."
                : "Create Account ✨"}
            </button>

            <p className="text-center text-gray-600">

              Already have an account?

              <Link
                to="/login"
                className="text-pink-500 font-bold ml-2"
              >
                Login
              </Link>

            </p>

          </form>

        </div>

      </div>

    </div>
  );
}

export default Signup;
