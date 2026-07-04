// Import package model
const packageModel = require("../models/packageModel");

// Add new package
const addPackage = (req, res) => {
  // Get data from request body
  const { title, description, location, price, duration, category, image } =
    req.body;

  // Check required fields
  if (
    !title ||
    !description ||
    !location ||
    !price ||
    !duration ||
    !category ||
    !image
  ) {
    return res.status(400).json({
      success: false,
      message: "Please fill all required fields",
    });
  }

  // Create package object
  const packageData = {
    title,
    description,
    location,
    price,
    duration,
    category,
    image,
  };

  // Save package in database
  packageModel.createPackage(packageData, (err) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Failed to add package",
      });
    }

    return res.status(201).json({
      success: true,
      message: "Package added successfully",
    });
  });
};

// Get all packages
const getAllPackages = (req, res) => {
  packageModel.getAllPackages((err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Database error",
      });
    }

    return res.status(200).json({
      success: true,
      packages: result,
    });
  });
};

// Export functions
module.exports = {
  addPackage,
  getAllPackages,
};
