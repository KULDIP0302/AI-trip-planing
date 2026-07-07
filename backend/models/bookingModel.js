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

//get booking by user id
const getBookingsByUserId = (user_id, callback) => {
  const sql = `
    SELECT bookings.id,
    packages.title,
    packages.location,
    bookings.booking_date,
    bookings.number_of_people,
    bookings.total_price,
    bookings.status
    
    FROM bookings
    INNER JOIN packages
    ON bookings.package_id=packages.id
    WHERE bookings.user_id=?
    ORDER by bookings.id DESC`;

  db.query(sql, [user_id], callback);
};

// Export function
module.exports = {
  createBooking,
  getBookingsByUserId,
};
