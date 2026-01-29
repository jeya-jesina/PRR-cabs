import React from "react";
import { Car, Bus, Truck, ShieldCheck, Leaf, Home } from "lucide-react";

interface CompanyProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string; // Added to handle specific grid placement
}

const CompanyCard: React.FC<CompanyProps> = ({ title, description, icon, className }) => {
  return (
    <div className={`group relative bg-white rounded-[2.5rem] p-8 pt-12 text-center transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(220,38,38,0.15)] border border-gray-100 flex flex-col items-center overflow-hidden h-full ${className}`}>
      
      {/* Top Accent Bar */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 to-red-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

      {/* Floating Icon Container*/}
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-red-500 blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-full" />
        
        <div className="relative w-24 h-24 rounded-3xl bg-slate-50 border border-gray-100 flex items-center justify-center shadow-inner group-hover:bg-white group-hover:rotate-[10deg] transition-all duration-500">
          <div className="text-red-600 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-[10deg]">
            {icon}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 space-y-4 flex-grow">
        <h3 className="text-xl font-extrabold text-slate-800 leading-snug group-hover:text-red-600 transition-colors duration-300">
          {title}
        </h3>
        
        <div className="w-12 h-1 bg-red-100 mx-auto rounded-full group-hover:w-20 group-hover:bg-red-500 transition-all duration-500" />
        
        <p className="text-sm text-slate-500 leading-relaxed font-medium">
          {description}
        </p>
      </div>

      {/* Subtle Background Pattern */}
      <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-red-50 rounded-full opacity-50 group-hover:scale-[3] transition-transform duration-700 -z-0" />
    </div>
  );
};

const PrrGroup: React.FC = () => {
  const companies = [
    {
      title: "PRR Tours And Cabs Pvt Ltd",
      description: "Led by women directors, PRR Travels promotes diversity, innovation, and empowerment, backed by an expert team and an inclusive workplace culture.",
      icon: <Car size={42} strokeWidth={1.2} />,
      gridStyle: "lg:col-span-3" // Takes 1/4 of the width
    },
    {
      title: "PRR Travels",
      description: "PRR runs 850 coaches in Tamil Nadu and Andhra Pradesh, offering various transport services and planning CNG and hybrid vehicles for sustainable growth.",
      icon: <Bus size={42} strokeWidth={1.2} />,
      gridStyle: "lg:col-span-3"
    },
    {
      title: "Sri Raghavendra Travels Pvt Ltd",
      description: "As a women-led team, PRR plays a key role in Andhra Pradesh, providing coaches, buses in Anantapur, and corporate shuttle services.",
      icon: <ShieldCheck size={42} strokeWidth={1.2} />,
      gridStyle: "lg:col-span-3"
    },
    {
      title: "PRR Cargo",
      description: "PRR Cargo's extensive agent network, Full load and part load services across India with an extensive agent network.",
      icon: <Truck size={42} strokeWidth={1.2} />,
      gridStyle: "lg:col-span-3"
    },
    {
      title: "Meet Mogro Plant Science Pvt. Ltd.",
      description: "Mogro Plant Science Pvt. Ltd. is a leading agribusiness enterprise in Tamil Nadu, with its corporate headquarters in Chennai, Tamil Nadu. The company is engaged in the marketing of a comprehensive range of agricultural inputs, including insecticides, herbicides, fungicides, and plant growth regulators. These products are preferred by farmers across India.",
      icon: <Leaf size={42} strokeWidth={1.2} />,
      gridStyle: "lg:col-span-6" // Takes 1/2 width to span larger in the bottom row
    },
    {
      title: "Franco Tamil Villas",
      description: "Franco Tamil Villas By Western Valley Resorts offers elegant accommodations that beautifully blend French colonial and Tamil architecture. As some of the best luxury villas in Pondicherry, these unique and luxurious retreats provide a personalized experience, combining the comforts of home with boutique amenities.",
      icon: <Home size={42} strokeWidth={1.2} />,
      gridStyle: "lg:col-span-6" // Takes 1/2 width to span larger in the bottom row
    },
  ];

  return (
    <section className="relative bg-[#fafbff] py-24 px-6 overflow-hidden">
      {/* Decorative Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-red-50/50 rounded-full blur-[120px]" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[30%] h-[30%] bg-blue-50/50 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Modern Header */}
        <div className="text-center max-w-2xl mx-auto mb-24 space-y-4">
          <h4 className="text-red-600 font-bold uppercase tracking-[0.4em] text-xs">Our Ecosystem</h4>
          <h2 className="text-5xl font-black text-slate-900 tracking-tight">
            Prr Group <span className="text-red-600">Companies</span>
          </h2>
          <div className="flex justify-center gap-1">
            <div className="w-2 h-2 rounded-full bg-red-600" />
            <div className="w-12 h-2 rounded-full bg-red-600/20" />
          </div>
        </div>

        {/* 12-Column Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10">
          {companies.map((company, index) => (
            <CompanyCard
              key={index}
              title={company.title}
              description={company.description}
              icon={company.icon}
              className={company.gridStyle}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrrGroup;