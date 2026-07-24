import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "../../assets/images/hero.png";

function Hero() {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">

      {/* Background Blur */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-pink-200 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-40"></div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}

          <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-600 px-5 py-2 rounded-full mb-6 font-medium">

            ✨ AI Powered Skincare Assistant

          </div>

          {/* Heading */}

          <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight">

            Healthy Skin

            <br />

            Starts with the

            <br />

            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">

              Right Routine

            </span>

          </h1>

          {/* Description */}

          <p className="mt-8 text-lg text-gray-600 leading-8 max-w-xl">

            Discover AI-powered skincare routines that are
            personalized according to your skin type,
            concerns, lifestyle and skincare goals.

          </p>

          {/* Buttons */}

          <div className="flex flex-wrap gap-5 mt-10">

            <Link to="/signup">

              <button className="px-8 py-4 rounded-full text-white font-semibold shadow-xl bg-gradient-to-r from-pink-400 to-purple-400 hover:scale-105 transition">

                Get Started ✨

              </button>

            </Link>

            <button className="px-8 py-4 rounded-full border-2 border-pink-300 hover:bg-pink-50 transition">

              Learn More

            </button>

          </div>

          {/* Trust */}

          <div className="flex items-center gap-4 mt-12">

            <div className="flex -space-x-3">

              <div className="w-12 h-12 rounded-full bg-pink-300 border-4 border-white"></div>
              <div className="w-12 h-12 rounded-full bg-purple-300 border-4 border-white"></div>
              <div className="w-12 h-12 rounded-full bg-pink-200 border-4 border-white"></div>

            </div>

            <div>

              <p className="font-bold">

                ⭐⭐⭐⭐⭐

              </p>

              <p className="text-gray-500">

                Trusted by skincare lovers

              </p>

            </div>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center items-center"
        >

          {/* Gradient Circle */}

          <div className="absolute w-[430px] h-[430px] rounded-full bg-gradient-to-br from-pink-200 to-purple-200 blur-xl opacity-70"></div>

          {/* Floating Decorations */}

          <div className="absolute top-10 left-10 text-3xl">✨</div>
          <div className="absolute bottom-10 right-10 text-3xl">🌸</div>
          <div className="absolute top-1/2 right-0 text-2xl">💖</div>

          {/* Hero Image */}

          <motion.img
            src={heroImage}
            alt="Hero"
            className="relative w-full max-w-md lg:max-w-lg"
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 5,
            }}
          />

        </motion.div>

      </div>
    </section>
  );
}

export default Hero;