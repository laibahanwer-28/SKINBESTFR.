import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="flex items-center justify-between py-8"
    >
      {/* Logo */}

      <div className="flex items-center gap-2">

        <span className="text-4xl">🌸</span>

        <h1 className="text-3xl font-extrabold tracking-wide">

          <span className="text-pink-500">SKIN</span>

          <span className="text-purple-500">BEST</span>

          <span className="text-pink-400">FR</span>

        </h1>

      </div>

      {/* Menu */}

      <div className="hidden lg:flex gap-10 text-gray-600 font-medium">

        <a href="#">Features</a>

        <a href="#">About</a>

        <a href="#">How It Works</a>

        <a href="#">Testimonials</a>

      </div>

      {/* Buttons */}

      <div className="flex gap-4">

        <Link
          to="/login"
          className="font-semibold hover:text-pink-500 transition"
        >
          Login
        </Link>

        <Link to="/signup">

          <button
            className="px-6 py-3 rounded-full text-white font-semibold shadow-lg transition hover:scale-105"
            style={{
              background:
                "linear-gradient(90deg,#F8AFCF,#CDB4FF)",
            }}
          >
            Sign Up
          </button>

        </Link>

      </div>

    </motion.nav>
  );
}

export default Navbar;