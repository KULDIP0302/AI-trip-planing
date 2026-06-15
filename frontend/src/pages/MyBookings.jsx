import Navbar from "../components/Navbar";

function MyBookings() {
  const bookings = [
    {
      id: 1,
      packageName: "Goa Beach Tour",
      date: "20 July 2026",
      status: "Confirmed",
      price: "₹12,999",
    },
    {
      id: 2,
      packageName: "Manali Adventure",
      date: "15 August 2026",
      status: "Upcoming",
      price: "₹18,999",
    },
    {
      id: 3,
      packageName: "Kashmir Paradise",
      date: "10 September 2026",
      status: "Completed",
      price: "₹24,999",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto p-6">

        <h1 className="text-4xl font-bold mb-6">
          My Bookings
        </h1>

        <input
          type="text"
          placeholder="Search bookings..."
          className="w-full border p-3 rounded-xl mb-6"
        />

        <div className="space-y-6">

          {bookings.map((booking) => (
            <div
              key={booking.id}
              className="bg-white p-6 rounded-2xl shadow-lg"
            >
              <div className="flex justify-between items-center">

                <div>
                  <h2 className="text-2xl font-bold">
                    {booking.packageName}
                  </h2>

                  <p className="text-gray-500 mt-2">
                    Travel Date: {booking.date}
                  </p>

                  <p className="font-semibold mt-2">
                    {booking.price}
                  </p>
                </div>

                <span className="bg-green-100 text-green-600 px-4 py-2 rounded-full">
                  {booking.status}
                </span>

              </div>

              <div className="mt-5 flex gap-4">

                <button className="bg-cyan-500 text-white px-5 py-2 rounded-lg">
                  View Details
                </button>

                <button className="border px-5 py-2 rounded-lg">
                  Download Invoice
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>
    </>
  );
}

export default MyBookings;