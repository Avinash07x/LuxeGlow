const Booking = require("../models/Booking");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

exports.createBooking = async (req, res) => {
  try {
    const booking = await Booking.create(req.body);

    await transporter.sendMail({
      from: `"Beauty Booking" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "💄 New Booking",
      html: `<p>New booking from ${booking.name}</p>`,
    });

    res.status(201).json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false });
  }
};
