import { Link as ScrollLink } from "react-scroll";
import { useState, useRef, useEffect } from "react";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "Our Story", id: "story" },
  { name: "Wedding Details", id: "details" },
  { name: "Memories", id: "memories" },
  { name: "FAQ", id: "faq" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);

      // Mobile hide on scroll down, show on scroll up
      if (window.innerWidth < 768) {
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setShowMobileNav(false); // scrolling down
        } else {
          setShowMobileNav(true); // scrolling up
        }
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-transform duration-300 ${
        scrolled
          ? "bg-white/30 backdrop-blur-lg border-b border-white/30 shadow-md" // frosted glass on scroll
          : "bg-transparent backdrop-blur-0 border-none shadow-none" // transparent at top
      } ${
        showMobileNav ? "translate-y-0" : "-translate-y-full"
      } md:translate-y-0`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Names */}
        <div
          className={`text-2xl font-bold cursor-pointer ${
            isOpen ? "text-white" : scrolled ? "text-[#653720]" : "text-white"
          }`}
        >
          Aldrin & Jessa
        </div>

        {/* Desktop Menu */}
        <ul
          className={`hidden md:flex space-x-8 font-medium ${
            isOpen ? "text-white" : scrolled ? "text-[#653720]" : "text-white"
          }`}
        >
          {navLinks.map((link) => (
            <li key={link.name}>
              <ScrollLink
                to={link.id}
                smooth={true}
                offset={-100}
                duration={500}
                className="cursor-pointer hover:text-[#8daabb] transition"
              >
                {link.name}
              </ScrollLink>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden text-3xl ${
            isOpen ? "text-white" : scrolled ? "text-black" : "text-white"
          }`}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          ref={menuRef}
          className="md:hidden fixed inset-0 z-50 flex flex-col items-center justify-start bg-white/80 backdrop-blur-lg px-6"
        >
          {/* Add top margin to push menu below navbar */}
          <ul className="flex flex-col justify-center items-center space-y-6 w-full mt-24 p-8 bg-black/70 backdrop-blur-xl rounded-2xl shadow-lg border border-white/30">
            {navLinks.map((link) => (
              <li key={link.name} className="w-full">
                <ScrollLink
                  to={link.id}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="block w-full text-center py-2 text-2xl sm:text-3xl font-semibold text-[#8daabb] hover:text-[#ffffff] transition-colors rounded-lg hover:bg-white/10"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
