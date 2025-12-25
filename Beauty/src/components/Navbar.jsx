import { useEffect, useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home", type: "anchor" },
    { name: "Services", href: "#services", type: "anchor" },
    { name: "About", href: "#about", type: "anchor" },
    { name: "Gallery", href: "#gallery", type: "anchor" },
    { name: "Testimonials", href: "#testimonials", type: "anchor" },
    { name: "Transformations", href: "/transformations", type: "route" },
    { name: "Contact", href: "/contact", type: "route" },
  ];

  const handleAnchorClick = (href) => {
    setMobileMenuOpen(false);

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      }, 300);
      return;
    }

    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Sparkles className={`w-8 h-8 ${scrolled ? "text-rose-500" : "text-white"}`} />
            <span className={`text-2xl font-bold ${scrolled ? "text-gray-900" : "text-white"}`}>
              LuxeGlow
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-14">
            {navItems.map((item) =>
              item.type === "anchor" ? (
                <button
                  key={item.name}
                  onClick={() => handleAnchorClick(item.href)}
                  className={`text-sm font-medium ${
                    scrolled ? "text-gray-700" : "text-white"
                  } hover:text-rose-500`}
                >
                  {item.name}
                </button>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium ${
                    scrolled ? "text-gray-700" : "text-white"
                  } hover:text-rose-500`}
                >
                  {item.name}
                </Link>
              )
            )}

            <Link to="/contact">
              <button className="bg-gradient-to-r from-rose-400 to-pink-500 text-white px-6 py-3 rounded-full font-medium">
                Book Now
              </button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className={scrolled ? "text-gray-900" : "text-white"} />
            ) : (
              <Menu className={scrolled ? "text-gray-900" : "text-white"} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white px-4 py-6 space-y-4">
          {navItems.map((item) =>
            item.type === "anchor" ? (
              <button
                key={item.name}
                onClick={() => handleAnchorClick(item.href)}
                className="block w-full text-left text-gray-700 font-medium hover:text-rose-500"
              >
                {item.name}
              </button>
            ) : (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-gray-700 font-medium hover:text-rose-500"
              >
                {item.name}
              </Link>
            )
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
