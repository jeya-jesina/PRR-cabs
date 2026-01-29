import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Side: Image with Styled Frame */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10 overflow-hidden rounded-[40px] shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
             <img 
  src="https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?auto=format&fit=crop&w=800&q=80" 
  alt="PRR Cabs Luxury Car" 
  className="w-full h-[500px] object-cover transition-transform duration-700 ease-out hover:scale-110 hover:rotate-1"
/>

            </div>
            {/* Decorative Background Element */}
            <div className="absolute -bottom-6 -left-6 w-64 h-64 bg-red-50 rounded-full -z-0 blur-3xl opacity-60"></div>
          </div>

          {/* Right Side: Content */}
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="space-y-2">
              <h4 className="text-red-600 font-bold uppercase tracking-widest text-sm">
                Our Legacy
              </h4>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
                Prr Tours And Cabs <br /> 
                <span className="text-red-600">Pvt Limited</span>
              </h2>
            </div>

            <div className="space-y-5 text-gray-600 leading-relaxed text-lg">
              <p>
                <strong className="text-gray-900">PRR Tours and Cabs Private Limited</strong> – A Women-Led Transport Company With a strong women-led management team, we understand the value of representation. Our initiative to train and recruit more women drivers reflects our long-term commitment to inclusive growth and community development.
              </p>
              
              <p>
                At PRR Tours and Cabs Private Limited, we believe that true progress lies in empowerment and inclusivity. That’s why we proudly promote and support lady drivers across our fleet — women who are not just skilled professionals, but also symbols of confidence, safety, and empowerment.
              </p>
            </div>

            <div className="pt-6">
              <button className="group relative inline-flex items-center justify-center px-10 py-4 font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-red-600 shadow-xl">
                View More
                <span className="ml-3 text-xl transition-transform duration-300 group-hover:translate-x-2">↗</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;