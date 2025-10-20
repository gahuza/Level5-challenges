import React from "react";
import { ShoppingCart, User, Search } from "lucide-react";
import logo from "./assets/logo.png"

const Header = () => {
    // const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img
            src={logo}
            alt="ShopLogo"
            className="w-20 h-15 rounded-full object-cover"
          />
          <h2 className="text-3xl font-bold text-gray-800">
        Okello <span className="text-orange-500"> JD - E-Shop</span>
          </h2>
        </div>

        {/* Navigation Menu */}
        <nav className="hidden md:flex space-x-8 font-medium text-gray-700">
          <a href="#home" className="hover:text-blue-600 transition">Home</a>
          <a href="#shop" className="hover:text-blue-600 transition">Shop</a>
          <a href="#categories" className="hover:text-blue-600 transition">Categories</a>
          <a href="#about" className="hover:text-blue-600 transition">About</a>
          <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
        </nav>

        {/* Icons Section */}
        <div className="flex items-center space-x-4">
          <Search className="w-5 h-5 text-gray-600 cursor-pointer hover:text-blue-600" />
          <ShoppingCart className="w-5 h-5 text-gray-600 cursor-pointer hover:text-blue-600" />
          <User className="w-5 h-5 text-gray-600 cursor-pointer hover:text-blue-600" />
        </div>

      </div>
    </header>
  );
};

export default Header;
