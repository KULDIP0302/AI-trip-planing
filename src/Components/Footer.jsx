import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Send } from "lucide-react";

function Footer() {
return ( <footer className="bg-slate-950 text-white mt-20"> <div className="max-w-7xl mx-auto px-6 py-16">

```
    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">

      {/* Brand Section */}
      <div>
        <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          TravelGo
        </h2>

        <p className="mt-5 text-slate-400 leading-7">
          Discover breathtaking destinations, book unforgettable
          experiences, and create memories that last a lifetime.
        </p>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="text-xl font-semibold mb-5">
          Quick Links
        </h3>

        <div className="flex flex-col gap-3 text-slate-400">
          <Link to="/" className="hover:text-cyan-400">
            Home
          </Link>

          <Link to="/packages" className="hover:text-cyan-400">
            Packages
          </Link>

          <Link to="/about" className="hover:text-cyan-400">
            About Us
          </Link>

          <Link to="/contact" className="hover:text-cyan-400">
            Contact
          </Link>
        </div>
      </div>

      {/* Top Destinations */}
      <div>
        <h3 className="text-xl font-semibold mb-5">
          Top Destinations
        </h3>

        <div className="flex flex-col gap-3 text-slate-400">
          <p>Goa</p>
          <p>Manali</p>
          <p>Kashmir</p>
          <p>Kerala</p>
          <p>Andaman</p>
        </div>
      </div>

      {/* Contact */}
      <div>
        <h3 className="text-xl font-semibold mb-5">
          Contact
        </h3>

        <div className="space-y-4 text-slate-400">

          <div className="flex items-center gap-3">
            <Mail size={18} />
            support@travelgo.com
          </div>

          <div className="flex items-center gap-3">
            <Phone size={18} />
            +91 9876543210
          </div>

          <div className="flex items-center gap-3">
            <MapPin size={18} />
            Mumbai, India
          </div>

        </div>
      </div>

    </div>

    {/* Newsletter */}

    <div className="mt-14 bg-slate-900 rounded-3xl p-8">

      <h3 className="text-2xl font-bold">
        Subscribe To Our Newsletter
      </h3>

      <p className="text-slate-400 mt-2 mb-5">
        Get travel deals and destination updates.
      </p>

      <div className="flex gap-3">

        <input
          type="email"
          placeholder="Enter your email"
          className="bg-slate-800 px-5 py-3 rounded-xl outline-none flex-1"
        />

        <button className="bg-cyan-500 hover:bg-cyan-600 px-5 rounded-xl">
          <Send size={20} />
        </button>

      </div>

    </div>

    {/* Bottom */}

    <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">

      <p className="text-slate-500">
        © 2026 TravelGo. All Rights Reserved.
      </p>

      <div className="flex gap-6 mt-4 md:mt-0">

        <a href="#" className="text-slate-500 hover:text-cyan-400">
          Privacy Policy
        </a>

        <a href="#" className="text-slate-500 hover:text-cyan-400">
          Terms & Conditions
        </a>

      </div>

    </div>

  </div>
</footer>
);
}

export default Footer;
