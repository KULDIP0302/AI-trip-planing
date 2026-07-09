import { Link, useNavigate } from "react-router-dom";
import { Heart, Bell, UserCircle } from "lucide-react";
import { useState, useEffect } from "react";

function Navbar() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setUser(null);

    navigate("/login");
  };

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
            { name: "Trip Buddy", path: "/trip-buddy" },
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
            <Heart size={22} className="text-white" />
          </Link>

          <Link
            to="/notifications"
            className="p-2 rounded-full hover:bg-slate-800 transition hover:scale-110"
          >
            <Bell size={22} className="text-white" />
          </Link>

          <Link
            to="/profile"
            className="hover:text-cyan-400 transition hover:scale-110"
          >
            <UserCircle size={34} className="text-white" />
          </Link>

          {user ? (
            <>
              <Link
                to="/my-bookings"
                className="text-cyan-400 font-semibold hover:text-cyan-300"
              >
                My Bookings
              </Link>

              <span className="text-white font-medium">{user.full_name}</span>

              <button
                onClick={handleLogout}
                className="px-5 py-2 rounded-xl bg-red-500 hover:bg-red-600 text-white transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="px-5 py-2 rounded-xl border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 transition-all duration-300"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
