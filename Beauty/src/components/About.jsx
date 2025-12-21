import { Award, Users, Clock, Heart } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const stats = [
    { icon: Award, number: '15+', label: 'Years Experience' },
    { icon: Users, number: '10K+', label: 'Happy Clients' },
    { icon: Clock, number: '24/7', label: 'Support Available' },
    { icon: Heart, number: '100%', label: 'Satisfaction Rate' },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 bg-white relative overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-rose-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-200/30 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-20'
            }`}
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Where Beauty Meets{' '}
              <span className="text-rose-500">Excellence</span>
            </h2>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At LuxeGlow, we believe every individual deserves to feel beautiful
              and confident. Our team of expert beauticians combines years of
              experience with the latest techniques to deliver exceptional
              results.
            </p>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              From luxurious spa treatments to cutting-edge beauty services, we
              offer a complete range of solutions tailored to your unique needs.
              Step into our tranquil sanctuary and let us pamper you.
            </p>

            {/* <button className="magnetic-btn bg-gradient-to-r from-rose-500 to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              Discover Our Story
            </button> */}
          </div>

          {/* Right stats */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-20'
            }`}
          >
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="stat-card bg-gradient-to-br from-rose-50 to-pink-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <stat.icon className="w-10 h-10 text-rose-500 mb-4" />
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
