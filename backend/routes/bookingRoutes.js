const express = require("express");
const router = express.Router();
const {
  createBooking,
  getMyBookings,
  cancelBooking,
} = require("../controllers/bookingController");
const authMiddleware = require("../middleware/authMiddleware");

//createbooking
router.post("/book-package", authMiddleware, createBooking);
router.post("/my-bookings", authMiddleware, getMyBookings);
router.put("/cancel-booking/:id", authMiddleware, cancelBooking);

//export
module.exports = router;
