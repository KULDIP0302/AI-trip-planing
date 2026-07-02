// Import express
const express = require("express");

// Create router
const router = express.Router();

// Import controller
const { registerUser, loginUser } = require("../controllers/authController");

// Register user
router.post("/register", registerUser);

// Login user
router.post("/login", loginUser);

// Export router
module.exports = router;
