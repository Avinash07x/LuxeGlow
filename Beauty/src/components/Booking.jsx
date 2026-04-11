import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Calendar, Clock, User, Mail, Phone } from "lucide-react";

const Booking = () => {
  const location = useLocation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const services = [
    "Basic Glow",
    "Luxury Spa",
    "Bridal Package",
    "Hair Styling",
    "Facial Treatment",
    "Spa & Massage",
    "Eye & Brow",
    "Skin Care",
  ];

  /* ✅ AUTO-SELECT SERVICE */
  useEffect(() => {
    if (location.state?.selectedService) {
      setFormData((prev) => ({
        ...prev,
        service: location.state.selectedService,
      }));
    }
  }, [location.state]);

  /* ✅ INPUT CHANGE */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  /* ✅ SUBMIT FIX (IMPORTANT 🔥) */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMsg("");

    try {
      const res = await fetch("http://localhost:5000/api/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Booking failed");

      setMsg("✅ Booking successful! Email sent.");

      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        date: "",
        time: "",
        message: "",
      });

    } catch (err) {
      setMsg("❌ " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6">
          Book Your Appointment
        </h2>

        {/* ✅ MESSAGE */}
        {msg && (
          <p className="text-center mb-6 font-medium">
            {msg}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Input label="Full Name" icon={<User size={16} />} name="name" value={formData.name} onChange={handleChange} />
            <Input label="Email Address" icon={<Mail size={16} />} name="email" type="email" value={formData.email} onChange={handleChange} />
            <Input label="Phone Number" icon={<Phone size={16} />} name="phone" value={formData.phone} onChange={handleChange} />

            <div>
              <label className="text-sm font-medium mb-2 block">
                Select Service
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200"
              >
                <option value="">Choose a service</option>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            <Input label="Preferred Date" icon={<Calendar size={16} />} name="date" type="date" value={formData.date} onChange={handleChange} />
            <Input label="Preferred Time" icon={<Clock size={16} />} name="time" type="time" value={formData.time} onChange={handleChange} />
          </div>

          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            placeholder="Additional message"
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-rose-500 to-pink-600 text-white py-4 rounded-full font-semibold text-lg"
          >
            {loading ? "Booking..." : "Confirm Booking"}
          </button>
        </form>
      </div>
    </section>
  );
};

/* ✅ INPUT COMPONENT */
const Input = ({ label, icon, name, value, onChange, type = "text" }) => (
  <div>
    <label className="text-sm font-medium mb-2 flex items-center gap-2">
      {icon} {label}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required
      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200"
    />
  </div>
);

export default Booking;