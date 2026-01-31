import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Car, Bus, Truck, ShieldCheck, Leaf, Home, ArrowRight } from "lucide-react";


const companies = [
  {
    id: "01",
    title: "PRR Tours And Cabs Pvt Ltd",
      description: "Led by women directors, PRR Travels promotes diversity, innovation, and empowerment, backed by an expert team and an inclusive workplace culture.",
    icon: <Car size={20} />,
    bgColor: "bg-red-600"
  },
  {
    id: "02",
    title: "PRR Travels",
      description: "PRR runs 850 coaches in Tamil Nadu and Andhra Pradesh, offering various transport services and planning CNG and hybrid vehicles for sustainable growth.",
    icon: <Bus size={20} />,
    bgColor: "bg-blue-600"
  },
  {
    id: "03",
    title: "Sri Raghavendra Travels Pvt Ltd",
      description: "As a women-led team, PRR plays a key role in Andhra Pradesh, providing coaches, buses in Anantapur, and corporate shuttle services.",
    icon: <ShieldCheck size={20} />,
    bgColor: "bg-slate-800"
  },
  {
    id: "04",
    title: "PRR Cargo",
      description: "PRR Cargo's extensive agent network, Full load and part load services across India with an extensive agent network.",
    icon: <Truck size={20} />,
    bgColor: "bg-orange-600"
  },
  {
    id: "05",
    title: "Meet Mogro Plant Science Pvt. Ltd.",
      description: "Mogro Plant Science Pvt. Ltd. is a leading agribusiness enterprise in Tamil Nadu, with its corporate headquarters in Chennai, Tamil Nadu. The company is engaged in the marketing of a comprehensive range of agricultural inputs, including insecticides, herbicides, fungicides, and plant growth regulators. These products are preferred by farmers across India.",
    icon: <Leaf size={20} />,
    bgColor: "bg-green-600"
  },
  {
    id: "06",
    title: "Franco Tamil Villas",
    description: "Franco Tamil Villas By Western Valley Resorts offers elegant accommodations that beautifully blend French colonial and Tamil architecture. As some of the best luxury villas in Pondicherry, these unique and luxurious retreats provide a personalized experience, combining the comforts of home with boutique amenities. Guests can indulge in delicious French and Indian cuisine at the acclaimed on-site restaurant. Whether you're planning a romantic getaway, a family vacation, a peaceful retreat, or a corporate event, Franco-Tamil Villas provide the perfect setting for a memorable stay in Pondicherry. Enjoy the charm and luxury that make this destination truly special.",
    icon: <Home size={20} />,
    bgColor: "bg-amber-700"
  },
];

