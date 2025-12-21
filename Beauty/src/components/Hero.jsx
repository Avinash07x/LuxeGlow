import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-br from-rose-300 via-pink-200 to-amber-100"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
          opacity: 1 - scrollY / 500,
        }}
      >
        <div className="absolute top-20 left-10 w-72 h-72 bg-rose-400/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-400/30 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-amber-300/30 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative h-full flex items-center justify-center text-center px-4">
        <div
          className="max-w-4xl"
          style={{
            transform: `translateY(${scrollY * 0.2}px)`,
            opacity: 1 - scrollY / 300,
          }}
        >
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 animate-fade-in-up">
            Beauty <span className="text-rose-600">Redefined</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in-up animation-delay-200">
            Experience luxury beauty treatments in a serene, elegant environment
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
            <button className="magnetic-btn bg-white text-rose-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              Explore Services
            </button>
            <button className="magnetic-btn bg-rose-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-white">
              Book Appointment
            </button>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
        style={{
          opacity: 1 - scrollY / 200,
        }}
      >
        <a href="#services" className="cursor-pointer">
        <ChevronDown className="w-8 h-8 text-white" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
