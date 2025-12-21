import { Sparkles, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Sparkles className="w-8 h-8 text-rose-400" />
              <span className="text-2xl font-bold">LuxeGlow</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your destination for premium beauty and wellness treatments. Experience luxury, elegance, and transformation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="social-icon w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-rose-500 transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="social-icon w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-rose-500 transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="social-icon w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-rose-500 transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Services', 'About', 'Gallery', 'Testimonials', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-rose-400 transition-colors duration-300 inline-block hover:translate-x-1 transform"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {['Hair Styling', 'Facial Treatments', 'Spa & Massage', 'Bridal Makeup', 'Eye & Brow', 'Skin Care'].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-rose-400 transition-colors duration-300 inline-block hover:translate-x-1 transform"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-rose-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400">123 Beauty Street, Luxury District, NY 10001</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-rose-400 flex-shrink-0" />
                <a href="tel:+15551234567" className="text-gray-400 hover:text-rose-400 transition-colors">
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-rose-400 flex-shrink-0" />
                <a href="mailto:info@luxeglow.com" className="text-gray-400 hover:text-rose-400 transition-colors">
                  info@luxeglow.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} LuxeGlow Beauty Parlour. All rights reserved. Crafted with love and care.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
