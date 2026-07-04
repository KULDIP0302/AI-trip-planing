// Import express
const express = require("express");

// Create router
const router = express.Router();

// Import controller
const {
  registerUser,
  loginUser,
  getProfile,
} = require("../controllers/authController");

// Register user
router.post("/register", registerUser);

// Login user
router.post("/login", loginUser);
//get profile
router.get("/profile", getProfile);

// Export router
module.exports = router;
