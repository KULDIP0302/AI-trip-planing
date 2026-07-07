const bookingModel = require("../models/bookingModel");
const createBooking = (req, res) => {
  const { user_id, package_id, booking_date, number_of_people, total_price } =
    req.body;

  //check required fields
  if (
    !user_id ||
    !package_id ||
    !booking_date ||
    !number_of_people ||
    !total_price
  ) {
    return res.status(400).json({
      success: false,
      message: "please fill all required fields",
    });
  }
  const bookingData = {
    user_id,
    package_id,
    booking_date,
    number_of_people,
    total_price,
  };
  bookingModel.createBooking(bookingData, (err) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "booking failed",
      });
    }
    return res.status(201).json({
      success: true,
      message: "booking created successfully",
    });
  });
};

module.exports = {
  createBooking,
};
