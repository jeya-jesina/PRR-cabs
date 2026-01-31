import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { motion, Variants } from 'framer-motion';
import { User, Mail, Calendar, Clock, MapPin, Phone, MessageSquare, Send } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/effect-fade';

// Components
import AboutSection from './AboutSection';
import PrrGroup from './PrrGroupCompanies';
import TestimonialSection from './TestimonialSection';
import HorizontalHistory from './HorizontalHistory';
import CorporateLogos from './CorporateLogos';

const HeroSection: React.FC = () => {
  const backgroundImages = [
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&w=1920&q=80"
  ];

  // Animation Variants
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  return (
    <div className="bg-[#0a0a0a]">
      <section className="relative h-[100vh] w-full overflow-hidden font-sans flex items-center">
        
        {/* Background Slider */}
        <div className="absolute inset-0 z-0">
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="h-full w-full"
          >
            {backgroundImages.map((img, index) => (
              <SwiperSlide key={index}>
                <div 
                  className="w-full h-full bg-cover bg-center transition-transform duration-[10000ms] scale-110"
                  style={{ 
                    backgroundImage: `url(${img})`, 
                    filter: 'brightness(0.35) contrast(1.1)' 
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 container mx-auto px-6 lg:px-12 h-full flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full pt-10">
            
            {/* Left Side: Animated Text */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="text-white"
            >
              <motion.span 
                variants={fadeInUp}
                className="inline-block text-[#FF3B30] font-bold tracking-[0.2em] uppercase mb-4 text-sm"
              >
                Premium Transportation Services
              </motion.span>
              
              <motion.h1 
                variants={fadeInUp}
                className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-6"
              >
                Corporate Fleet <br /> 
                <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  Experts
                </span> 
                <br /> 
                <span className="text-2xl md:text-4xl font-light tracking-widest text-white/60">SINCE 1994</span>
              </motion.h1>

              <motion.div variants={fadeInUp}>
                <button className="group relative overflow-hidden bg-[#FF3B30] text-white px-8 py-4 rounded-full text-base font-bold transition-all shadow-2xl active:scale-95">
                  <span className="relative z-10 flex items-center gap-2">
                    Explore Now <span className="group-hover:translate-x-1 transition-transform duration-300">↗</span>
                  </span>
                </button>
              </motion.div>
            </motion.div>

            {/* Right Side: Compact Mirror Form */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative bg-white/10 backdrop-blur-[25px] border border-white/30 p-6 md:p-7 rounded-[40px] text-white w-full max-w-md lg:ml-auto shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden group">
                
                {/* Mirror Shine Animation */}
                <div className="absolute top-0 left-[-100%] w-[200%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-35deg] pointer-events-none transition-all duration-1000 group-hover:left-[100%]"></div>

                <h2 className="text-xl font-bold mb-6 text-center tracking-widest uppercase drop-shadow-lg">Book Your Vehicle</h2>
                
                <form className="space-y-3.5 relative z-10" onSubmit={(e) => e.preventDefault()}>
                  {/* Row 1 */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="relative">
                      <input type="text" placeholder="Name" className="w-full bg-white/5 border border-white/20 rounded-full px-5 py-2.5 text-xs outline-none focus:border-white transition-all placeholder:text-gray-300" />
                      <User className="absolute right-4 top-2.5 text-white/50 w-4 h-4" />
                    </div>
                    <div className="relative">
                      <input type="email" placeholder="Email" className="w-full bg-white/5 border border-white/20 rounded-full px-5 py-2.5 text-xs outline-none focus:border-white transition-all placeholder:text-gray-300" />
                      <Mail className="absolute right-4 top-2.5 text-white/50 w-4 h-4" />
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="relative">
                      <input type="text" placeholder="dd-mm-yyyy" onFocus={(e) => (e.target.type = "date")} className="w-full bg-white/5 border border-white/20 rounded-full px-5 py-2.5 text-xs outline-none focus:border-white transition-all" />
                      <Calendar className="absolute right-4 top-2.5 text-white/50 w-4 h-4 pointer-events-none" />
                    </div>
                    <div className="relative">
                      <input type="text" placeholder="Time" onFocus={(e) => (e.target.type = "time")} className="w-full bg-white/5 border border-white/20 rounded-full px-5 py-2.5 text-xs outline-none focus:border-white transition-all" />
                      <Clock className="absolute right-4 top-2.5 text-white/50 w-4 h-4 pointer-events-none" />
                    </div>
                  </div>

                  {/* Row 3 */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="relative">
                      <input type="text" placeholder="Pickup" className="w-full bg-white/5 border border-white/20 rounded-full px-5 py-2.5 text-xs outline-none focus:border-white transition-all" />
                      <MapPin className="absolute right-4 top-2.5 text-white/50 w-3.5 h-3.5 opacity-0 md:opacity-100" />
                    </div>
                    <div className="relative">
                      <input type="text" placeholder="Drop" className="w-full bg-white/5 border border-white/20 rounded-full px-5 py-2.5 text-xs outline-none focus:border-white transition-all" />
                      <MapPin className="absolute right-4 top-2.5 text-white/50 w-3.5 h-3.5 opacity-0 md:opacity-100" />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="relative">
                    <input type="tel" placeholder="Phone Number" className="w-full bg-white/5 border border-white/20 rounded-full px-5 py-2.5 text-xs outline-none focus:border-white transition-all" />
                    <Phone className="absolute right-5 top-2.5 text-white/50 w-4 h-4" />
                  </div>

                  {/* Message */}
                  <div className="relative">
                    <textarea rows={2} placeholder="Your Message" className="w-full bg-white/5 border border-white/20 rounded-[20px] px-5 py-2.5 text-xs outline-none focus:border-white transition-all resize-none"></textarea>
                    <MessageSquare className="absolute right-5 top-3.5 text-white/50 w-4 h-4" />
                  </div>

                  {/* Submit Button */}
                  <button className="w-full bg-[#FF3B30] text-white font-bold py-3.5 rounded-full hover:bg-white hover:text-black transition-all duration-500 shadow-xl flex items-center justify-center gap-2 group text-sm uppercase tracking-widest">
                    Submit <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>

                {/* Background Glow */}
                <div className="absolute -z-10 top-0 left-0 w-full h-full bg-white/5 blur-3xl rounded-full"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Page Content */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
        <AboutSection />
      </motion.div>
      
      <PrrGroup />
      <HorizontalHistory />
      
      
      
      <TestimonialSection />
        <CorporateLogos />
    </div>
  );
};

export default HeroSection;






// import React, { useEffect, useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, EffectFade } from 'swiper/modules';

// import 'swiper/css';
// import 'swiper/css/effect-fade';

// import AboutSection from './AboutSection';
// import PrrGroup from './PrrGroupCompanies';
// import HistoryTimeline from './HistoryTimeline';
// import TestimonialSection from './TestimonialSection';
// import HorizontalHistory from './HorizontalHistory';
// import CorporateLogos from './CorporateLogos';

// const HeroSection: React.FC = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   const backgroundImages = [
//     "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1920&q=80",
//     "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1920&q=80",
//     "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1920&q=80",
//     "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&w=1920&q=80"
//   ];

//   return (
//     <>
//       <section className="relative h-screen w-full overflow-hidden font-sans bg-black">
        
//         {/* Background Slider */}
//         <div className="absolute inset-0 z-0">
//           <Swiper
//             modules={[Autoplay, EffectFade]}
//             effect="fade"
//             loop={true}
//             autoplay={{ delay: 4000, disableOnInteraction: false }}
//             className="h-full w-full"
//           >
//             {backgroundImages.map((img, index) => (
//               <SwiperSlide key={index}>
//                 <div 
//                   className="w-full h-full bg-cover bg-center"
//                   style={{ backgroundImage: `url(${img})`, filter: 'brightness(0.4)' }}
//                 />
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>

//         {/* Main Content Container */}
//         <div className="relative z-10 container mx-auto px-6 lg:px-12 h-full flex items-center pt-20"> 
//           <div className="grid lg:grid-cols-2 gap-8 items-center w-full">
            
//             {/* Left Side: Text */}
//             <div className={`
//               text-white transition-all duration-[1200ms] ease-out
//               ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-[50%] opacity-0'}
//             `}>
//               <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
//                 Corporate Fleet <br /> Experts <br /> 
//                 <span className="text-white/80 font-medium text-3xl md:text-5xl">Since 1994</span>
//               </h1>
//               <button className="group flex items-center gap-2 bg-[#FF3B30] hover:bg-red-700 text-white px-8 py-3 rounded-full text-base font-bold transition-all transform hover:scale-105 shadow-xl">
//                 Explore Now 
//                 <span className="text-xl">↗</span>
//               </button>
//             </div>

//             {/* Right Side: Compact Booking Form */}
//             <div className={`
//               bg-white/10 backdrop-blur-xl border border-white/20 p-6 md:p-8 rounded-[35px] text-white w-full max-w-md lg:ml-auto shadow-2xl
//               transition-all duration-[1200ms] ease-out
//               ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-[50%] opacity-0'}
//             `}>
//               <h2 className="text-2xl font-bold mb-5 text-center tracking-tight uppercase">Book Your Vehicle</h2>
              
//               <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//                   <input type="text" placeholder="Your Name" className="bg-white/10 border border-white/30 rounded-full px-4 py-2 text-sm outline-none focus:ring-1 focus:ring-red-500 placeholder:text-gray-300 transition-all" />
//                   <input type="email" placeholder="Email Address" className="bg-white/10 border border-white/30 rounded-full px-4 py-2 text-sm outline-none focus:ring-1 focus:ring-red-500 placeholder:text-gray-300 transition-all" />
//                 </div>
                
//                 <div className="grid grid-cols-2 gap-3">
//                   <input type="text" placeholder="dd-mm-yyyy" className="bg-white/10 border border-white/30 rounded-full px-4 py-2 text-sm outline-none focus:ring-1 focus:ring-red-500" />
//                   <input type="text" placeholder="Time" className="bg-white/10 border border-white/30 rounded-full px-4 py-2 text-sm outline-none focus:ring-1 focus:ring-red-500" />
//                 </div>

//                 <div className="grid grid-cols-2 gap-3">
//                   <input type="text" placeholder="Pickup" className="bg-white/10 border border-white/30 rounded-full px-4 py-2 text-sm outline-none focus:ring-1 focus:ring-red-500" />
//                   <input type="text" placeholder="Drop" className="bg-white/10 border border-white/30 rounded-full px-4 py-2 text-sm outline-none focus:ring-1 focus:ring-red-500" />
//                 </div>

//                 <input type="tel" placeholder="Phone Number" className="w-full bg-white/10 border border-white/30 rounded-full px-4 py-2 text-sm outline-none focus:ring-1 focus:ring-red-500" />
                
//                 <textarea placeholder="Your Message" className="w-full bg-white/10 border border-white/30 rounded-2xl px-4 py-2 h-16 text-sm outline-none focus:ring-1 focus:ring-red-500 placeholder:text-gray-300 resize-none transition-all"></textarea>

//                 <div className="flex justify-center pt-2">
//                   <button 
//                     type="submit" 
//                     className="bg-white text-black hover:bg-[#FF3B30] hover:text-white font-bold py-2.5 px-10 rounded-full text-sm transition-all duration-300 transform hover:scale-105 shadow-md w-full"
//                   >
//                     Book Now
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* About Section is now placed right below the Hero Section */}
//       <AboutSection />
//       <PrrGroup/>
//       <HorizontalHistory/>
//       <TestimonialSection/>
//       <CorporateLogos/>
//     </>
//   );
// };

// export default HeroSection;