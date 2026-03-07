import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white text-dark shadow-lg sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/src/assets/mangalaam-global-logo.png"
            alt="Logo"
            className="w-[220px]"
          />
        </Link>

        <ul className="hidden md:flex gap-8">
          <li>
            <Link to="/" className="hover:text-gold transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-gold transition">
              Services
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gold transition">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gold transition">
              Contact
            </Link>
          </li>
        </ul>

        <button className="bg-gold text-dark px-6 py-2 rounded font-semibold hover:bg-yellow-400 transition">
          GET A QUOTE
        </button>
      </nav>
    </header>
  );
}
