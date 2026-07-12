import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import api from "../services/api";

function PackageDetails() {
  const { id } = useParams();

  const [packageData, setPackageData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const loadPackage = async () => {
      try {
        const response = await api.get(`/packages/get-package/${id}`);
        if (!mounted) return;
        setPackageData(response.data.package);
      } catch (error) {
        console.log(error);
        if (mounted) alert("Failed to load package");
      } finally {
        if (mounted) setLoading(false);
      }
    };

    loadPackage();

    return () => {
      mounted = false;
    };
  }, [id]);

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="text-center text-2xl mt-20">Loading...</div>
      </>
    );
  }

  if (!packageData) {
    return (
      <>
        <Navbar />
        <div className="text-center text-2xl mt-20 text-red-500">
          Package not found
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto p-6">
        <img
          src={packageData.image}
          alt={packageData.title}
          className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
        />

        <div className="mt-8">
          <h1 className="text-4xl font-bold">{packageData.title}</h1>

          <p className="text-gray-500 mt-2">📍 {packageData.location}</p>

          <div className="flex gap-6 mt-4">
            <span className="text-yellow-500 font-semibold">
              ⭐ {packageData.rating || "4.8"} Rating
            </span>

            <span className="text-gray-600">⏳ {packageData.duration}</span>
          </div>

          <h2 className="text-3xl font-bold text-cyan-600 mt-6">
            ₹{packageData.price}
          </h2>

          <p className="mt-6 text-gray-700 leading-8">
            {packageData.description}
          </p>

          <div className="mt-8">
            <h3 className="text-2xl font-bold mb-4">Package Includes</h3>

            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>Luxury Hotel Stay</li>
              <li>Daily Breakfast</li>
              <li>Airport Pickup & Drop</li>
              <li>Local Sightseeing</li>
              <li>24/7 Customer Support</li>
            </ul>
          </div>

          <div className="mt-10 flex gap-4">
            <Link
              to={`/booking/${packageData.id}`}
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