const PrrGroup: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-white min-h-[750px] py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16">
          <h2 className="text-5xl font-black text-[#002B5B] tracking-tighter uppercase">
            PRR GROUP <span className="text-red-600">COMPANIES</span>
          </h2>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT SIDE: Titles with Constant Green Icons */}
          <div className="lg:col-span-5 flex flex-col gap-1">
            {companies.map((company, index) => (
              <button
                key={company.id}
                onMouseEnter={() => setActiveIndex(index)}
                className={`w-full text-left group flex items-center gap-3 p-4 rounded-xl transition-all duration-300 ${
                  activeIndex === index ? "translate-x-2" : ""
                }`}
              >
                {/* Icons are now always Green (#16a34a) when active */}
                <div className={`transition-all duration-300 ${activeIndex === index ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}>
                   <span className="text-green-600">{company.icon}</span>
                </div>

                <span className={`text-xl font-bold tracking-tight transition-colors duration-300 ${
                  activeIndex === index ? "text-[#002B5B]" : "text-slate-400"
                }`}>
                  {company.title}
                </span>

                <ArrowRight 
                  size={18}
                  className={`ml-auto transition-all duration-300 ${
                    activeIndex === index ? "opacity-100 text-[#002B5B]" : "opacity-0"
                  }`} 
                />
              </button>
            ))}
          </div>

          {/* RIGHT SIDE: Content (Top Aligned) */}
          <div className="lg:col-span-7 relative flex flex-col items-start lg:pl-16 border-l border-slate-100 min-h-[450px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="w-full"
              >
                <h3 className="text-5xl font-black text-slate-900 mb-8 leading-[1.1]">
                  {companies[activeIndex].title}
                </h3>
                
                <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl font-medium">
                  {companies[activeIndex].description}
                </p>

                {/* <button className={`px-10 py-4 rounded-full font-bold text-white transition-all hover:brightness-110 active:scale-95 shadow-lg ${companies[activeIndex].bgColor}`}>
                  Explore Division
                </button> */}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PrrGroup;




// import React from "react";
// import { motion } from "framer-motion"; // npm install framer-motion
// import { Car, Bus, Truck, ShieldCheck, Leaf, Home, ArrowUpRight } from "lucide-react";

// interface CompanyProps {
//   title: string;
//   description: string;
//   icon: React.ReactNode;
//   className?: string;
//   index: number;
// }

// const CompanyCard: React.FC<CompanyProps> = ({ title, description, icon, className, index }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.9 }}
//       whileInView={{ opacity: 1, scale: 1 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.5, delay: index * 0.1 }}
//       whileHover={{ y: -15 }} // Float up on hover
//       className={`group relative min-h-[400px] bg-white rounded-[3rem] p-10 flex flex-col items-center text-center justify-between border-b-8 border-transparent hover:border-red-600 shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_rgba(220,38,38,0.15)] transition-all duration-500 ${className}`}
//     >
//       {/* Glossy Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-b from-white to-slate-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[3rem]" />

//       {/* Floating Icon with Ring */}
//       <div className="relative z-10">
//         <div className="w-24 h-24 rounded-full bg-white shadow-xl flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all duration-500 border-4 border-slate-50 group-hover:border-red-100 group-hover:rotate-[15deg]">
//           {icon}
//         </div>
//         {/* Animated pulse behind icon */}
//         <div className="absolute inset-0 bg-red-400 rounded-full scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-0 transition-all duration-700 blur-xl" />
//       </div>

//       {/* Content */}
//       <div className="relative z-10 flex flex-col items-center gap-4">
//         <h3 className="text-2xl font-black text-slate-800 tracking-tight group-hover:text-red-700 transition-colors">
//           {title}
//         </h3>
//         <p className="text-slate-500 text-[15px] font-medium leading-relaxed line-clamp-4 group-hover:text-slate-600">
//           {description}
//         </p>
//       </div>

//       {/* Modern Action Button */}
//       <div className="relative z-10 w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-all duration-500">
//         <ArrowUpRight size={20} />
//       </div>

//       {/* Abstract Background Design */}
//       <div className="absolute -top-10 -right-10 w-32 h-32 bg-red-50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//     </motion.div>
//   );
// };

// const PrrGroup: React.FC = () => {
//   const companies = [
//     {
//       title: "PRR Tours And Cabs Pvt Ltd",
//       description: "Led by women directors, PRR Travels promotes diversity, innovation, and empowerment, backed by an expert team and an inclusive workplace culture.",
//       icon: <Car size={40} />,
//       gridStyle: "lg:col-span-3" 
//     },
//     {
//       title: "PRR Travels",
//       description: "PRR runs 850 coaches in Tamil Nadu and Andhra Pradesh, offering various transport services and planning CNG and hybrid vehicles for sustainable growth.",
//       icon: <Bus size={40} />,
//       gridStyle: "lg:col-span-3"
//     },
//     {
//       title: "Sri Raghavendra Travels Pvt Ltd",
//       description: "As a women-led team, PRR plays a key role in Andhra Pradesh, providing coaches, buses in Anantapur, and corporate shuttle services.",
//       icon: <ShieldCheck size={40} />,
//       gridStyle: "lg:col-span-3"
//     },
//     {
//       title: "PRR Cargo",
//       description: "PRR Cargo's extensive agent network, Full load and part load services across India with an extensive agent network.",
//       icon: <Truck size={40} />,
//       gridStyle: "lg:col-span-3"
//     },
//     {
//       title: "Meet Mogro Plant Science Pvt. Ltd.",
//       description: "Mogro Plant Science Pvt. Ltd. is a leading agribusiness enterprise in Tamil Nadu, with its corporate headquarters in Chennai, Tamil Nadu. The company is engaged in the marketing of a comprehensive range of agricultural inputs, including insecticides, herbicides, fungicides, and plant growth regulators.",
//       icon: <Leaf size={45} />,
//       gridStyle: "lg:col-span-6"
//     },
//     {
//       title: "Franco Tamil Villas",
//       description: "Franco Tamil Villas By Western Valley Resorts offers elegant accommodations that beautifully blend French colonial and Tamil architecture. As some of the best luxury villas in Pondicherry, these unique and luxurious retreats provide a personalized experience.",
//       icon: <Home size={45} />,
//       gridStyle: "lg:col-span-6"
//     },
//   ];

//   return (
//     <section className="bg-[#f4f7ff] py-32 px-6 relative overflow-hidden">
//       {/* Animated Aura Background */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-red-200/30 rounded-full blur-[120px] animate-pulse" />
//         <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-200/20 rounded-full blur-[120px] animate-bounce duration-[10s]" />
//       </div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         <header className="text-center mb-24">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             className="inline-block px-6 py-2 bg-red-50 rounded-full text-red-600 font-bold text-xs uppercase tracking-[0.3em] mb-6 shadow-sm"
//           >
//             The Ecosystem
//           </motion.div>
//           <motion.h2 
//             initial={{ opacity: 0, scale: 0.8 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             className="text-6xl font-[1000] text-slate-900 tracking-tighter"
//           >
//             PRR GROUP <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">COMPANIES</span>
//           </motion.h2>
//           <p className="text-slate-400 mt-6 text-lg font-medium">Driving Excellence Across Multiple Horizons</p>
//         </header>

//         {/* 12-Column Grid (4 small, 2 large) */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
//           {companies.map((company, index) => (
//             <CompanyCard
//               key={index}
//               index={index}
//               title={company.title}
//               description={company.description}
//               icon={company.icon}
//               className={company.gridStyle}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PrrGroup;