import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { bookingSchema } from "../schemas/bookingSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { email } from "zod";
function Booking() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(bookingSchema),
  });

  const onSubmit = (data) => {
    console.log(data);

    // Backend API
  };
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-100 py-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-4"
        >
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl font-bold mb-8"
          >
            Complete Your Booking
          </motion.h1>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form Section */}

            <motion.div
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-2 bg-white p-8 rounded-3xl shadow-xl"
            >
              <h2 className="text-2xl font-bold mb-6">Traveler Information</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid md:grid-cols-2 gap-5">
                  <input
                    type="text"
                    placeholder="Full Name"
                    {...register("fullName")}
                    className="border p-4 rounded-xl focus:ring-2 focus:ring-cyan-500 outline-none"
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-sm">
                      {errors.fullName.message}
                    </p>
                  )}

                  <input
                    type="email"
                    placeholder="Email Address"
                    {...register(email)}
                    className="border p-4 rounded-xl focus:ring-2 focus:ring-cyan-500 outline-none"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">
                      {errors.email.message}
                    </p>
                  )}

                  <input
                    type="text"
                    placeholder="Mobile Number"
                    {...register("phone")}
                    className="border p-4 rounded-xl focus:ring-2 focus:ring-cyan-500 outline-none"
                  />

                  {errors.phone && (
                    <p className="text-red-500 text-sm">
                      {errors.phone.message}
                    </p>
                  )}
                  <input
                    type="date"
                    {...register("travelDate")}
                    className="border p-4 rounded-xl focus:ring-2 focus:ring-cyan-500 outline-none"
                  />

                  {errors.travelDate && (
                    <p className="text-red-500 text-sm">
                      {errors.travelDate.message}
                    </p>
                  )}
                  <input
                    type="number"
                    placeholder="Travelers"
                    {...register("travelers")}
                    className="border p-4 rounded-xl focus:ring-2 focus:ring-cyan-500 outline-none"
                  />

                  {errors.travelers && (
                    <p className="text-red-500 text-sm">
                      {errors.travelers.message}
                    </p>
                  )}
                  <input
                    type="text"
                    placeholder="Special Requests"
                    {...register("specialRequest")}
                    className="border p-4 rounded-xl focus:ring-2 focus:ring-cyan-500 outline-none"
                  />

                  {errors.specialRequest && (
                    <p className="text-red-500 text-sm">
                      {errors.specialRequest.message}
                    </p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full mt-8 bg-cyan-500 hover:bg-cyan-600 disabled:bg-gray-400 text-white py-4 rounded-xl text-lg font-bold"
                >
                  {isSubmitting ? "Booking..." : "Confirm Booking"}
                </motion.button>
              </form>
            </motion.div>

            {/* Summary Section */}

            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden h-fit sticky top-5"
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800"
                alt="Goa"
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <h2 className="text-2xl font-bold">Goa Beach Tour</h2>

                <p className="text-gray-500 mt-2">📍 Goa, India</p>

                <div className="mt-5 space-y-3">
                  <div className="flex justify-between">
                    <span>Duration</span>
                    <span>3 Days / 2 Nights</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Price</span>
                    <span>₹12,999</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Travelers</span>
                    <span>1</span>
                  </div>
                </div>

                <motion.div
                  animate={{
                    scale: [1, 1.03, 1],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                  }}
                  className="mt-6 bg-cyan-50 p-4 rounded-xl"
                >
                  <h3 className="font-bold mb-2">Included</h3>

                  <ul className="space-y-1">
                    <li>✔ Hotel Stay</li>
                    <li>✔ Breakfast</li>
                    <li>✔ Airport Transfer</li>
                    <li>✔ Sightseeing</li>
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default Booking;
