import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Student",
    review:
      "SKINBESTFR helped me build a skincare routine that actually matched my skin type. It made everything much easier.",
  },
  {
    name: "Emily R.",
    role: "Working Professional",
    review:
      "I loved how simple the assessment was. The AI-generated morning and night routines were easy to follow.",
  },
  {
    name: "Ayesha K.",
    role: "University Student",
    review:
      "Being able to choose multiple skin concerns made the recommendations feel much more personalized.",
  },
];

function Testimonials() {
  return (
    <section className="py-24">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-gray-800">
          What Our <span className="text-pink-500">Users Say</span>
        </h2>

        <p className="text-gray-500 mt-4 text-lg">
          Trusted by skincare enthusiasts who want personalized routines.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -8 }}
            className="bg-white rounded-3xl shadow-xl p-8 border border-pink-100"
          >
            <div className="text-2xl mb-4">⭐⭐⭐⭐⭐</div>

            <p className="text-gray-600 leading-7 italic">
              "{item.review}"
            </p>

            <div className="mt-8">
              <h3 className="font-bold text-xl">{item.name}</h3>
              <p className="text-pink-500">{item.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
