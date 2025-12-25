import { useState } from "react";
import { ChevronDown, Gift, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const transformations = [
  {
    before:
      "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?auto=format&fit=crop&w=800&q=80",
    after:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
    service: "Bridal Makeup",
    client: "Priya Sharma",
    story:
      "HD bridal makeup with pre-bridal skin rituals ensuring a flawless, long-lasting glow on her wedding day.",
  },
  {
    before:
      "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?auto=format&fit=crop&w=800&q=80",
    after:
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=800&q=80",
    service: "Skin Care Treatment",
    client: "Ananya Verma",
    story:
      "Advanced pigmentation correction and hydration therapy with visible clarity in just three sessions.",
  },
  {
    before:
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=80",
    after:
      "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?auto=format&fit=crop&w=800&q=80",
    service: "Facial & Glow Therapy",
    client: "Ritika Jain",
    story:
      "Hydra facial combined with anti-aging therapy delivering instant glow before a special occasion.",
  },
  {
    before:
      "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?auto=format&fit=crop&w=800&q=80",
    after:
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=80",
    service: "Hair Styling & Spa",
    client: "Neha Kapoor",
    story:
      "Global hair color with deep-repair spa resulting in smoother, shinier, healthier hair.",
  },
];

const offers = [
  {
    title: "Flat 20% Off Bridal Packages",
    desc: "Limited-time discount on complete bridal makeover packages.",
  },
  {
    title: "Free Hair Spa with Facial",
    desc: "Book any facial treatment and enjoy a complimentary hair spa.",
  },
  {
    title: "Glow Combo @ ₹1999",
    desc: "Cleanup + Facial + Head Massage at a special bundled price.",
  },
];

const faqs = [
  {
    question: "Are these before & after images real?",
    answer:
      "Yes. All images belong to real LuxeGlow clients who provided consent to share their transformation journey.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "Some services deliver instant results, while others may require multiple sessions depending on your skin or hair type.",
  },
  {
    question: "Is consultation free?",
    answer:
      "Absolutely. We provide a free, personalized consultation before every service.",
  },
  {
    question: "Is LuxeGlow salon near my location?",
    answer:
      "Yes. Our salon is centrally located and easily accessible from nearby residential and commercial areas.",
  },
];

const BeforeAfter = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  return (
    <>
      {/* Hero */}
      <section className="py-24 h-[calc(100vh-80px)] bg-gradient-to-br from-rose-300 via-pink-200 to-amber-100 text-center flex flex-col justify-center">
        <h1 className="text-5xl font-bold mb-6">Bridal Beauty</h1>
        <p className="max-w-2xl mx-auto mb-10 text-lg">
          Luxury bridal makeup, pre-bridal skincare, trials & wedding-day perfection.
        </p>
        <Link to="/contact">
          <button className="bg-rose-500 text-white px-8 py-4 rounded-full hover:bg-rose-600 transition">
            Book Now
          </button>
        </Link>
      </section>

      {/* Transformations */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">

          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-4">
              Real Before & After Transformations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real clients. Real services. Real confidence.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-28">
            {transformations.map((item, index) => (
              <div
                key={index}
                className="bg-rose-50 rounded-3xl p-6 shadow-lg"
              >
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <img
                    src={item.before}
                    alt={`${item.client} before`}
                    className="h-48 w-full object-cover rounded-xl"
                  />
                  <img
                    src={item.after}
                    alt={`${item.client} after`}
                    className="h-48 w-full object-cover rounded-xl"
                  />
                </div>

                <h3 className="text-xl font-bold">{item.client}</h3>
                <p className="text-rose-500 font-semibold mb-2">
                  {item.service}
                </p>
                <p className="text-gray-600 text-sm">
                  {item.story}
                </p>
              </div>
            ))}
          </div>

          {/* Location */}
          <div className="bg-rose-100 rounded-3xl p-12 mb-24 text-center">
            <MapPin className="mx-auto text-rose-500 w-10 h-10 mb-4" />
            <h3 className="text-4xl font-bold mb-4">Near Our Salon</h3>
            <p className="text-gray-700 max-w-3xl mx-auto">
              LuxeGlow is located in a prime and easily accessible area.
              Clients visit us for hygiene, trust, and premium beauty services.
            </p>
          </div>

          {/* Offers */}
          <div className="mb-28">
            <h3 className="text-4xl font-bold text-center mb-12">
              Exclusive Offers
            </h3>

            <div className="grid md:grid-cols-3 gap-8">
              {offers.map((offer, index) => (
                <div
                  key={index}
                  className="bg-white border rounded-2xl p-8 text-center shadow-md"
                >
                  <Gift className="mx-auto text-rose-500 mb-4" />
                  <h4 className="text-xl font-bold mb-2">
                    {offer.title}
                  </h4>
                  <p className="text-gray-600">
                    {offer.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQs */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-4xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h3>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border rounded-2xl p-6 cursor-pointer"
                  onClick={() =>
                    setOpenFAQ(openFAQ === index ? null : index)
                  }
                >
                  <div className="flex justify-between items-center">
                    <h4 className="font-semibold text-lg">
                      {faq.question}
                    </h4>
                    <ChevronDown
                      className={`transition-transform ${
                        openFAQ === index ? "rotate-180" : ""
                      }`}
                    />
                  </div>

                  {openFAQ === index && (
                    <p className="text-gray-600 mt-4">
                      {faq.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default BeforeAfter;
