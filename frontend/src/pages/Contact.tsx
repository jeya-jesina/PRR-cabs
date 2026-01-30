import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    arrivalDate: '',
    departureDate: '',
    kids: '',
    adults: '',
    places: '',
    requirements: ''
  });

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  console.log("Form submitted:", formData);
};

const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
};


  const destinations = [
    { name: "Kochi", img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944", desc: "Queen of the Arabian Sea" },
    { name: "Munnar", img: "https://images.unsplash.com/photo-1593181629936-11c609b8db9b", desc: "Hill Station Paradise" },
    { name: "Thekkady", img: "https://images.unsplash.com/photo-1589982840479-7813aacc5890", desc: "Wildlife & Spice Gardens" },
    { name: "Alleppey", img: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2", desc: "Venice of the East" },
    { name: "Varkala", img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944", desc: "Cliff Beach Beauty" },
    { name: "Kanyakumari", img: "https://images.unsplash.com/photo-1516690553959-71a414d6b9b6", desc: "Sunrise & Sunset Point" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 font-sans overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Poppins:wght@300;400;500;600&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes floatUp {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }

        @keyframes slideInBlur {
          from {
            opacity: 0;
            filter: blur(10px);
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            filter: blur(0);
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-fadeInLeft {
          animation: fadeInLeft 0.8s ease-out forwards;
        }

        .animate-fadeInRight {
          animation: fadeInRight 0.8s ease-out forwards;
        }

        .animate-scaleIn {
          animation: scaleIn 0.6s ease-out forwards;
        }

        .animate-float {
          animation: floatUp 3s ease-in-out infinite;
        }

        .animate-slideBlur {
          animation: slideInBlur 0.8s ease-out forwards;
        }

        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-700 { animation-delay: 0.7s; }
        .delay-800 { animation-delay: 0.8s; }

        .gradient-text {
          background: linear-gradient(135deg, #0d9488, #14b8a6, #2dd4bf);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 3s infinite linear;
          background-size: 200% auto;
        }

        .card-hover {
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .card-hover:hover {
          transform: translateY(-12px) scale(1.02);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }

        .input-focus {
          transition: all 0.3s ease;
        }

        .input-focus:focus {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px -5px rgba(14, 165, 233, 0.3);
        }

        .btn-hover {
          position: relative;
          overflow: hidden;
          transition: all 0.4s ease;
        }

        .btn-hover::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }

        .btn-hover:hover::before {
          width: 300px;
          height: 300px;
        }

        .btn-hover:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 30px -5px rgba(0, 0, 0, 0.3);
        }

        .destination-card {
          position: relative;
          overflow: hidden;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .destination-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.7s;
        }

        .destination-card:hover::before {
          left: 100%;
        }

        .destination-card:hover img {
          transform: scale(1.15) rotate(2deg);
        }

        .destination-card img {
          transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .wave-bg {
          background: linear-gradient(135deg, #0d9488 0%, #14b8a6 50%, #2dd4bf 100%);
          position: relative;
          overflow: hidden;
        }

        .wave-bg::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100px;
          background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 100' preserveAspectRatio='none'%3E%3Cpath d='M0,0 C300,100 900,0 1200,50 L1200,100 L0,100 Z' fill='rgb(236, 253, 245)'/%3E%3C/svg%3E");
          background-size: cover;
          animation: wave 10s linear infinite;
        }

        @keyframes wave {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .glass-morphism {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .heading-font {
          font-family: 'Playfair Display', serif;
        }

        .body-font {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>

      {/* Hero Section */}
      <div className="relative h-[500px] wave-bg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent"></div>
        
        {/* Floating decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/20 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-white/20 rounded-full animate-float delay-300"></div>
        <div className="absolute bottom-40 left-1/4 w-12 h-12 bg-white/20 rounded-full animate-float delay-500"></div>

        <div className="relative h-full flex flex-col items-center justify-center text-white px-4 z-10">
          <div className="text-center opacity-0 animate-fadeInUp">
            <h1 className="text-6xl md:text-7xl font-black heading-font mb-4 tracking-tight">
              Let's Plan Your Journey
            </h1>
            <p className="text-xl md:text-2xl body-font font-light opacity-90 max-w-2xl mx-auto">
              Discover the enchanting beauty of Kerala with us
            </p>
          </div>
          
          <div className="mt-8 opacity-0 animate-fadeInUp delay-300">
            <div className="flex gap-4">
              <div className="text-center">
                <div className="text-4xl font-bold heading-font">500+</div>
                <div className="text-sm opacity-90 body-font">Happy Travelers</div>
              </div>
              <div className="w-px bg-white/30"></div>
              <div className="text-center">
                <div className="text-4xl font-bold heading-font">50+</div>
                <div className="text-sm opacity-90 body-font">Destinations</div>
              </div>
              <div className="w-px bg-white/30"></div>
              <div className="text-center">
                <div className="text-4xl font-bold heading-font">10+</div>
                <div className="text-sm opacity-90 body-font">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16 -mt-20 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Contact Form */}
          <div className="lg:col-span-2 opacity-0 animate-fadeInLeft">
            <div className="glass-morphism rounded-3xl shadow-2xl p-8 md:p-12">
              <h2 className="text-4xl md:text-5xl font-black heading-font gradient-text mb-3">
                Contact Us
              </h2>
              <p className="text-gray-600 body-font mb-8">Fill in the details and we'll get back to you soon</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="opacity-0 animate-slideBlur delay-100">
                    <label className="block text-sm font-semibold text-gray-700 mb-2 body-font">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-teal-500 focus:outline-none input-focus body-font"
                      required
                    />
                  </div>

                  <div className="opacity-0 animate-slideBlur delay-200">
                    <label className="block text-sm font-semibold text-gray-700 mb-2 body-font">
                      Arrival Date & Location <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="arrivalDate"
                      value={formData.arrivalDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-teal-500 focus:outline-none input-focus body-font"
                      required
                    />
                  </div>

                  <div className="opacity-0 animate-slideBlur delay-300">
                    <label className="block text-sm font-semibold text-gray-700 mb-2 body-font">
                      Departure Date & Location <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="departureDate"
                      value={formData.departureDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-teal-500 focus:outline-none input-focus body-font"
                      required
                    />
                  </div>

                  <div className="opacity-0 animate-slideBlur delay-400">
                    <label className="block text-sm font-semibold text-gray-700 mb-2 body-font">
                      Number of Kids Travelling <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      name="kids"
                      value={formData.kids}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-teal-500 focus:outline-none input-focus body-font"
                      required
                    />
                  </div>

                  <div className="opacity-0 animate-slideBlur delay-500">
                    <label className="block text-sm font-semibold text-gray-700 mb-2 body-font">
                      Number of Adults Travelling <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      name="adults"
                      value={formData.adults}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-teal-500 focus:outline-none input-focus body-font"
                      required
                    />
                  </div>

                  <div className="opacity-0 animate-slideBlur delay-600">
                    <label className="block text-sm font-semibold text-gray-700 mb-2 body-font">
                      Places <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="places"
                      value={formData.places}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-teal-500 focus:outline-none input-focus body-font"
                      required
                    />
                  </div>
                </div>

                <div className="opacity-0 animate-slideBlur delay-700">
                  <label className="block text-sm font-semibold text-gray-700 mb-2 body-font">
                    Additional Requirements
                  </label>
                  <textarea
                    name="requirements"
                    value={formData.requirements}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-teal-500 focus:outline-none input-focus body-font resize-none"
                  ></textarea>
                </div>

                <div className="opacity-0 animate-slideBlur delay-800">
                  <button
                    type="submit"
                    className="btn-hover bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-8 py-4 rounded-xl font-bold text-lg body-font shadow-lg relative z-10"
                  >
                    Submit Form
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1 opacity-0 animate-fadeInRight">
            <div className="glass-morphism rounded-3xl shadow-2xl p-8 sticky top-8">
              <h3 className="text-3xl font-black heading-font text-teal-700 mb-6">
                Get in Touch
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-white/50 rounded-2xl card-hover">
                  <div className="text-3xl">📍</div>
                  <div className="body-font">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      183/4 Charamangalam, Muhama, Alappuzha Kerala, 688525
                    </p>
                    <p className="text-sm text-gray-700 leading-relaxed mt-3">
                      GCH, Edens Square, Panampilly nagar Cochin 36, Ernakulam, Kerala, 682036
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white/50 rounded-2xl card-hover">
                  <div className="text-3xl">📞</div>
                  <div className="body-font">
                    <p className="text-lg font-semibold text-gray-800">+1800 412 5003</p>
                    <p className="text-xs text-gray-600">24/7 Customer Support</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white/50 rounded-2xl card-hover">
                  <div className="text-3xl">✉️</div>
                  <div className="body-font">
                    <p className="text-lg font-semibold text-gray-800">info@cochingchcabs.com</p>
                    <p className="text-xs text-gray-600">We reply within 24 hours</p>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-2xl text-white">
                  <h4 className="font-bold text-xl mb-2 heading-font">Quick Tip!</h4>
                  <p className="text-sm opacity-90 body-font">
                    Book in advance during peak season (October - March) for the best deals and availability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Destinations Section */}
      <div className="py-20 px-4 bg-gradient-to-br from-white to-teal-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 opacity-0 animate-fadeInUp">
            <h2 className="text-5xl md:text-6xl font-black heading-font gradient-text mb-4">
              Popular Destinations
            </h2>
            <p className="text-xl text-gray-600 body-font">Experience the magic of God's Own Country</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((place, index) => (
              <div
                key={index}
                className="destination-card rounded-3xl overflow-hidden shadow-xl opacity-0 animate-scaleIn"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-80 group">
                  <img
                    src={place.img}
                    alt={place.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col items-center justify-end p-6 text-white">
                    <h3 className="text-3xl font-black heading-font mb-2">
                      {place.name}
                    </h3>
                    <p className="text-sm opacity-90 body-font mb-4">{place.desc}</p>
                    <button className="bg-white text-teal-700 px-6 py-2 rounded-full font-bold text-sm body-font btn-hover transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      Explore Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-gradient-to-r from-teal-600 via-cyan-600 to-teal-600 py-16 px-4 text-center text-white">
        <div className="max-w-4xl mx-auto opacity-0 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-black heading-font mb-4">
            Ready for an Adventure?
          </h2>
          <p className="text-xl body-font mb-8 opacity-90">
            Let us create unforgettable memories for you in Kerala
          </p>
          <button className="bg-white text-teal-700 px-10 py-4 rounded-full font-bold text-lg body-font btn-hover shadow-2xl">
            Start Planning Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;