import { useState } from "react";
import {
  Scissors,
  Sparkles,
  Heart,
  Flower2,
  Eye,
  Star,
  X,
} from "lucide-react";

const Services = () => {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      icon: Scissors,
      title: "Hair Styling",
      description:
        "Expert cuts, colors, and treatments for stunning hair transformations",
      details:
        "Our professional hair styling includes precision haircuts, global coloring, balayage, keratin treatments, hair spa, and personalized consultations to match your face shape and lifestyle.",
      image:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
      color: "from-rose-400 to-pink-500",
    },
    {
      icon: Sparkles,
      title: "Facial Treatments",
      description:
        "Rejuvenating facials using premium products for glowing skin",
      details:
        "We offer cleanup, hydra facial, anti-aging facial, acne treatment, gold facial, and skin-brightening therapies using dermatologist-approved products.",
      image:
        "https://images.unsplash.com/photo-1580618672591-eb180b1a973f",
      color: "from-pink-400 to-rose-500",
    },
    {
      icon: Heart,
      title: "Spa & Massage",
      description:
        "Relaxing full-body treatments to refresh your mind and body",
      details:
        "Enjoy Swedish massage, deep tissue therapy, aromatherapy, body polishing, and stress-relief spa sessions in a calm luxury environment.",
      image:
        "https://images.unsplash.com/photo-1544161515-4ab6ce6db874",
      color: "from-amber-400 to-orange-500",
    },
    {
      icon: Flower2,
      title: "Bridal Makeup",
      description: "Picture-perfect bridal looks for your special day",
      details:
        "Complete bridal packages including HD makeup, hair styling, draping, pre-bridal skin care, and trial sessions to ensure perfection on your big day.",
      image:
        "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6",
      color: "from-rose-500 to-red-500",
    },
    {
      icon: Eye,
      title: "Eye & Brow",
      description:
        "Professional shaping, tinting, and enhancement services",
      details:
        "Threading, waxing, eyebrow shaping, eyelash extensions, lash lift, brow lamination, and tinting for perfectly defined eyes.",
      image:
        "https://images.unsplash.com/photo-1583001931096-959e9a1a6223",
      color: "from-pink-500 to-rose-600",
    },
    {
      icon: Star,
      title: "Skin Care",
      description: "Advanced treatments for healthy, radiant skin",
      details:
        "Customized skin treatments including chemical peels, pigmentation correction, hydration therapy, and glow-enhancing rituals.",
      image:
        "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9",
      color: "from-orange-400 to-rose-400",
    },
  ];

  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-b from-white to-rose-50"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of beauty and wellness treatments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-8 relative">
                <div
                  className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.color} mb-4`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>

                <button
                  onClick={() => setActiveService(service)}
                  className="text-rose-500 font-semibold flex items-center hover:translate-x-2 transition-transform"
                >
                  Learn More
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {activeService && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="bg-white max-w-lg w-full rounded-2xl p-8 relative animate-fadeIn">
            <button
              onClick={() => setActiveService(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            >
              <X />
            </button>

            <h3 className="text-3xl font-bold mb-4 text-gray-900">
              {activeService.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {activeService.details}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
