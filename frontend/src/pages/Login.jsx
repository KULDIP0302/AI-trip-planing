import { useState } from "react";
import api from "../services/api";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../schemas/Loginschema";
import Footer from "../Components/Footer";
import Navbar from "../components/Navbar";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });
  const onsubmit = async (data) => {
    try {
      const response = await api.post("/auth/login", {
        email: data.email,
        password: data.password,
      });

      // Save token
      localStorage.setItem("token", response.data.token);

      // Save user
      localStorage.setItem("user", JSON.stringify(response.data.user));

      alert(response.data.message);

      navigate("/");
    } catch (error) {
      alert(error.response?.data?.message || "Login Failed");
    }
  };
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-600 via-indigo-600 to-purple-700 px-4">
        <div className="max-w-5xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">
          {/* Left Section */}
          <div
            className="hidden md:flex flex-col justify-center items-center p-10 text-white bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')",
            }}
          >
            <div className="bg-black/40 p-6 rounded-2xl">
              <h1 className="text-4xl font-bold mb-4">Explore The World</h1>
              <p className="text-lg">
                Discover amazing destinations and unforgettable travel
                experiences.
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Welcome Back 👋
            </h2>

            <p className="text-gray-500 mb-8">
              Sign in to continue your journey.
            </p>
            <form onSubmit={handleSubmit(onsubmit)}>
              email input
              <div className="relative mb-5">
                <Mail
                  size={18}
                  className="absolute left-4 top-4 text-gray-400"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full pl-11 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
              password
              <div className="relative mb-4">
                <Lock
                  size={18}
                  className="absolute left-4 top-4 text-gray-400"
                />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full pl-11 pr-12 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  {...register("password")}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.password.message}
                  </p>
                )}
                submit button
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-4 top-4 text-gray-500"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {/* Remember */}
              <div className="flex justify-between items-center mb-6">
                <label className="flex items-center gap-2 text-sm text-gray-600">
                  <input type="checkbox" />
                  Remember Me
                </label>

                <Link
                  to="/forgot-password"
                  className="text-blue-600 text-sm hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>
              {/* Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white py-3 rounded-xl font-semibold transition duration-300"
              >
                {isSubmitting ? "Signing In..." : "Sign In"}
              </button>
            </form>
            <div className="my-6 text-center text-gray-400">───── OR ─────</div>

            <button className="w-full border py-3 rounded-xl hover:bg-gray-50 transition">
              Continue with Google
            </button>

            <p className="text-center mt-6 text-gray-600">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="text-blue-600 font-semibold hover:underline"
              >
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
