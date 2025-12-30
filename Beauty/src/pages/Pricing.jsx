import { Check, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const plans = [
    {
      title: "Basic Glow",
      price: "₹1,999",
      duration: "60 mins",
      description: "Perfect for a quick refresh & natural glow, radiant finish.",
      popular: false,
      features: [
        "Clean-up Facial",
        "Threading",
        "Face Massage",
        "Skin Consultation",
      ],
    },
    {
      title: "Luxury Spa",
      price: "₹4,999",
      duration: "120 mins",
      description: "Deep relaxation & complete rejuvenation experience.",
      popular: true,
      features: [
        "Full Body Massage",
        "Body Spa Therapy",
        "Aroma Relaxation",
        "Complimentary Tea",
      ],
    },
    {
      title: "Bridal Package",
      price: "₹19,999",
      duration: "Multiple Sessions",
      description: "Complete bridal beauty from pre-bridal to wedding day.",
      popular: false,
      features: [
        "HD Bridal Makeup",
        "Hair Styling",
        "Makeup Trial",
        "Pre-Bridal Skin Care",
      ],
    },
  ];

  return (
    <section className="py-24 bg-rose-50">
      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">
            Pricing & Packages
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from our luxury beauty packages.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className={`relative bg-white rounded-3xl p-8 shadow-lg transition hover:scale-105 ${
                plan.popular ? "ring-2 ring-rose-500" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-rose-500 text-white px-4 py-1 rounded-full text-sm flex items-center gap-1">
                  <Star size={14} /> Most Popular
                </div>
              )}

              <h2 className="text-2xl font-bold mb-2">{plan.title}</h2>
              <p className="text-sm text-gray-500 mb-4">{plan.description}</p>

              <p className="text-4xl font-bold text-rose-500 mb-1">
                {plan.price}
              </p>
              <p className="text-sm text-gray-500 mb-6">
                Duration: {plan.duration}
              </p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-gray-700">
                    <Check size={18} className="text-rose-500" />
                    {f}
                  </li>
                ))}
              </ul>

              {/* ✅ PASS SELECTED PACKAGE */}
              <Link
                to="/contact"
                state={{ selectedService: plan.title }}
              >
                <button className="w-full bg-gradient-to-r from-rose-500 to-pink-600 text-white py-3 rounded-full font-semibold">
                  Book Now
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
