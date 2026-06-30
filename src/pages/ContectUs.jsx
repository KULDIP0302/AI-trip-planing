import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "../schemas/ContectSchema";

function ContactUs() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data) => {
    console.log(data);

    // Backend API
  };
  return (
    <div className="bg-slate-50 min-h-screen">
      <Navbar />
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>

          <p className="text-lg">
            We'd love to hear from you. Get in touch with our team.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>

            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-blue-600 text-2xl" />
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-gray-500">Surat, Gujarat, India</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-blue-600 text-2xl" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-gray-500">+91 6353146860</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <FaEnvelope className="text-blue-600 text-2xl" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-500">vasavakuldip37@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <FaClock className="text-blue-600 text-2xl" />
                <div>
                  <h3 className="font-semibold">Working Hours</h3>
                  <p className="text-gray-500">Mon - Sat (9:00 AM - 7:00 PM)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-8">Send Message</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <input
                type="text"
                placeholder="Full Name"
                {...register("name")}
                className="w-full border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
              <input
                type="email"
                placeholder="Email Address"
                {...register("email")}
                className="w-full border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="text"
                placeholder="Subject"
                {...register("subject")}
                className="w-full border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              {errors.subject && (
                <p className="text-red-500 text-sm">{errors.subject.message}</p>
              )}

              <textarea
                rows="5"
                placeholder="Your Message"
                {...register("message")}
                className="w-full border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message.message}</p>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white py-4 rounded-xl font-semibold transition"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default ContactUs;
