import { Link } from "react-router-dom";
import mainLogo from "../assets/mangalaam-global-logo.png";
import { useEffect, useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <header className="bg-white text-dark shadow-lg sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <img src={mainLogo} alt="Logo" className="w-[220px]" />
        </Link>

        <div
          className={`menu-icon inline-block cursor-pointer ${isMenuOpen ? "open" : "close"} md:hidden`}
          onClick={handleMenuClick}
        >
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
        <div
          className={`mobile-menu ${isMenuOpen ? "flex" : "hidden"} md:block`}
        >
          <ul className="mobile-menu-list md:flex gap-8">
            <li>
              <Link
                to="/"
                className="hover:text-gold transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="hover:text-gold transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-gold transition"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-gold transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
            <li>
              <a
                href="tel:8856078956"
                className="call-us md:hidden bg-gold px-6 py-2 rounded font-semibold hover:bg-yellow-400 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                CALL US
              </a>
            </li>
          </ul>
        </div>
        <a
          href="tel:"
          className="hidden md:block bg-gold text-dark px-6 py-2 rounded font-semibold hover:bg-yellow-400 transition"
        >
          CALL US
        </a>
      </nav>
    </header>
  );
}
