import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold mb-4">About Us</h3>
            <p className="text-gray-400">
              We provide innovative IT solutions to help your business grow in
              the digital era.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/services" className="hover:text-gold transition">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gold transition">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gold transition">
                  App Analytics
                </Link>
              </li>
            </ul>
          </div>

          <div className="">
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/" className="text-gold transition hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gold transition hover:underline"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gold transition hover:underline"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="">
            <h3 className="font-bold mb-4">Contact</h3>
            <a
              href="mailto:admin@mangalaam.co.in"
              className="text-gold mb-2 hover:text-gold transition"
            >
              admin@mangalaam.co.in
            </a>
            <p className="text-gray-400">+91 8856078956</p>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2026 Mangalaam. All rights reserved.</p>
          <p className="text-[12px] mt-5 text-gray-500">
            designed & developed by
            <span className="text-gold pl-1">an-IT-MONK</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
