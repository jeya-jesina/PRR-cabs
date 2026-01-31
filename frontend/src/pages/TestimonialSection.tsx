import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  image: string;
  brand: string;
  accent: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Suresh Kumar",
    role: "Business Owner",
    text: "PRR Travels service is exceptional. Their punctuality and well-maintained vehicles made our corporate trip very smooth.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=400&fit=crop",
    brand: "PRR TRAVELS",
    accent: "#EF4444"
  },
  {
    id: 2,
    name: "Priya Dharshini",
    role: "Agri-Tech Consultant",
    text: "The diversification into MoGro Plant Science is impressive. Commitment to quality is evident in every sector.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&h=400&fit=crop",
    brand: "MOGRO SCIENCE",
    accent: "#10B981"
  },
  {
    id: 3,
    name: "Arun Vijay",
    role: "Frequent Traveler",
    text: "Franco Tamil Villas is a masterpiece. The luxury and eco-friendly design is world-class.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&h=400&fit=crop",
    brand: "FRANCO TAMIL",
    accent: "#3B82F6"
  }
];

const TestimonialCard = ({ item, index, scrollYProgress }: { item: Testimonial, index: number, scrollYProgress: MotionValue<number> }) => {
  const start = index * 0.3;
  const end = start + 0.3;
  
  const opacity = useTransform(scrollYProgress, [start, start + 0.1, end - 0.1, end], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [start, start + 0.1, end], [0.98, 1, 0.98]);
  const xOffset = useTransform(scrollYProgress, [start, end], [30, -30]);

  return (
    <motion.div 
      style={{ opacity, scale }}
      className="absolute inset-0 flex items-center justify-center p-6 md:p-20"
    >
      <div className="relative w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
        
        {/* Visual Column - Shadow & Backplate Removed */}
        <div className="relative order-2 lg:order-1 flex justify-center">
          <motion.div 
            style={{ x: xOffset }}
            className="relative z-10 w-full max-w-[300px] aspect-[4/5] md:h-[400px] overflow-hidden rounded-[1rem] border border-gray-100"
          >
            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#002B5B]/40 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white text-left">
               <p className="text-[8px] font-bold tracking-[0.3em] mb-1 uppercase opacity-80">Verified Client</p>
               <h4 className="text-lg font-bold">{item.name}</h4>
            </div>
          </motion.div>
        </div>

        {/* Content Column */}
        <div className="order-1 lg:order-2 space-y-4 text-left">
          <div className="inline-block px-3 py-1 rounded-full border border-gray-200 text-[9px] font-bold tracking-widest text-gray-500">
            {item.brand}
          </div>
          
          <h3 className="text-3xl md:text-4xl font-extrabold text-[#002B5B] leading-[1.2] tracking-tight">
            "{item.text}"
          </h3>
          
          <div className="flex items-center gap-3 pt-4">
            <div className="w-8 h-[1px] bg-red-600" />
            <div>
                <p className="text-xs font-bold text-[#002B5B] uppercase">{item.name}</p>
                <p className="text-[10px] font-medium text-gray-400 uppercase tracking-widest">{item.role}</p>
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
};

const ProgressIndicator = ({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) => {
  const dot1 = useTransform(scrollYProgress, [0, 0.33], [6, 20]);
  const dot2 = useTransform(scrollYProgress, [0.33, 0.66], [6, 20]);
  const dot3 = useTransform(scrollYProgress, [0.66, 1], [6, 20]);

  return (
    <div className="flex gap-1">
      <motion.div className="h-0.5 rounded-full bg-red-600" style={{ width: dot1 }} />
      <motion.div className="h-0.5 rounded-full bg-red-600" style={{ width: dot2 }} />
      <motion.div className="h-0.5 rounded-full bg-red-600" style={{ width: dot3 }} />
    </div>
  );
};

const TestimonialSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <section ref={sectionRef} className="relative bg-white h-[400vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col">
        
        {/* Simple Header */}
        {/* <div className="p-6 md:p-10 flex justify-between items-center w-full z-50">
          <p className="text-[9px] font-bold tracking-[0.4em] text-[#002B5B] opacity-30 uppercase">PRR Group</p>
          <p className="text-[9px] font-bold text-red-600/40 uppercase tracking-widest italic font-serif">Est. 1994</p>
        </div> */}
<div>
            <h2 className="text-5xl font-black text-[#002B5B] tracking-tighter uppercase leading-none">
             Hear From Our  <span className="text-red-600">Happy Clients</span>
            </h2>
           
          </div>
        <div className="relative flex-grow">
          {testimonials.map((item, index) => (
            <TestimonialCard key={item.id} item={item} index={index} scrollYProgress={smoothProgress} />
          ))}
        </div>

        {/* Minimal Footer */}
        {/* <div className="p-10 flex justify-between items-end w-full">
           <div className="flex flex-col gap-1.5">
              <span className="text-[7px] font-bold text-gray-300 uppercase tracking-widest">Trust Index</span>
              <ProgressIndicator scrollYProgress={smoothProgress} />
           </div>
           <div>
              <p className="text-[8px] font-bold text-[#002B5B]/30 uppercase tracking-widest">Scroll</p>
           </div>
        </div> */}
      </div>
    </section>
  );
};

