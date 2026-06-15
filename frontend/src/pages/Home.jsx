import Navbar from "../components/Navbar";
import Footer from "../Components/Footer";

function Home() {
  return (
    <>
      <Navbar />
<section className="relative min-h-screen overflow-hidden bg-slate-950 flex items-center justify-center">

  {/* Animated Background */}
  <div className="absolute inset-0">
    
    <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/30 rounded-full blur-3xl animate-pulse"></div>

    <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>

    <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl animate-spin"
      style={{ animationDuration: "20s" }}
    ></div>

  </div>

  {/* Content */}
  <div className="relative z-10 text-center text-white px-6">

    <h1 className="text-7xl font-extrabold mb-6 animate-bounce">
      Explore The World
    </h1>

    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
      Discover breathtaking destinations and book unforgettable journeys.
    </p>

    <div className="mt-10 flex justify-center gap-4">

      <button className="px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-600 transition duration-300 hover:scale-105">
        Explore Packages
      </button>

      <button className="px-8 py-4 rounded-xl border border-white/30 backdrop-blur-md hover:bg-white/10 transition duration-300">
        Watch Video
      </button>

    </div>

  </div>

</section>
      <Footer/>
    </>
  );
}

export default Home;