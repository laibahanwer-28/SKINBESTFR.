import { FaInstagram, FaFacebook, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="py-12">
      <div className="border-t border-pink-100 pt-10 flex flex-col lg:flex-row justify-between items-center gap-6">

        <div>
          <h2 className="text-3xl font-bold">
            <span className="text-pink-500">SKIN</span>
            <span className="text-purple-500">BEST</span>
            <span className="text-pink-400">FR</span>
          </h2>

          <p className="text-gray-500 mt-2">
            AI-powered skincare made simple.
          </p>
        </div>

        <div className="flex gap-8 text-gray-600">
          <a href="#">Home</a>
          <a href="#">Features</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>

        <div className="flex gap-4 text-2xl text-pink-500">
          <FaInstagram />
          <FaFacebook />
          <FaGithub />
        </div>

      </div>

      <p className="text-center text-gray-400 mt-8">
        © 2026 SKINBESTFR. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
