import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    // Top-0 la otti irukara maari fix panniruken
    <header className="fixed top-0 left-0 w-full z-50 px-0">
      
      {/* White background with Bottom Radius and Shadow */}
      <div className="bg-white text-gray-800 shadow-md border-b border-gray-100 rounded-b-[40px] transition-all duration-300">
        <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
          
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            {/* PRR Logo Style */}
            <div className="flex flex-col leading-tight">
              <span className="text-2xl font-black tracking-tighter">
                <span className="text-red-600">PRR</span> 
              </span>
              <span className="text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase">
                Perfect Road Rider
              </span>
            </div>
          </div>

          {/* Navigation Links - Grey to Red Hover */}
          <nav className="hidden lg:flex items-center gap-8 font-bold text-sm tracking-wide uppercase">
            <Link to="/" className="hover:text-red-600 transition-colors">Home</Link>
            <Link to="/about" className="hover:text-red-600 transition-colors">About Us</Link>
            <Link to="/services" className="hover:text-red-600 transition-colors">Services</Link>
            <Link to="/contact" className="hover:text-red-600 transition-colors">Contact Us</Link>
          </nav>

          {/* CTA Button - Matches your Image Style */}
          <div className="flex items-center">
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-2.5 rounded-full font-bold text-sm transition-all shadow-lg hover:shadow-red-200 active:scale-95">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;