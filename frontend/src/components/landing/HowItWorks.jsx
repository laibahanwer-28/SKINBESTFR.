import { motion } from "framer-motion";
import {
  FaUserPlus,
  FaClipboardList,
  FaRobot,
  FaSpa,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaUserPlus />,
    title: "Create Account",
    desc: "Sign up and securely create your SKINBESTFR account.",
  },
  {
    icon: <FaClipboardList />,
    title: "Complete Assessment",
    desc: "Choose your skin type, concerns, goals and routine preferences.",
  },
  {
    icon: <FaRobot />,
    title: "AI Builds Routine",
    desc: "Our AI creates a personalized skincare routine just for you.",
  },
  {
    icon: <FaSpa />,
    title: "Glow Every Day",
    desc: "Follow your AM & PM routine consistently for healthier skin.",
  },
];

function HowItWorks() {
  return (
    <section className="py-24">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-gray-800">
          How It <span className="text-pink-500">Works</span>
        </h2>

        <p className="text-gray-500 mt-4 text-lg">
          Four simple steps to build your personalized skincare routine.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
            className="bg-white/70 backdrop-blur-md rounded-3xl p-8 shadow-lg text-center border border-pink-100"
          >
            <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-pink-400 to-purple-400 flex items-center justify-center text-white text-3xl mb-6">
              {step.icon}
            </div>

            <div className="text-pink-500 font-bold mb-2">
              Step {index + 1}
            </div>

            <h3 className="text-2xl font-bold mb-3">
              {step.title}
            </h3>

            <p className="text-gray-500 leading-7">
              {step.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;
