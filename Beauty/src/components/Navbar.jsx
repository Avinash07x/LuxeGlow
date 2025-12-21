import { useEffect, useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'Services', 'About', 'Gallery', 'Testimonials', 'Contact'];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 hoverable">
            <Sparkles className={`w-8 h-8 ${scrolled ? 'text-rose-500' : 'text-white'}`} />
            <span
              className={`text-2xl font-bold transition-colors duration-300 ${
                scrolled ? 'text-gray-900' : 'text-white'
              }`}
            >
              LuxeGlow
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`nav-link relative text-sm font-medium transition-colors duration-300 ${
                  scrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {item}
              </a>
            ))}
          </div>

          <a href="#contact">
          <button className="w-full bg-gradient-to-r from-rose-400 to-pink-500 text-white px-6 py-3 rounded-full font-medium">
            Book Now
          </button>
          </a>

          <button
            className="md:hidden hoverable"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className={scrolled ? 'text-gray-900' : 'text-white'} />
            ) : (
              <Menu className={scrolled ? 'text-gray-900' : 'text-white'} />
            )}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white/95 backdrop-blur-md px-4 py-6 space-y-4">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block text-gray-700 font-medium hover:text-rose-500 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <a href="#contact">
          <button className="w-full bg-gradient-to-r from-rose-400 to-pink-500 text-white px-6 py-3 rounded-full font-medium">
            Book Now
          </button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
