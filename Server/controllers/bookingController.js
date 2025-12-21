const Booking = require("../models/Booking");
const nodemailer = require("nodemailer");

exports.createBooking = async (req, res) => {
  try {
    console.log("📩 Incoming booking:", req.body);

    // 1️⃣ Save to DB
    const booking = await Booking.create(req.body);

    // 2️⃣ Mail transport
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 3️⃣ Send mail
    await transporter.sendMail({
      from: `"Beauty Booking" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "💄 New Booking Received",
      html: `
        <h2>New Appointment</h2>
        <p><b>Name:</b> ${booking.name}</p>
        <p><b>Email:</b> ${booking.email}</p>
        <p><b>Phone:</b> ${booking.phone}</p>
        <p><b>Service:</b> ${booking.service}</p>
        <p><b>Date:</b> ${booking.date}</p>
        <p><b>Time:</b> ${booking.time}</p>
        <p><b>Message:</b> ${booking.message}</p>
      `,
    });

    res.status(201).json({
      success: true,
      message: "Booking saved & email sent",
    });
  } catch (error) {
    console.error("❌ BOOKING ERROR:", error.message);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
