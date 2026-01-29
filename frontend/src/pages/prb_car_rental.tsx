import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';

import AboutSection from './AboutSection';
import PrrGroup from './PrrGroupCompanies';
import HistoryTimeline from './HistoryTimeline';
import TestimonialSection from './TestimonialSection';
import HorizontalHistory from './HorizontalHistory';

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const backgroundImages = [
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&w=1920&q=80"
  ];

  return (
    <>
      <section className="relative h-screen w-full overflow-hidden font-sans bg-black">
        
        {/* Background Slider */}
        <div className="absolute inset-0 z-0">
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            className="h-full w-full"
          >
            {backgroundImages.map((img, index) => (
              <SwiperSlide key={index}>
                <div 
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${img})`, filter: 'brightness(0.4)' }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Main Content Container */}
        <div className="relative z-10 container mx-auto px-6 lg:px-12 h-full flex items-center pt-20"> 
          <div className="grid lg:grid-cols-2 gap-8 items-center w-full">
            
            {/* Left Side: Text */}
            <div className={`
              text-white transition-all duration-[1200ms] ease-out
              ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-[50%] opacity-0'}
            `}>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
                Corporate Fleet <br /> Experts <br /> 
                <span className="text-white/80 font-medium text-3xl md:text-5xl">Since 1994</span>
              </h1>
              <button className="group flex items-center gap-2 bg-[#FF3B30] hover:bg-red-700 text-white px-8 py-3 rounded-full text-base font-bold transition-all transform hover:scale-105 shadow-xl">
                Explore Now 
                <span className="text-xl">↗</span>
              </button>
            </div>

            {/* Right Side: Compact Booking Form */}
            <div className={`
              bg-white/10 backdrop-blur-xl border border-white/20 p-6 md:p-8 rounded-[35px] text-white w-full max-w-md lg:ml-auto shadow-2xl
              transition-all duration-[1200ms] ease-out
              ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-[50%] opacity-0'}
            `}>
              <h2 className="text-2xl font-bold mb-5 text-center tracking-tight uppercase">Book Your Vehicle</h2>
              
              <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <input type="text" placeholder="Your Name" className="bg-white/10 border border-white/30 rounded-full px-4 py-2 text-sm outline-none focus:ring-1 focus:ring-red-500 placeholder:text-gray-300 transition-all" />
                  <input type="email" placeholder="Email Address" className="bg-white/10 border border-white/30 rounded-full px-4 py-2 text-sm outline-none focus:ring-1 focus:ring-red-500 placeholder:text-gray-300 transition-all" />
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <input type="text" placeholder="dd-mm-yyyy" className="bg-white/10 border border-white/30 rounded-full px-4 py-2 text-sm outline-none focus:ring-1 focus:ring-red-500" />
                  <input type="text" placeholder="Time" className="bg-white/10 border border-white/30 rounded-full px-4 py-2 text-sm outline-none focus:ring-1 focus:ring-red-500" />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <input type="text" placeholder="Pickup" className="bg-white/10 border border-white/30 rounded-full px-4 py-2 text-sm outline-none focus:ring-1 focus:ring-red-500" />
                  <input type="text" placeholder="Drop" className="bg-white/10 border border-white/30 rounded-full px-4 py-2 text-sm outline-none focus:ring-1 focus:ring-red-500" />
                </div>

                <input type="tel" placeholder="Phone Number" className="w-full bg-white/10 border border-white/30 rounded-full px-4 py-2 text-sm outline-none focus:ring-1 focus:ring-red-500" />
                
                <textarea placeholder="Your Message" className="w-full bg-white/10 border border-white/30 rounded-2xl px-4 py-2 h-16 text-sm outline-none focus:ring-1 focus:ring-red-500 placeholder:text-gray-300 resize-none transition-all"></textarea>

                <div className="flex justify-center pt-2">
                  <button 
                    type="submit" 
                    className="bg-white text-black hover:bg-[#FF3B30] hover:text-white font-bold py-2.5 px-10 rounded-full text-sm transition-all duration-300 transform hover:scale-105 shadow-md w-full"
                  >
                    Book Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* About Section is now placed right below the Hero Section */}
      <AboutSection />
      <PrrGroup/>
      <HorizontalHistory/>
      <TestimonialSection/>
    </>
  );
};

export default HeroSection;