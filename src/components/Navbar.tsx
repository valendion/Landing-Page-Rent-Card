import { useState, useEffect } from "react";
import { CarIcon, MenuIcon } from "./Icons";
import { navLinks } from "../data/cars";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offsetTop =
        element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
      setActiveSection(href);
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-xl shadow-lg shadow-slate-900/5 border-b border-slate-200/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-20 gap-12 lg:gap-16">
          {/* Logo - Kiri */}
          <div
            className="flex items-center space-x-3 cursor-pointer group shrink-0"
            onClick={scrollToTop}
          >
            <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-slate-900/20">
              <CarIcon className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
              Dion Rent Car
            </span>
          </div>

          {/* Desktop Navigation - TENGAH */}
          <div className="hidden md:flex flex-1 justify-center items-center">
            <div className="flex items-center space-x-1 bg-slate-100/50 backdrop-blur-sm rounded-full p-1.5 border border-slate-200/50">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeSection === link.href
                      ? "text-slate-900 bg-white shadow-md"
                      : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Desktop Actions - Kanan */}
          <div className="hidden md:flex items-center space-x-4 shrink-0">
            <a
              href="https://wa.me/6285340715225?text=Halo%2C%20saya%20ingin%20pesan%20mobil"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-slate-800 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-slate-900/20"
            >
              Pesan Sekarang
            </a>
          </div>

          {/* Mobile Menu Button - Kanan (hanya mobile) */}
          <button
            className="md:hidden p-2 hover:bg-slate-100 rounded-full transition-colors ml-auto"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <MenuIcon className="w-6 h-6 text-slate-700" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute w-full bg-white/95 backdrop-blur-xl border-b border-slate-200 transition-all duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="px-4 py-6 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block px-4 py-3 text-lg font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition-colors"
              onClick={(e) => {
                handleNavClick(e, link.href);
                setIsMobileMenuOpen(false);
              }}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 mt-4 border-t border-slate-100 space-y-3">
            <a
              href="https://wa.me/6281241820456?text=Halo%2C%20saya%20ingin%20pesan%20mobil"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-slate-900 text-white py-3 rounded-xl font-medium hover:bg-slate-800 transition-all duration-300 text-center"
            >
              Pesan Sekarang
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
