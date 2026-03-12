import { useEffect, useState } from "react";
import { FaShoppingBag } from "react-icons/fa";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-gray-900 border-b border-gray-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
              <FaShoppingBag className="text-white text-sm" />
            </div>
            <span className="text-base font-black text-white tracking-tight">
              Sri Sravana Stores
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            <a href="#home" className="text-gray-300 hover:text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-white/10 transition-all">
              Home
            </a>
            <a href="#contact" className="text-gray-300 hover:text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-white/10 transition-all">
              Contact
            </a>
            <a
              href="#contact"
              className="ml-2 inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-gray-900 px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors"
            >
              Order Now
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="w-9 h-9 relative cursor-pointer z-50 md:hidden flex flex-col items-center justify-center gap-1.5"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-white rounded-full transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-white rounded-full transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-white z-40 flex flex-col">
          <div className="flex items-center justify-between px-5 h-16 border-b border-gray-100">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
                <FaShoppingBag className="text-white text-sm" />
              </div>
              <span className="text-base font-black text-gray-900">Sri Sravana Stores</span>
            </div>
            <button
              onClick={() => setMenuOpen(false)}
              className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Close menu"
            >
              <span className="block w-5 h-0.5 bg-gray-800 rounded-full rotate-45 translate-y-px" />
              <span className="block w-5 h-0.5 bg-gray-800 rounded-full -rotate-45 -translate-y-px absolute" />
            </button>
          </div>
          <div className="flex flex-col px-5 py-8 gap-1">
            {[
              { label: "Home",    href: "#home" },
              { label: "Contact", href: "#contact" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-lg font-semibold text-gray-800 hover:text-gray-900 py-3 border-b border-gray-100"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="px-5 mt-auto pb-10">
            <a
              href="#contact"
              className="block w-full text-center bg-gray-900 hover:bg-black text-white py-4 rounded-xl font-semibold text-base transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Order Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
