import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="py-24">
      <div className="rounded-[40px] bg-gradient-to-r from-pink-300 to-purple-300 p-16 text-center text-white shadow-2xl">

        <h2 className="text-5xl font-bold">
          Ready to Start Your Glow Journey?
        </h2>

        <p className="mt-6 text-lg opacity-90 max-w-2xl mx-auto">
          Let AI build a personalized skincare routine based on your skin type,
          concerns and goals.
        </p>

        <Link to="/signup">
          <button className="mt-10 bg-white text-pink-500 px-8 py-4 rounded-full font-bold hover:scale-105 transition">
            Get Started Today ✨
          </button>
        </Link>
      </div>
    </section>
  );
}

export default CTA;
