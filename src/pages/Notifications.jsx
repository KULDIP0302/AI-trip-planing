import { FaBell, FaCheckCircle, FaTag } from "react-icons/fa";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

function Notifications() {
  const notifications = [
    {
      id: 1,
      title: "Booking Confirmed",
      message: "Your Goa Beach Tour has been successfully booked.",
      time: "2 hours ago",
      unread: true,
      icon: <FaCheckCircle />,
    },
    {
      id: 2,
      title: "Special Discount",
      message: "Get 20% off on all Manali packages this week.",
      time: "1 day ago",
      unread: true,
      icon: <FaTag />,
    },
    {
      id: 3,
      title: "New Destination Added",
      message: "Explore our newly added Kashmir packages.",
      time: "3 days ago",
      unread: false,
      icon: <FaBell />,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
<Navbar/>
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-5xl font-bold">
            Notifications
          </h1>

          <p className="mt-3 text-lg">
            Stay updated with bookings, offers and latest updates.
          </p>
        </div>
      </section>

      {/* Notifications List */}
      <section className="max-w-6xl mx-auto px-6 py-12">

        <div className="space-y-5">

          {notifications.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
            >
              <div className="flex justify-between items-start">

                <div className="flex gap-4">

                  <div className="text-blue-600 text-2xl mt-1">
                    {item.icon}
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 mt-2">
                      {item.message}
                    </p>

                    <p className="text-sm text-gray-400 mt-3">
                      {item.time}
                    </p>
                  </div>

                </div>

                {item.unread && (
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                    New
                  </span>
                )}

              </div>
            </div>
          ))}

        </div>

      </section>
      <Footer/>
    </div>
  );
}

export default Notifications;