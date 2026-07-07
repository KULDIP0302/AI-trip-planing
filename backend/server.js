// Load environment variables
require("dotenv").config();
//database conectinon
require("./config/db");
// Import required packages
const express = require("express");
const cors = require("cors");

// Create Express app
const app = express();
const packageRoutes = require("./routes/packageRoutes");
// Port number
const PORT = process.env.PORT || 5000;
const authRoutes = (reu = require("./routes/authRoutes"));
const bookingRoutes = require("./routes/bookingRoutes");

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//package routes
app.use("/api/packages", packageRoutes);

//authentication routes
app.use("/api/auth", authRoutes);

// Booking Routes
app.use("/api/bookings", bookingRoutes);

// Test Route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Tourist Package Management Backend Running 🚀",
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
