import {
  Sparkles,
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();

  const handleAnchorClick = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-5">
              <Sparkles className="w-8 h-8 text-rose-400" />
              <span className="text-2xl font-bold">LuxeGlow</span>
            </div>

            <p className="text-gray-400 mb-6 leading-relaxed">
              LuxeGlow is your destination for premium beauty & wellness
              treatments. Experience elegance, expertise, and transformation.
            </p>

            <div className="flex space-x-4">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-rose-500 transition"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">

              <li>
                <button
                  onClick={() => handleAnchorClick("#home")}
                  className="text-gray-400 hover:text-rose-400 transition"
                >
                  Home
                </button>
              </li>

              <li>
                <button
                  onClick={() => handleAnchorClick("#services")}
                  className="text-gray-400 hover:text-rose-400 transition"
                >
                  Services
                </button>
              </li>

              <li>
                <button
                  onClick={() => handleAnchorClick("#about")}
                  className="text-gray-400 hover:text-rose-400 transition"
                >
                  About
                </button>
              </li>

              <li>
                <button
                  onClick={() => handleAnchorClick("#gallery")}
                  className="text-gray-400 hover:text-rose-400 transition"
                >
                  Gallery
                </button>
              </li>

              <li>
                <Link
                  to="/transformations"
                  className="text-gray-400 hover:text-rose-400 transition"
                >
                  Transformations
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-rose-400 transition"
                >
                  Contact
                </Link>
              </li>

            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {[
                "Hair Styling",
                "Facial Treatments",
                "Spa & Massage",
                "Bridal Makeup",
                "Eye & Brow",
                "Skin Care",
              ].map((service) => (
                <li key={service}>
                  <button
                    onClick={() => handleAnchorClick("#services")}
                    className="text-gray-400 hover:text-rose-400 transition"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <ul className="space-y-4 text-gray-400">

              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-rose-400 mt-1" />
                <span>
                  21A Luxe Street, Andheri West, Mumbai – 400053
                </span>
              </li>

              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-rose-400" />
                <a href="tel:+919876543210" className="hover:text-rose-400">
                  +91 98765 43210
                </a>
              </li>

              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-rose-400" />
                <a href="mailto:hello@luxeglow.in" className="hover:text-rose-400">
                  hello@luxeglow.in
                </a>
              </li>

              <li className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-rose-400" />
                <span>Mon – Sun : 10:00 AM – 9:00 PM</span>
              </li>

            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} LuxeGlow Beauty Parlour. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
