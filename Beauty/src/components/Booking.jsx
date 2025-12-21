// import { useState } from "react";
// import {
//   Calendar,
//   Clock,
//   User,
//   Mail,
//   Phone,
//   MessageSquare,
// } from "lucide-react";

// const Booking = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     service: "",
//     date: "",
//     time: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [msg, setMsg] = useState("");

//   const services = [
//     "Hair Styling",
//     "Facial Treatment",
//     "Spa & Massage",
//     "Bridal Makeup",
//     "Eye & Brow",
//     "Skin Care",
//   ];

//   const handleChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setMsg("");

//     try {
//       const res = await fetch("http://localhost:5000/api/book", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const data = await res.json();

//       if (!res.ok) throw new Error(data.message);

//       setMsg("✅ Booking successful! Email sent.");
//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         service: "",
//         date: "",
//         time: "",
//         message: "",
//       });
//     } catch (err) {
//       setMsg("❌ " + err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section className="py-20">
//       <div className="max-w-3xl mx-auto">
//         <h2 className="text-3xl font-bold text-center mb-6">
//           Book Appointment
//         </h2>

//         {msg && <p className="text-center mb-4">{msg}</p>}

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input name="name" required placeholder="Name" value={formData.name} onChange={handleChange} />
//           <input name="email" type="email" required placeholder="Email" value={formData.email} onChange={handleChange} />
//           <input name="phone" required placeholder="Phone" value={formData.phone} onChange={handleChange} />

//           <select name="service" required value={formData.service} onChange={handleChange}>
//             <option value="">Select Service</option>
//             {services.map((s) => (
//               <option key={s}>{s}</option>
//             ))}
//           </select>

//           <input type="date" name="date" required value={formData.date} onChange={handleChange} />
//           <input type="time" name="time" required value={formData.time} onChange={handleChange} />

//           <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} />

//           <button disabled={loading}>
//             {loading ? "Sending..." : "Confirm Booking"}
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Booking;


import { useState } from "react";
import { Calendar, Clock, User, Mail, Phone, MessageSquare } from "lucide-react";

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });

  const [focusedField, setFocusedField] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Booking failed");
      }

      alert("✅ Booking confirmed! We’ll contact you soon.");

      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        date: "",
        time: "",
        message: "",
      });
    } catch (error) {
      console.error("❌ Booking error:", error.message);
      alert("❌ Booking failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const services = [
    "Hair Styling",
    "Facial Treatment",
    "Spa & Massage",
    "Bridal Makeup",
    "Eye & Brow",
    "Skin Care",
  ];

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-96 h-96 bg-rose-200/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-pink-200/30 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Book Your Appointment
          </h2>
          <p className="text-xl text-gray-600">
            Reserve your slot and experience luxury beauty treatments
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name */}
              <Input
                label="Full Name"
                icon={<User className="w-4 h-4" />}
                name="name"
                value={formData.name}
                onChange={handleChange}
                onFocus={setFocusedField}
                focused={focusedField}
              />

              {/* Email */}
              <Input
                label="Email Address"
                icon={<Mail className="w-4 h-4" />}
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={setFocusedField}
                focused={focusedField}
              />

              {/* Phone */}
              <Input
                label="Phone Number"
                icon={<Phone className="w-4 h-4" />}
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onFocus={setFocusedField}
                focused={focusedField}
              />

              {/* Service */}
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                  Select Service
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-rose-400 outline-none"
                >
                  <option value="">Choose a service</option>
                  {services.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date */}
              <Input
                label="Preferred Date"
                icon={<Calendar className="w-4 h-4" />}
                name="date"
                type="date"
                value={formData.date}
                onChange={handleChange}
                onFocus={setFocusedField}
                focused={focusedField}
              />

              {/* Time */}
              <Input
                label="Preferred Time"
                icon={<Clock className="w-4 h-4" />}
                name="time"
                type="time"
                value={formData.time}
                onChange={handleChange}
                onFocus={setFocusedField}
                focused={focusedField}
              />
            </div>

            {/* Message */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Additional Message
              </label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-rose-400 outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-rose-500 to-pink-600 text-white py-4 rounded-full font-semibold text-lg hover:scale-105 transition"
            >
              {loading ? "Booking..." : "Confirm Booking"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Input = ({
  label,
  icon,
  name,
  value,
  onChange,
  type = "text",
}) => (
  <div>
    <label className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
      {icon} {label}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required
      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-rose-400 outline-none"
    />
  </div>
);

export default Booking;

