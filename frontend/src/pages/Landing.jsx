import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";
import Features from "../components/landing/Features";
import HowItWorks from "../components/landing/HowItWorks";
import Testimonials from "../components/landing/Testimonials";
import CTA from "../components/landing/CTA";
import Footer from "../components/landing/Footer";
function Landing() {
  return (
    <div
      className="min-h-screen"
      style={{
        background: "linear-gradient(135deg,#FFF5F9,#F7F0FF)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <Navbar />

        <Hero />

        <Features />

        <HowItWorks />

        <Testimonials />

<CTA />

<Footer />

      </div>
    </div>
  );
}

export default Landing;
