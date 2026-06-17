import { useState } from "react";
import { Link } from "react-router-dom";
import {
  User,
  Mail,
  Phone,
  Lock,
  Eye,
  EyeOff,
} from "lucide-react";
import Footer from "../Components/Footer";
import Navbar from "../components/Navbar";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <>
    <Navbar/>
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 px-4 py-10">

      <div className="max-w-6xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">

        {/* Left Section */}
        <div
          className="hidden md:flex items-center justify-center bg-cover bg-center p-10"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1488646953014-85cb44e25828')",
          }}
        >
          <div className="bg-black/40 p-8 rounded-2xl text-white">
            <h1 className="text-4xl font-bold mb-4">
              Start Your Journey ✈️
            </h1>

            <p className="text-lg">
              Join thousands of travelers discovering amazing destinations
              around the world.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="p-8 md:p-12">

          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Create Account
          </h2>

          <p className="text-gray-500 mb-8">
            Register to explore exciting travel packages.
          </p>

          {/* Full Name */}
          <div className="relative mb-4">
            <User
              size={18}
              className="absolute left-4 top-4 text-gray-400"
            />
            <input
              type="text"
              placeholder="Full Name"
              className="w-full pl-11 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div className="relative mb-4">
            <Mail
              size={18}
              className="absolute left-4 top-4 text-gray-400"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full pl-11 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Phone */}
          <div className="relative mb-4">
            <Phone
              size={18}
              className="absolute left-4 top-4 text-gray-400"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full pl-11 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div className="relative mb-4">
            <Lock
              size={18}
              className="absolute left-4 top-4 text-gray-400"
            />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full pl-11 pr-12 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="button"
              className="absolute right-4 top-4"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOff size={18} />
              ) : (
                <Eye size={18} />
              )}
            </button>
          </div>

          {/* Confirm Password */}
          <div className="relative mb-6">
            <Lock
              size={18}
              className="absolute left-4 top-4 text-gray-400"
            />

            <input
              type={showConfirm ? "text" : "password"}
              placeholder="Confirm Password"
              className="w-full pl-11 pr-12 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="button"
              className="absolute right-4 top-4"
              onClick={() => setShowConfirm(!showConfirm)}
            >
              {showConfirm ? (
                <EyeOff size={18} />
              ) : (
                <Eye size={18} />
              )}
            </button>
          </div>

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition duration-300">
            Create Account
          </button>

          <p className="text-center mt-6 text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-600 font-semibold hover:underline"
            >
              Sign In
            </Link>
          </p>

        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Register;