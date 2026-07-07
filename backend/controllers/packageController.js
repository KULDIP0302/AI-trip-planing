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

//get package by id
const getPackageById = (req, res) => {
  const { id } = req.params;
  packageModel.getPackageById(id, (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "database error",
      });
    }
    if (result.length === 0) {
      return res.status(404).json({
        success: false,
        message: "package not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "package found",
      package: result[0],
    });
  });
};

//update package
const updatePackage = (req, res) => {
  //get package id from URL
  const { id } = req.params;
  //get update data from request body
  const { title, description, location, price, duration, category, image } =
    req.body;
  //echeck required fields
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
      message: "please fill all required fields",
    });
  }
  //create package object
  const packageData = {
    title,
    description,
    location,
    price,
    duration,
    category,
    image,
  };

  //update package
  packageModel.updatePackage(id, packageData, (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "database error",
      });
    }
    // check if package exists
    if (result.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        message: "package not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "package updated successfully",
    });
  });
};

//delete package
const deletePackage = (req, res) => {
  //get package id from url
  const { id } = req.params;
  packageModel.deletPackage(id, (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "database error",
      });
    }
    if (result.affectedRows === 0) {
      return res.status(400).json({
        success: false,
        message: "package not found",
      });
    }
    return res.status(200).json();
  });
};

// Export functions
module.exports = {
  addPackage,
  getAllPackages,
  getPackageById,
  updatePackage,
  deletePackage,
};
