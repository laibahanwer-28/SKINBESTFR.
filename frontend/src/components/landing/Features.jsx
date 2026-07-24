import { motion } from "framer-motion";
import {
  FaRobot,
  FaLeaf,
  FaHeart,
  FaCalendarAlt,
  FaTint,
  FaShieldAlt,
} from "react-icons/fa";

const features = [
  {
    icon: <FaRobot size={32} />,
    title: "AI Powered",
    desc: "Receive skincare routines tailored to your skin profile using AI.",
  },
  {
    icon: <FaLeaf size={32} />,
    title: "Routine Goals",
    desc: "Choose multiple skin goals and let AI build the perfect routine.",
  },
  {
    icon: <FaHeart size={32} />,
    title: "AM & PM Plans",
    desc: "Separate morning and evening skincare routines for better results.",
  },
  {
    icon: <FaCalendarAlt size={32} />,
    title: "Routine Tracking",
    desc: "Stay consistent and monitor your skincare journey.",
  },
  {
    icon: <FaTint size={32} />,
    title: "Multiple Concerns",
    desc: "Support for acne, dryness, pigmentation, oiliness and more.",
  },
  {
    icon: <FaShieldAlt size={32} />,
    title: "Private & Secure",
    desc: "Your skincare information stays protected and confidential.",
  },
];

function Features() {
  return (
    <section className="py-24">

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl font-bold text-gray-800">
          Why Choose{" "}
          <span className="text-pink-500">SKINBESTFR?</span>
        </h2>

        <p className="text-gray-500 mt-5 text-lg">
          Everything you need for a smarter skincare journey.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {features.map((feature, index) => (
          <motion.div
            key={index}
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
            transition={{ duration: 0.3 }}
            className="rounded-3xl bg-white/70 backdrop-blur-md shadow-xl p-8 border border-pink-100"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-pink-300 to-purple-300 flex items-center justify-center text-white mb-6">
              {feature.icon}
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              {feature.title}
            </h3>

            <p className="text-gray-500 leading-7">
              {feature.desc}
            </p>
          </motion.div>
        ))}

      </div>
    </section>
  );
}

export default Features;
