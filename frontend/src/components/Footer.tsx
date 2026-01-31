import React from 'react';
import { Facebook, Linkedin, Instagram, Phone, Mail, MapPin, ChevronRight, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToHeader = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B1221] text-gray-400 pt-8 pb-6 px-6 font-sans relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Column 1: Brand */}
        <div className="flex flex-col">
          <div className="mb-3">
             <span className="text-yellow-500 font-bold text-base tracking-tighter block leading-none">PERFECT</span>
             <span className="text-red-600 font-black text-3xl leading-none block">PRR</span>
             <span className="text-yellow-500 font-bold text-[9px] tracking-[0.2em] block uppercase">Road Rider</span>
          </div>
          <p className="text-[13px] leading-relaxed text-gray-300 mb-4">
            The Perfect Road Riders, an indicative name in providing an uncompromised 
            Staff Transportation Service in Major Cities in Tamil Nadu and Andhra Pradesh 
            to most reputed customers.
          </p>
          <div className="flex gap-3">
            {[Facebook, Linkedin, MessageCircle, Instagram].map((Icon, idx) => (
              <a key={idx} href="#" className="w-8 h-8 border border-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all text-white">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Column 2: Quick Link */}
        <div className="lg:pl-8">
          <h3 className="text-white text-lg font-bold mb-5">Quick Link</h3>
          <ul className="space-y-2 text-[14px]">
            {['Home', 'About us', 'Services', 'Vehicle Tarrif', 'Blog', 'Contact Us'].map((item) => (
              <li key={item} className="flex items-center group cursor-pointer hover:text-white transition-colors">
                <ChevronRight size={14} className="text-gray-600 group-hover:text-blue-500" />
                <span className="ml-1">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Contact Us (Full Content) */}
        <div>
          <h3 className="text-white text-lg font-bold mb-5">Contact Us</h3>
          <ul className="space-y-4 text-[13px]">
            <li className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                <Phone size={14} className="text-[#0B1221]" />
              </div>
              <span className="text-gray-200">+91 - 78248 48833</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                <Mail size={14} className="text-[#0B1221]" />
              </div>
              <span className="text-gray-200 break-all">bookings@prrcabs.com</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md">
                <MapPin size={14} className="text-[#0B1221]" />
              </div>
              <span className="leading-snug text-gray-200">No, 88, "V" Block 3rd Floor, 5th Avenue, Anna Nagar, Chennai - 600040.</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md">
                <MapPin size={14} className="text-[#0B1221]" />
              </div>
              <span className="leading-snug text-gray-200">Ground Floor, No 3 Sri Raghavendra Nilaya, 1st Main Road, New Bank Colony, Konanakunte, Bengaluru.</span>
            </li>
          </ul>
        </div>

        {/* Column 4: Map */}
        <div>
          <h3 className="text-white text-lg font-bold mb-5">Map</h3>
          <div className="w-full h-36 rounded-lg overflow-hidden border border-gray-800 shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.5298510000003!2d80.21!3d13.08!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDA0JzQ4LjAiTiA4MMKwMTInMzYuMCJF!5e0!3m2!1sen!2sin!4v1620000000000"
              className="w-full h-full grayscale opacity-80"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Copyright Section - Improved Visibility */}
      <div className="mt-12 pt-6 border-t border-gray-800/80 relative">
        <div className="flex flex-col items-center justify-center px-12">
          <p className="text-sm md:text-base text-gray-300 text-center tracking-wide">
            © Copyright 2026. All Rights Reserved by <span className="text-red-500 font-bold">PRR Cabs.</span> 
            <span className="mx-2 hidden md:inline">|</span> 
            <span className="block md:inline">Developed By <span className="text-red-500 font-bold hover:underline cursor-pointer">KP Webtech</span></span>
          </p>
        </div>
        
        {/* Red Navigation Button */}
        <button 
          onClick={scrollToHeader}
          className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#F14B3D] rounded-full flex items-center justify-center text-white shadow-2xl hover:bg-red-700 transition-all hover:scale-110 active:scale-90"
          title="Go to top"
        >
          <span className="text-xl font-bold mb-1">↑</span>
        </button>
      </div>
    </footer>
  );
};

export default Footer;