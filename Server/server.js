const express = require("express");
const cors = require("cors");
require("dotenv").config();

const bookingRoutes = require("./routes/bookingRoutes");
const connectDB = require("./lib/db");

const app = express();

/* ✅ Connect DB */
connectDB().catch((err) => {
  console.error("❌ DB Error:", err.message);
  process.exit(1);
});

/* ✅ CORS */
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

/* ✅ Middleware */
app.use(express.json());

/* ✅ Routes */
app.use("/api/book", bookingRoutes);

/* ✅ Health */
app.get("/", (req, res) => {
  res.json({ status: "API running 🚀" });
});

/* ❌ 404 */
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

/* ❌ Error */
app.use((err, req, res, next) => {
  console.error("🔥 Error:", err);
  res.status(500).json({ error: "Internal Server Error" });
});

/* ✅ Start server */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});