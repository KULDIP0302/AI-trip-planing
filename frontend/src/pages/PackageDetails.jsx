import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import {useParams} from 'react-router-dom';
function PackageDetails() {
  const{title}=useParams();
  const packageData = {
  "Goa Beach Tour": {
    location: "Goa, India",
    duration: "3 Days / 2 Nights",
    price: "12,999",
    rating: "4.8",
  },

  "Manali Adventure": {
    location: "Manali, India",
    duration: "5 Days / 4 Nights",
    price: "18,999",
    rating: "4.7",
  },

  "Kashmir Paradise": {
    location: "Kashmir, India",
    duration: "6 Days / 5 Nights",
    price: "24,999",
    rating: "4.9",
  },
};

const currentPackage = packageData[title];
  return (
    
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto p-6">

        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200"
          alt="Goa Beach Tour"
          className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
        />

        <div className="mt-8">

          <h1 className="text-4xl font-bold">
            {title}
          </h1>

          <p className="text-gray-500 mt-2">
            📍 {currentPackage.location}
          </p>

          <div className="flex gap-6 mt-4">
            <span className="text-yellow-500 font-semibold">
              ⭐ {currentPackage.rating} Rating
            </span>

            <span className="text-gray-600">
              ⏳ {currentPackage.duration}
            </span>
          </div>

          <h2 className="text-3xl font-bold text-cyan-600 mt-6">
            ₹{currentPackage.price}
          </h2>

          <p className="mt-6 text-gray-700 leading-8">
            Enjoy an unforgettable Goa beach vacation with beautiful
            beaches, luxury accommodation, sightseeing tours,
            water sports, local cuisine, and exciting nightlife.
            Perfect for couples, families, and adventure lovers.
          </p>

          <div className="mt-8">

            <h3 className="text-2xl font-bold mb-4">
              Package Includes
            </h3>

            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>Luxury Hotel Stay</li>
              <li>Daily Breakfast</li>
              <li>Airport Pickup & Drop</li>
              <li>Local Sightseeing</li>
              <li>Water Activities</li>
            </ul>

          </div>

          <div className="mt-10 flex gap-4">

            <Link
              to="/booking"
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold"
            >
              Book Now
            </Link>

            <Link
              to="/packages"
              className="border border-gray-400 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100"
            >
              Back To Packages
            </Link>

          </div>

        </div>

      </div>
    </>
  );
}

export default PackageDetails;