const express = require("express");
const router = express.Router();
const {
  createBooking,
  getMyBookings,
  cancelBooking,
} = require("../controllers/bookingController");

//createbooking
router.post("/book-package", createBooking);
router.post("/my-bookings", getMyBookings);
router.put("/cancel-booking/:id", cancelBooking);

//export
module.exports = router;
