const express = require("express");
const router = express.Router();
const {
  createBooking,
  getMyBookings,
} = require("../controllers/bookingController");

//createbooking
router.post("/book-package", createBooking);
router.post("/my-bookings", getMyBookings);

//export
module.exports = router;
