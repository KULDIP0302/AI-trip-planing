import { Link } from "react-router-dom";

function PackageCard({ image, title, location, duration, price, rating }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">

      <img
        src={image}
        alt={title}
        className="w-full h-56 object-cover"
      />

      <div className="p-5">

        <h2 className="text-xl font-bold">
          {title}
        </h2>

        <p className="text-gray-500 mt-2">
          📍 {location}
        </p>

        <p className="text-gray-500">
          ⏳ {duration}
        </p>

        <div className="flex justify-between items-center mt-4">

          <span className="text-cyan-600 font-bold text-xl">
            ₹{price}
          </span>

          <span className="text-yellow-500">
            ⭐ {rating}
          </span>

        </div>

        <Link
          to={`/package/${title}`}
          className="block mt-5 text-center bg-cyan-500 text-white py-2 rounded-lg hover:bg-cyan-600"
        >
          View Details
        </Link>

      </div>

    </div>
  );
}

export default PackageCard;