import Navbar from "../components/Navbar";
import PackageCard from "../components/PackageCard";

function Packages() {

  const packages = [
    {
      id: 1,
      title: "Goa Beach Tour",
      location: "Goa",
      duration: "3 Days / 2 Nights",
      price: "12999",
      rating: "4.8",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },

    {
      id: 2,
      title: "Manali Adventure",
      location: "Manali",
      duration: "5 Days / 4 Nights",
      price: "18999",
      rating: "4.7",
      image:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
    },

    {
      id: 3,
      title: "Kashmir Paradise",
      location: "Kashmir",
      duration: "6 Days / 5 Nights",
      price: "24999",
      rating: "4.9",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    },
  ];

  return (
    <>
    
      <Navbar />
      <div className="flex flex-col md:flex-row gap-4 mb-8">

  <input
    type="text"
    placeholder="Search destination..."
    className="border p-3 rounded-lg flex-1"
  />

  <select className="border p-3 rounded-lg">
    <option>All Destinations</option>
    <option>Goa</option>
    <option>Manali</option>
    <option>Kashmir</option>
  </select>

  <select className="border p-3 rounded-lg">
    <option>Price Range</option>
    <option>Under ₹10,000</option>
    <option>₹10,000 - ₹20,000</option>
    <option>Above ₹20,000</option>
  </select>

</div>

      <div className="max-w-7xl mx-auto p-6">

        <h1 className="text-4xl font-bold mb-8">
          Tour Packages
        </h1>

        <div className="grid md:grid-cols-3 gap-8">

          {packages.map((pkg) => (
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

      </div>
    </>
  );
}

export default Packages;