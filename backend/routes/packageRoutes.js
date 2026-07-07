const express = require("express");
const router = express.Router();

//import controller
const {
  addPackage,
  getAllPackages,
  getPackageById,
  updatePackage,
  deletePackage,
} = require("../controllers/packageController");

//add package
router.post("/add-package", addPackage);
router.get("/get-packages", getAllPackages);
router.get("/get-package/:id", getPackageById);
router.put("/update-package/:id", updatePackage);
router.delete("/delete-package/:id", deletePackage);
module.exports = router;
