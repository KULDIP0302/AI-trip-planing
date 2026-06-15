import { Link } from "react-router-dom";
import { Heart, Bell, UserCircle } from "lucide-react";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/80 border-b border-slate-800 shadow-2xl">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent hover:scale-105 transition duration-300"
        >
          TravelGo
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">

          {[
            { name: "Home", path: "/" },
            { name: "Packages", path: "/packages" },
            { name: "About", path: "/about" },
            { name: "Contact", path: "/contact" },
          ].map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="relative text-slate-200 font-medium group"
            >
              {item.name}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}

        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          <Link
            to="/wishlist"
            className="p-2 rounded-full hover:bg-slate-800 transition hover:scale-110"
          >
            <Heart size={22} />
          </Link>

          <button className="relative p-2 rounded-full hover:bg-slate-800 transition hover:scale-110">
            <Bell size={22} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-ping"></span>
          </button>

          <Link
            to="/profile"
            className="hover:text-cyan-400 transition hover:scale-110"
          >
            <UserCircle size={34} />
          </Link>

          <Link
            to="/login"
            className="px-5 py-2 rounded-xl border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/40"
          >
            Register
          </Link>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;