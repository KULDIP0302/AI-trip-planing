import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import PackageCard from "../components/PackageCard";
import api from "../services/api";

function Packages() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDestination, setSelectedDestination] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);

  const filteredPackages = packages.filter((pkg) => {
    const matchesSearch = pkg.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesDestination =
      selectedDestination === "" || pkg.location === selectedDestination;

    const matchesPrice =
      priceRange === "" ||
      (priceRange === "under15k" && pkg.price < 15000) ||
      (priceRange === "15kto20k" && pkg.price >= 15000 && pkg.price <= 20000) ||
      (priceRange === "above20k" && pkg.price > 20000);

    return matchesSearch && matchesDestination && matchesPrice;
  });
  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await api.get("/packages/get-packages");
        setPackages(response.data.packages);
      } catch (error) {
        console.log(error);
        alert("Failed to load packages");
      } finally {
        setLoading(false);
      }
    };

    fetchPackages();
  }, []);
  if (loading) {
    return (
      <>
        <Navbar />
        <div className="max-w-7xl mx-auto px-6 py-10">
          <h1 className="text-4xl font-bold mb-8">Tour Packages</h1>
          <p className="text-gray-500">Loading packages...</p>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold mb-8">Tour Packages</h1>

        {/* Filters */}

        <div className="bg-white shadow-md rounded-2xl p-4 mb-8 grid md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Search package..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border p-3 rounded-lg outline-none focus:ring-2 focus:ring-cyan-500"
          />

          <select
            value={selectedDestination}
            onChange={(e) => setSelectedDestination(e.target.value)}
            className="border p-3 rounded-lg outline-none focus:ring-2 focus:ring-cyan-500"
          >
            <option value="">All Destinations</option>
            <option value="Goa">Goa</option>
            <option value="Manali">Manali</option>
            <option value="Kashmir">Kashmir</option>
          </select>

          <select
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            className="border p-3 rounded-lg outline-none focus:ring-2 focus:ring-cyan-500"
          >
            <option value="">All Prices</option>

            <option value="under15k">Under ₹15,000</option>

            <option value="15kto20k">₹15,000 - ₹20,000</option>

            <option value="above20k">Above ₹20,000</option>
          </select>
        </div>

        <p className="text-gray-500 mb-6">
          {filteredPackages.length} Packages Found
        </p>

        {filteredPackages.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPackages.map((pkg) => (
              <PackageCard
                key={pkg.id}
                image={pkg.image}
                title={pkg.title}
                location={pkg.location}
                duration={pkg.duration}
                price={pkg.price}
                rating={pkg.rating}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold text-gray-600">
              No Packages Found 😔
            </h2>

            <p className="text-gray-500 mt-2">
              Try changing your search or filters.
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default Packages;
