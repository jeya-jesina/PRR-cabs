import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Suresh Kumar",
    role: "Business Owner",
    text: "PRR Travels service is exceptional. Their punctuality and well-maintained vehicles made our corporate trip very smooth.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&fit=crop",
    rating: 5
  },
  {
    id: 2,
    name: "Priya Dharshini",
    role: "Agri-Tech Consultant",
    text: "The diversification into MoGro Plant Science is impressive. Their commitment to quality is evident in every sector they touch.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&fit=crop",
    rating: 5
  },
  {
    id: 3,
    name: "Arun Vijay",
    role: "Frequent Traveler",
    text: "Franco Tamil Villas is a masterpiece. The blend of luxury and eco-friendly design is something I've never seen before.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&h=200&fit=crop",
    rating: 4
  }
];

const TestimonialSection = () => {
  return (
    <section className="bg-white py-24 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-red-600 font-bold tracking-widest uppercase text-sm"
        >
          Testimonials
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-[#002B5B] mt-4"
        >
          Hear From Our Happy Clients
        </motion.h2>
        <div className="w-24 h-1 bg-red-600 mx-auto mt-6 rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {testimonials.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            whileHover={{ y: -15 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-[#f6f7fb] p-8 rounded-[2rem] shadow-sm hover:shadow-2xl transition-all duration-300 relative group"
          >
            {/* Quote Icon Animation */}
            <div className="absolute -top-5 left-8 bg-red-600 text-white p-3 rounded-xl shadow-lg transform group-hover:rotate-12 transition-transform">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21L14.017 18C14.017 16.8954 14.9125 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12C15.017 12.5523 14.5693 13 14.017 13H13.017V21H14.017ZM6.017 21L6.017 18C6.017 16.8954 6.91243 16 8.017 16H11.017C11.5693 16 12.017 15.5523 12.017 15V9C12.017 8.44772 11.5693 8 11.017 8H8.017C7.46472 8 7.017 8.44772 7.017 9V12C7.017 12.5523 6.56928 13 6.017 13H5.017V21H6.017Z" />
              </svg>
            </div>

            <div className="flex flex-col h-full">
              {/* Stars */}
              <div className="flex gap-1 mb-6 mt-4">
                {[...Array(item.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-500 text-xl">★</span>
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-600 italic leading-relaxed flex-grow text-lg">
                "{item.text}"
              </p>

              {/* User Info */}
              <div className="flex items-center gap-4 mt-8 pt-6 border-t border-gray-200">
                <motion.img 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                  src={item.image} 
                  alt={item.name} 
                  className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md"
                />
                <div>
                  <h4 className="font-bold text-[#002B5B] text-lg">{item.name}</h4>
                  <p className="text-sm text-red-600 font-medium">{item.role}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;