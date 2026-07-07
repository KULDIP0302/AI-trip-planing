// Import database connection
const db = require("../config/db");

// Create new booking
const createBooking = (bookingData, callback) => {
  const sql = `
        INSERT INTO bookings
        (user_id, package_id, booking_date, number_of_people, total_price)
        VALUES (?, ?, ?, ?, ?)
    `;

  db.query(
    sql,
    [
      bookingData.user_id,
      bookingData.package_id,
      bookingData.booking_date,
      bookingData.number_of_people,
      bookingData.total_price,
    ],
    callback,
  );
};

// Export function
module.exports = {
  createBooking,
};
