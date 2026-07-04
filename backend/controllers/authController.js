// Import bcrypt package
const bcrypt = require("bcrypt");

// Import user model
const userModel = require("../models/userModel");
const generateToken = require("../utils/generateToken");

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

// Login user
const loginUser = (req, res) => {
  // Get email and password
  const { email, password } = req.body;

  // Check required fields
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Please enter email and password",
    });
  }

  // Check user in database
  userModel.findUserByEmail(email, (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Database Error",
      });
    }

    // User not found
    if (result.length === 0) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const user = result[0];

    // Compare password
    const isMatch = bcrypt.compareSync(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid password",
      });
    }

    // Generate JWT Token
    const token = generateToken(user);

    return res.status(200).json({
      success: true,
      message: "Login Successful",
      token,
      user: {
        id: user.id,
        full_name: user.full_name,
        email: user.email,
        role: user.role,
      },
    });
  });
};
const getProfile = (req, res) => {
  const UserId = req.user.id;
  userModel.getUserById(UserId, (err, result) => {
    if (err) {
      return res.status(500).json({
        message: "database error",
      });
    }
    if (result.length === 0) {
      return res.status(404).json({
        message: "user not found",
      });
    }
    return res.status(200).json({
      message: "user profile fetched successfully",
      user: result[0],
    });
  });
};
// Export function
module.exports = {
  registerUser,
  loginUser,
  getProfile,
};
