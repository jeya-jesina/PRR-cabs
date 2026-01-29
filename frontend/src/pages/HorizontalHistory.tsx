import React, { useState } from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const timelineData = [
  {
    year: "1994",
    title: "PRR Travels",
    points: ["Founded as traditional transport operator", "Core business: Bus services"],
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800",
  },
  {
    year: "2015",
    title: "PRR Cargo",
    points: ["Logistics spin-off", "Focus: Full truck loads"],
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=800",
  },
  {
    year: "2020",
    title: "Premium Travels",
    points: ["Corporate travel solutions", "Luxury fleet"],
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800",
  },
  {
    year: "2022",
    title: "MoGro Science",
    points: ["Agri-tech diversification", "Plant biotechnology"],
    image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&q=80&w=800"
  },
  {
    year: "2024",
    title: "Franco Villas",
    points: ["Luxury eco-resort", "Hospitality entry"],
    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=800",
  },
];

const HorizontalHistory = () => {
  const [expandedIndex, setExpandedIndex] = useState(1); // Default-ah Cargo (2nd card) open-la irukum

  return (
    <section className="bg-white py-16 px-6 overflow-hidden flex flex-col items-center font-sans">
      <div className="max-w-7xl w-full">
        {/* Header Section */}
        <div className="mb-12 flex justify-between items-end">
          <div>
            <h2 className="text-5xl font-black text-[#002B5B] tracking-tighter uppercase leading-none">
              The <span className="text-red-600">Evolution</span>
            </h2>
            <p className="text-gray-400 mt-3 font-medium tracking-wide">
              OUR JOURNEY THROUGH THE DECADES
            </p>
          </div>
          <div className="hidden md:block text-right">
             <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-1">Interactive Experience</p>
             <div className="flex gap-1 justify-end">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className={`h-1 w-4 rounded-full ${i === expandedIndex ? 'bg-red-600' : 'bg-gray-200'}`} />
                ))}
             </div>
          </div>
        </div>

        {/* Height Fixed Container: h-[450px] */}
        <div className="flex flex-col md:flex-row gap-4 h-auto md:h-[450px] w-full">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              onMouseEnter={() => setExpandedIndex(index)}
              initial={false}
              animate={{
                flex: expandedIndex === index ? 4 : 1, 
              }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden rounded-[2.5rem] cursor-pointer group shadow-2xl border border-white/10 min-h-[120px] md:min-h-full"
            >
              {/* Background Image */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              
              {/* Overlay: Expanded-la dark-ah irukum, collapsed-la light-ah irukum */}
              <div className={`absolute inset-0 transition-opacity duration-500 ${
                expandedIndex === index ? 'bg-black/60' : 'bg-black/30'
              }`} />

              {/* Collapsed Year Label (Vertical) */}
              {expandedIndex !== index && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 hidden md:flex items-center justify-center pointer-events-none"
                >
                  <span className="text-4xl font-black text-white/40 rotate-90 whitespace-nowrap tracking-tighter">
                    {item.year}
                  </span>
                </motion.div>
              )}

              {/* Content Section */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <motion.div
                  animate={{ 
                    opacity: expandedIndex === index ? 1 : 0,
                    x: expandedIndex === index ? 0 : -20 
                  }}
                  transition={{ duration: 0.4 }}
                  className={`${expandedIndex === index ? 'block' : 'hidden md:block'}`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-red-600 text-white px-4 py-1 rounded-full text-xs font-bold tracking-widest shadow-lg">
                      {item.year}
                    </span>
                    <div className="h-[1px] w-12 bg-white/30" />
                  </div>

                  <h3 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight uppercase tracking-tighter">
                    {item.title}
                  </h3>

                  <ul className="space-y-2 mb-2">
                    {item.points.map((p, i) => (
                      <li key={i} className="text-gray-100 flex items-start gap-2 text-sm md:text-base font-medium">
                        <span className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </motion.div>
                
                {/* Mobile logic: collapsed-la title mattum theriyura maari */}
                <div className={`md:hidden ${expandedIndex === index ? 'hidden' : 'block'}`}>
                   <h3 className="text-xl font-bold text-white">{item.year} - {item.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HorizontalHistory;