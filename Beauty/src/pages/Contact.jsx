import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Booking from "../components/Booking";

const Contact = () => {
  return (
    <>
      {/* Hero Contact Section */}
      <section className="py-24 h-[calc(100vh-80px)] bg-gradient-to-br from-rose-300 via-pink-200 to-amber-100 text-center flex items-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">
            Contact LuxeGlow
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-10">
            Luxury bridal makeup, pre-bridal skincare, personalized trials
            & wedding-day perfection — all under one roof.
          </p>

          <a
            href="#contact"
            className="bg-rose-500 hover:bg-rose-600 transition text-white px-10 py-4 rounded-full font-semibold"
          >
            Book Now
          </a>
        </div>
      </section>
      <Booking />
      {/* Contact Details */}
      <section
        className="py-24 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16">

          {/* Left Info */}
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Get In Touch
            </h2>
            <p className="text-gray-600 mb-10">
              Visit our salon or reach out to us directly. Our beauty experts
              are always ready to help you look and feel your best.
            </p>

            <div className="space-y-6 text-gray-700">
              <div className="flex items-start gap-4">
                <MapPin className="text-rose-500" />
                <p>
                  LuxeGlow Beauty Studio <br />
                  123 Luxury Avenue, South Delhi, India
                </p>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="text-rose-500" />
                <p>+91 98765 43210</p>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="text-rose-500" />
                <p>hello@luxeglowbeauty.in</p>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="text-rose-500" />
                <p>
                  Mon – Sun: 10:00 AM – 8:00 PM <br />
                  Bridal appointments available by booking
                </p>
              </div>
            </div>
          </div>

          {/* Right Map */}
          <div className="rounded-3xl overflow-hidden shadow-lg h-[420px]">
            <iframe
              title="LuxeGlow Location"
              src="https://www.google.com/maps?q=South+Delhi&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

