const Booking = require("../models/Booking");
const nodemailer = require("nodemailer");

/* ✅ Transporter (Better Config) */
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

/* ✅ Controller */
exports.createBooking = async (req, res) => {
  try {
    const { name, email, phone, service, date, time, message } = req.body;

    /* ✅ Validation */
    if (!name || !email || !phone || !service || !date || !time) {
      return res.status(400).json({
        success: false,
        message: "All required fields must be filled",
      });
    }

    /* ✅ Save booking */
    const booking = await Booking.create({
      name,
      email,
      phone,
      service,
      date,
      time,
      message,
    });

    /* ✅ Send Email */
    await transporter.sendMail({
      from: `"Beauty Booking" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "💄 New Booking Received",
      html: `
        <h2>New Booking</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        <p><strong>Message:</strong> ${message || "N/A"}</p>
      `,
    });

    res.status(201).json({
      success: true,
      message: "Booking created successfully ✅",
      data: booking,
    });

  } catch (err) {
    console.error("❌ Booking Error:", err);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};