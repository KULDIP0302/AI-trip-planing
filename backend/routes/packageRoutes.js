const express = require("express");
const router = express.Router();

//import controller
const {
  addPackage,
  getAllPackages,
  getPackageById,
  updatePackage,
} = require("../controllers/packageController");

//add package
router.post("/add-package", addPackage);
router.get("/get-packages", getAllPackages);
router.get("/get-package/:id", getPackageById);
router.put("/update-package/:id", updatePackage);

module.exports = router;
