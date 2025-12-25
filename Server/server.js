const express = require("express");
const cors = require("cors");
require("dotenv").config();

const bookingRoutes = require("./routes/bookingRoutes");
const connectDB = require("./lib/db");

const app = express();

/* ✅ CORS */
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://luxe-glow-five.vercel.app",
    ],
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json());

/* ✅ Health check */
app.get("/", (req, res) => {
  res.json({ status: "API running" });
});

/* ✅ Ensure DB is connected */
app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (err) {
    console.error("❌ DB connection failed:", err.message);
    res.status(500).json({ error: "Database connection failed" });
  }
});

/* ✅ Routes */
app.use("/api/book", bookingRoutes);

/* 🔥 LOCAL ONLY: start server */
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
}

/* ✅ REQUIRED for Vercel */
module.exports = app;