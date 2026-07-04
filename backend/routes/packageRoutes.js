const express = require("express");
const router = express.Router();

//import controller
const {
  addPackage,
  getAllPackages,
} = require("../controllers/packageController");

//add package
router.post("/add-package", addPackage);
router.get("/get-packages", getAllPackages);

module.exports = router;
