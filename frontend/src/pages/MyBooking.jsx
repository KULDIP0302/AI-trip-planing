import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import api from "../services/api";

function MyBookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBookings = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));

      const response = await api.post("/bookings/my-bookings", {
        user_id: user.id,
      });

      setBookings(response.data.bookings);
    } catch (error) {
      console.log(error);
      alert("Failed to load bookings");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const loadBookings = async () => {
      await fetchBookings();
    };

    loadBookings();
  }, []);

  const cancelBooking = async (id) => {
    try {
      const response = await api.put(`/bookings/cancel-booking/${id}`);

      alert(response.data.message);

      fetchBookings();
    } catch (error) {
      console.log(error);
      alert("Failed to cancel booking");
    }
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="text-center text-2xl mt-20">Loading...</div>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-8">My Bookings</h1>

        {bookings.length === 0 ? (
          <div className="text-center text-gray-500 text-xl mt-20">
            No Bookings Found 😔
          </div>
        ) : (
          <div className="space-y-6">
            {bookings.map((booking) => (
              <div
                key={booking.id}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <h2 className="text-2xl font-bold">{booking.title}</h2>

                <p className="mt-2">📍 {booking.location}</p>

                <p>📅 {booking.booking_date}</p>

                <p>👥 {booking.number_of_people} Travelers</p>

                <p className="font-bold text-cyan-600">
                  ₹{booking.total_price}
                </p>

                <p className="mt-2">Status : {booking.status}</p>

                {booking.status !== "Cancelled" && (
                  <button
                    onClick={() => cancelBooking(booking.id)}
                    className="mt-4 bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg"
                  >
                    Cancel Booking
                  </button>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default MyBookings;
