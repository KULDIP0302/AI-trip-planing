import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Wishlist() {
  const wishlist = [
    {
      id: 1,
      title: "Goa Beach Tour",
      location: "Goa",
      price: "₹12,999",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
    },
    {
      id: 2,
      title: "Manali Adventure",
      location: "Manali",
      price: "₹18,999",
      image:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto p-6">

        <h1 className="text-4xl font-bold mb-8">
          My Wishlist ❤️
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {wishlist.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-5">

                <h2 className="text-xl font-bold">
                  {item.title}
                </h2>

                <p className="text-gray-500 mt-2">
                  📍 {item.location}
                </p>

                <p className="text-cyan-600 font-bold text-xl mt-3">
                  {item.price}
                </p>

                <div className="flex gap-3 mt-5">

                  <Link
                    to="/package-details"
                    className="bg-cyan-500 text-white px-4 py-2 rounded-lg"
                  >
                    View
                  </Link>

                  <button className="border px-4 py-2 rounded-lg">
                    Remove
                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </>
  );
}

export default Wishlist;