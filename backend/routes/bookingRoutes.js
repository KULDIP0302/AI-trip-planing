const express = require("express");
const router = express.Router();
const { createBooking } = require("../controllers/bookingController");

//createbooking
router.post("/book-package", createBooking);

//export
module.exports = router;
