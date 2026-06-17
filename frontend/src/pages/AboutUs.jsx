import {
  FaGlobeAsia,
  FaUsers,
  FaAward,
  FaHeadset,
} from "react-icons/fa";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
function AboutUs() {
  const stats = [
    { number: "10K+", label: "Happy Travelers" },
    { number: "500+", label: "Tour Packages" },
    { number: "50+", label: "Destinations" },
    { number: "24/7", label: "Support" },
  ];

  const features = [
    {
      icon: <FaGlobeAsia size={35} />,
      title: "Worldwide Destinations",
      desc: "Explore breathtaking destinations across the globe.",
    },
    {
      icon: <FaUsers size={35} />,
      title: "Trusted By Travelers",
      desc: "Thousands of travelers trust our services every year.",
    },
    {
      icon: <FaAward size={35} />,
      title: "Award Winning Service",
      desc: "Providing exceptional travel experiences since day one.",
    },
    {
      icon: <FaHeadset size={35} />,
      title: "24/7 Support",
      desc: "Always available whenever you need assistance.",
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      <Navbar/>
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About TourNest
          </h1>

          <p className="max-w-3xl mx-auto text-lg md:text-xl">
            We create unforgettable travel experiences and help
            travelers discover the world's most beautiful destinations.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1488646953014-85cb44e25828"
              alt="Travel"
              className="rounded-3xl shadow-xl"
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-6">
              Our Story
            </h2>

            <p className="text-gray-600 leading-8">
              TourNest was founded with one mission —
              making travel planning easy, affordable and exciting.
              We connect travelers with the best destinations,
              experiences and memories around the world.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
          {stats.map((item, index) => (
            <div
              key={index}
              className="text-center shadow-lg rounded-2xl p-8"
            >
              <h2 className="text-4xl font-bold text-blue-600">
                {item.number}
              </h2>
              <p className="text-gray-500 mt-2">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-14">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition"
              >
                <div className="text-blue-600 mb-5">
                  {feature.icon}
                </div>

                <h3 className="text-xl font-semibold mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-600">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export default AboutUs;