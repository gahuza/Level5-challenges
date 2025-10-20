import React from "react";
import { Mail, Phone, MapPin, Facebook, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/*  About Section */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-3">
            Okello<span className="text-orange-500"> E-Shop</span>
          </h2>
          <p className="text-sm">
            Your trusted e-commerce platform for quality products and fast delivery.
            Designed and maintained with 💙 by 
            <span className="text-blue-400 font-medium"> Gahuzamiryango Jean de Dieu</span>.
          </p>
        </div>

        {/*  Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact Info</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center space-x-2">
              <Mail size={16} className="text-blue-400" />
              <span>gahuzaj12@gmail.com</span>
            </li>
            <li className="flex items-center space-x-2">
              <Phone size={16} className="text-blue-400" />
              <span>0784332503 / 0721839207</span>
            </li>
            <li className="flex items-center space-x-2">
              <MapPin size={16} className="text-blue-400" />
              <span>Rwanda, Kigali</span>
            </li>
          </ul>
        </div>

        {/*  Social Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Me</h3>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* 🧾 Bottom Section */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
        <p>
          © {new Date().getFullYear()} ShopEase. All Rights Reserved.
        </p>
        <p className="mt-1">
          Designed by <span className="text-blue-400 font-semibold">
          Gahuzamiryango Jean de Dieu
          </span> — Software Development Trainer & IT Consultant.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
