import React from "react";
import { motion } from "framer-motion";

const timelineData = [
  {
    year: "1994",
    title: "PRR Travels",
    points: ["Founded as traditional transport operator", "Core business: Bus services"],
    align: "left",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800",
  },
  {
    year: "2015",
    title: "PRR Cargo Express",
    points: ["Logistics spin-off", "Focus: Full truck loads"],
    align: "right",
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=800",
  },
  {
    year: "2020",
    title: "Sri Raghavendra Travels",
    points: ["Premium travel services", "Corporate travel solutions"],
    align: "left",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800",
  },
  {
    year: "2022",
    title: "PRR Tours & Cabs",
    points: ["Tech-enabled mobility", "Women-led initiative"],
    align: "right",
    image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&q=80&w=800"
  },
  {
    year: "2022",
    title: "MoGro Plant Science",
    points: ["Agri-tech diversification", "Focus: Plant biotechnology"],
    align: "left",
    image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&q=80&w=800"
  },
  {
    year: "2024",
    title: "Franco Tamil Villas",
    points: ["Hospitality sector entry", "Concept: Luxury eco-resort"],
    align: "right",
    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=800",
  },
];

const HistoryTimeline = () => {
  return (
    <section className="bg-[#f6f7fb] py-24 px-4 font-sans overflow-hidden">
      <motion.h2 
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl font-extrabold text-center text-[#002B5B] mb-24 uppercase tracking-wider"
      >
        Our Journey Through Time
      </motion.h2>

      <div className="relative max-w-6xl mx-auto">
        {/* Animated Center Line */}
        <motion.div 
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="absolute left-1/2 -translate-x-1/2 w-[3px] bg-gradient-to-b from-red-600 to-blue-900 hidden md:block" 
        />

        <div className="space-y-28">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: item.align === "left" ? 100 : -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`relative flex flex-col md:flex-row items-center ${
                item.align === "left" ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image Side with Hover Effect */}
              <div className="w-full md:w-1/2 px-4 md:px-12">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="overflow-hidden rounded-3xl shadow-2xl border-4 border-white"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[300px] object-cover transition-transform duration-500 hover:rotate-2"
                  />
                </motion.div>
              </div>

              {/* Center Year Circle */}
              <div className="absolute left-1/2 -translate-x-1/2 z-20 hidden md:block">
                <motion.div 
                  whileHover={{ scale: 1.2, backgroundColor: "#002B5B" }}
                  className="bg-red-600 text-white text-sm font-bold w-16 h-16 rounded-full flex items-center justify-center shadow-lg border-4 border-white cursor-default transition-colors"
                >
                  {item.year}
                </motion.div>
              </div>

              {/* Content Side */}
              <div className="w-full md:w-1/2 px-4 md:px-12 mt-8 md:mt-0">
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 relative group"
                >
                  {/* Glowing effect on hover */}
                  <div className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl -z-10" />
                  
                  <h3 className="text-2xl font-bold text-[#002B5B] mb-4">
                    {item.title}
                  </h3>

                  <ul className="space-y-4">
                    {item.points.map((p, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-600 font-medium">
                        <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold">
                          ✓
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HistoryTimeline;




// import React from "react";

// const timelineData = [
//   {
//     year: "1994",
//     title: "PRR Travels",
//     points: ["Founded as traditional transport operator", "Core business: Bus services"],
//     align: "left",
//     // Classic Bus/Travel image
//     image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800",
//   },
//   {
//     year: "2015",
//     title: "PRR Cargo Express",
//     points: ["Logistics spin-off", "Focus: Full truck loads"],
//     align: "right",
//     // Modern White Truck on Highway
//     image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=800",
//   },
//   {
//     year: "2020",
//     title: "Sri Raghavendra Travels",
//     points: ["Premium travel services", "Corporate travel solutions"],
//     align: "left",
//     // Luxury SUV / Premium Car
//     image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800",
//   },
//   {
//     year: "2022",
//     title: "PRR Tours & Cabs",
//     points: ["Tech-enabled mobility", "Women-led initiative"],
//     align: "right",
//     // Modern City Cab / Taxi
// image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&q=80&w=800"
//   },
//   {
//     year: "2022",
//     title: "MoGro Plant Science",
//     points: ["Agri-tech diversification", "Focus: Plant biotechnology"],
//     align: "left",
//     // Lab/Plant Biotech image
// image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&q=80&w=800"
//   },
//   {
//     year: "2024",
//     title: "Franco Tamil Villas",
//     points: ["Hospitality sector entry", "LConcept: Luxury eco-resort"],
//     align: "right",
//     // Luxury Villa/Resort
//     image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=800",
//   },
// ];

// const HistoryTimeline = () => {
//   return (
//     <section className="bg-[#f6f7fb] py-24 px-4 font-sans">
//       <h2 className="text-4xl font-extrabold text-center text-[#002B5B] mb-24 uppercase tracking-wider">
//         Our History
//       </h2>

//       <div className="relative max-w-6xl mx-auto">
//         {/* center line */}
//         <div className="absolute left-1/2 -translate-x-1/2 h-full w-[2px] bg-red-600 hidden md:block" />

//         <div className="space-y-28">
//           {timelineData.map((item, index) => (
//             <div
//               key={index}
//               className={`relative flex flex-col md:flex-row items-center ${
//                 item.align === "left" ? "md:flex-row-reverse" : ""
//               }`}
//             >
//               {/* Image side */}
//               <div className="w-full md:w-1/2 px-4 md:px-12">
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="rounded-3xl shadow-xl w-full h-[280px] object-cover border-4 border-white"
//                 />
//               </div>

//               {/* center year */}
//               <div className="absolute left-1/2 -translate-x-1/2 z-20 hidden md:block">
//                 <div className="bg-red-600 text-white text-sm font-bold px-4 py-1.5 rounded-sm shadow-md">
//                   {item.year}
//                 </div>
//               </div>

//               {/* content side */}
//               <div className="w-full md:w-1/2 px-4 md:px-12 mt-6 md:mt-0">
//                 <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 relative">
                  
//                   {/* arrow - visible only on desktop */}
//                   <div
//                     className={`absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-white rotate-45 border hidden md:block
//                     ${
//                       item.align === "left"
//                         ? "-right-2.5 border-t border-r"
//                         : "-left-2.5 border-b border-l"
//                     }`}
//                   />

//                   <h3 className="text-2xl font-bold text-[#002B5B] mb-4">
//                     {item.title}
//                   </h3>

//                   <ul className="space-y-4">
//                     {item.points.map((p, i) => (
//                       <li key={i} className="flex items-center gap-3 text-gray-600 font-medium">
//                         {/* Custom blue check circle to match screenshot */}
//                         <span className="flex-shrink-0 w-5 h-5 border-2 border-blue-500 rounded-full flex items-center justify-center">
//                           <span className="text-[10px] text-blue-500">✓</span>
//                         </span>
//                         {p}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HistoryTimeline;