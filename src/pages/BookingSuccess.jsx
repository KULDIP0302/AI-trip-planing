import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function BookingSuccess() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-10 rounded-3xl shadow-xl text-center max-w-lg"
      >
        <div className="text-7xl mb-5">
          ✅
        </div>

        <h1 className="text-4xl font-bold">
          Booking Successful
        </h1>

        <p className="mt-4 text-gray-600">
          Your tour package has been booked successfully.
        </p>

        <Link
          to="/my-bookings"
          className="inline-block mt-8 bg-cyan-500 text-white px-8 py-3 rounded-xl"
        >
          View My Bookings
        </Link>

      </motion.div>

    </div>
  );
}

export default BookingSuccess;