export default TestimonialSection;





// import React from "react";
// import { motion } from "framer-motion";

// const testimonials = [
//   {
//     id: 1,
//     name: "Suresh Kumar",
//     role: "Business Owner",
//     text: "PRR Travels service is exceptional. Their punctuality and well-maintained vehicles made our corporate trip very smooth.",
//     image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&fit=crop",
//     company: "PRR Travels"
//   },
//   {
//     id: 2,
//     name: "Priya Dharshini",
//     role: "Agri-Tech Consultant",
//     text: "The diversification into MoGro Plant Science is impressive. Their commitment to quality is evident in every sector they touch.",
//     image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&fit=crop",
//     company: "MoGro Plant Science"
//   },
//   {
//     id: 3,
//     name: "Arun Vijay",
//     role: "Frequent Traveler",
//     text: "Franco Tamil Villas is a masterpiece. The blend of luxury and eco-friendly design is something I've never seen before.",
//     image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&h=200&fit=crop",
//     company: "Franco Tamil Villas"
//   }
// ];

// const TestimonialSection = () => {
//   return (
//     <section className="relative bg-white py-24 px-4 overflow-hidden">
//       {/* Abstract Background Decoration */}
//       <div className="absolute inset-0 z-0 opacity-[0.03]" 
//            style={{ backgroundImage: `radial-gradient(#000 1px, transparent 1px)`, backgroundSize: '30px 30px' }} 
//       />

//       <div className="max-w-7xl mx-auto relative z-10">
//         <div className="flex flex-col items-center text-center mb-20">
//           <motion.div
//             initial={{ scale: 0 }}
//             whileInView={{ scale: 1 }}
//             className="w-16 h-1 bg-red-600 mb-6"
//           />
//           <motion.h2 
//             initial={{ opacity: 0, letterSpacing: "0px" }}
//             whileInView={{ opacity: 1, letterSpacing: "2px" }}
//             transition={{ duration: 1 }}
//             className="text-5xl md:text-7xl font-black text-[#002B5B] uppercase"
//           >
//             Client <span className="text-gray-300">Voices</span>
//           </motion.h2>
//           <p className="mt-4 text-gray-400 font-medium tracking-[0.3em] uppercase text-sm">Experience the Excellence</p>
//         </div>

//         <div className="flex flex-wrap justify-center gap-12">
//           {testimonials.map((item, index) => (
//             <motion.div
//               key={item.id}
//               initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8, delay: index * 0.2 }}
//               className="relative w-full max-w-[380px]"
//             >
//               {/* The "Different" Card Design */}
//               <div className="group relative">
//                 {/* Back Decorative Plate */}
//                 <div className="absolute inset-0 bg-red-600 rounded-2xl translate-x-3 translate-y-3 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500" />
                
//                 {/* Main Content Card */}
//                 <div className="relative bg-[#fdfdfd] border-2 border-[#002B5B] p-8 rounded-2xl z-10 h-full transition-transform duration-500 group-hover:-translate-x-2 group-hover:-translate-y-2">
                  
//                   {/* Company Tag */}
//                   <div className="inline-block px-3 py-1 bg-[#002B5B] text-white text-[10px] font-bold uppercase tracking-tighter mb-6">
//                     {item.company}
//                   </div>

//                   <div className="mb-8">
//                     <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                       <path d="M14.017 21L14.017 18C14.017 16.8954 14.9125 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12C15.017 12.5523 14.5693 13 14.017 13H13.017V21H14.017Z" fill="#EF4444" />
//                       <path d="M6.017 21L6.017 18C6.017 16.8954 6.91243 16 8.017 16H11.017C11.5693 16 12.017 15.5523 12.017 15V9C12.017 8.44772 11.5693 8 11.017 8H8.017C7.46472 8 7.017 8.44772 7.017 9V12C7.017 12.5523 6.56928 13 6.017 13H5.017V21H6.017Z" fill="#EF4444" />
//                     </svg>
//                   </div>

//                   <p className="text-[#002B5B] text-xl font-bold italic leading-tight mb-10">
//                     {item.text}
//                   </p>

//                   <div className="flex items-center gap-4">
//                     <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-red-600 shadow-[4px_4px_0px_#002B5B]">
//                       <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
//                     </div>
//                     <div>
//                       <h4 className="font-black text-[#002B5B] text-sm uppercase">{item.name}</h4>
//                       <p className="text-xs text-red-600 font-bold">{item.role}</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Unique Floating Element */}
//               <motion.div 
//                 animate={{ y: [0, -10, 0] }}
//                 transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
//                 className="absolute -bottom-4 -right-4 w-12 h-12 bg-yellow-400 rounded-full -z-10 opacity-50 blur-xl"
//               />
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TestimonialSection;