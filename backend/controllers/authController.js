// Import bcrypt package
const bcrypt = require("bcrypt");

// Import user model
const userModel = require("../models/userModel");

// Register new user
const registerUser = (req, res) => {
  // Get data from frontend
  const { full_name, email, password, phone } = req.body;

  // Check required fields
  if (!full_name || !email || !password || !phone) {
    return res.status(400).json({
      success: false,
      message: "Please fill all required fields",
    });
  }

  // Check email already exists
  userModel.findUserByEmail(email, (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Database Error",
      });
    }

    // Email already exists
    if (result.length > 0) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    // Hash password
    const hashedPassword = bcrypt.hashSync(password, 10);

    // Create user object
    const userData = {
      full_name,
      email,
      password: hashedPassword,
      phone,
    };

    // Save user into database
    userModel.createUser(userData, (err) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: "Registration Failed",
        });
      }

      return res.status(201).json({
        success: true,
        message: "User Registered Successfully",
      });
    });
  });
};

// Export function
module.exports = {
  registerUser,
};
