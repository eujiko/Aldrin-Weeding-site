import { FaInstagram, FaFacebook, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#8daabb] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Left: Names and copyright */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-serif">Aldrin & Jessa</h3>
          <p className="mt-2 text-sm">© 2026 All Rights Reserved</p>
        </div>

        {/* Center: Social Icons */}
        <div className="flex space-x-6 text-xl">
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="hover:text-pink-300 transition-colors">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="hover:text-pink-300 transition-colors">
            <FaFacebook />
          </a>
          <a href="mailto:aldin.jessa@example.com" className="hover:text-pink-300 transition-colors">
            <FaEnvelope />
          </a>
        </div>

        {/* Right: Wedding tagline */}
        <div className="text-center md:text-right">
          <p className="italic text-sm">“Two hearts, one love, a lifetime together.”</p>
        </div>
      </div>
    </footer>
  );
}
