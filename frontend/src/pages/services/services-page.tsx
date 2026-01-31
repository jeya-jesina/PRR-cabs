import React, { useState } from 'react';
import { Zap, Shield, Smartphone, Users, Truck, Settings, ArrowRight, ChevronDown, ArrowLeft } from 'lucide-react';

interface ServiceItem {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  features: string[];
  benefits: string[];
  icon: React.ReactNode;
  color: string;
  image: string;
  pricing?: string;
}

type PageType = 'home' | 'serviceDetail';

export default function ServicesPageWithRouting() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<number>(1);

  const getServiceImage = (serviceId: number): string => {
    const images: { [key: number]: string } = {
      1: 'https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=600&h=400&fit=crop',
      2: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
      3: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop',
      4: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop',
      5: 'https://images.unsplash.com/photo-1519671482677-504be0c62a64?w=600&h=400&fit=crop',
      6: 'https://images.unsplash.com/photo-1460925895917-adf4e565e6c1?w=600&h=400&fit=crop'
    };
    return images[serviceId] || images[1];
  };

  const services: ServiceItem[] = [
    {
      id: 1,
      title: "Employee Transport",
      description: "Safe, reliable, and efficient transportation solutions for your workforce",
      fullDescription: "Our employee transport service is designed to ensure safe and reliable daily commute for your workforce. We provide dedicated routes with real-time GPS tracking, professional drivers, and flexible scheduling options. Our service enhances productivity while ensuring employee safety and comfort.",
      features: ["Dedicated Routes", "GPS Tracking", "Real-time Updates", "Professional Drivers"],
      benefits: [
        "Improved employee attendance and punctuality",
        "Reduced commute stress and fatigue",
        "Cost-effective transportation management",
        "Environmental sustainability",
        "Enhanced employee satisfaction",
        "24/7 emergency support"
      ],
      icon: <Users className="w-8 h-8" />,
      color: "from-blue-600 to-blue-400",
      image: getServiceImage(1),
      pricing: "₹150-300/month per employee"
    },
    {
      id: 2,
      title: "Customized Solutions",
      description: "Tailored transport services designed for your specific needs",
      fullDescription: "We understand that every organization has unique transportation requirements. Our customized solutions are designed to meet your specific needs with flexible scheduling, route optimization, and advanced management systems. Our expert team works closely with you to create the perfect transport solution.",
      features: ["Route Planning", "Flexible Scheduling", "Advanced Systems", "24/7 Support"],
      benefits: [
        "Personalized service tailored to your needs",
        "Flexible contract terms",
        "Advanced analytics and reporting",
        "Dedicated account manager",
        "Real-time communication",
        "Scalable solutions"
      ],
      icon: <Settings className="w-8 h-8" />,
      color: "from-purple-600 to-purple-400",
      image: getServiceImage(2),
      pricing: "Custom pricing based on requirements"
    },
    {
      id: 3,
      title: "Monthly Rentals",
      description: "Budget-friendly vehicle rentals for extended periods",
      fullDescription: "Looking for cost-effective vehicle rental for extended periods? Our monthly rental service offers flexible terms with maintenance included, comprehensive insurance coverage, and easy cancellation options. Perfect for corporate needs, temporary operations, or seasonal requirements.",
      features: ["Flexible Terms", "Maintenance Included", "Insurance Covered", "Easy Cancellation"],
      benefits: [
        "No long-term commitment",
        "All maintenance included",
        "Comprehensive insurance coverage",
        "24-hour roadside assistance",
        "Flexible upgrade options",
        "Best rates in the market"
      ],
      icon: <Truck className="w-8 h-8" />,
      color: "from-green-600 to-green-400",
      image: getServiceImage(3),
      pricing: "₹2,000-5,000/month"
    },
    {
      id: 4,
      title: "Spot Rentals",
      description: "Quick on-demand transport for immediate needs",
      fullDescription: "Need a vehicle immediately? Our spot rental service provides instant booking with quick response times. Whether it's a sudden meeting, airport transfer, or urgent business need, we're available 24/7 with experienced drivers and competitive rates.",
      features: ["Instant Booking", "Quick Response", "Experienced Drivers", "Competitive Rates"],
      benefits: [
        "Booking within minutes",
        "Professional drivers",
        "Real-time vehicle tracking",
        "Transparent pricing",
        "No hidden charges",
        "Flexible payment options"
      ],
      icon: <Zap className="w-8 h-8" />,
      color: "from-orange-600 to-orange-400",
      image: getServiceImage(4),
      pricing: "₹15-25/km"
    },
    {
      id: 5,
      title: "Event Transport",
      description: "Seamless transportation for corporate and private events",
      fullDescription: "Make your events memorable with our comprehensive event transport service. From corporate conferences to wedding celebrations, we provide a large fleet, professional staff, timely service, and VIP treatment. Our experienced team ensures seamless transportation for all your guests.",
      features: ["Large Fleet", "Professional Staff", "Timely Service", "VIP Treatment"],
      benefits: [
        "Fleet capacity for large groups",
        "Professional and courteous staff",
        "Punctual and reliable service",
        "Customized routing for events",
        "Real-time coordination",
        "Dedicated event manager"
      ],
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-600 to-red-400",
      image: getServiceImage(5),
      pricing: "₹5,000-15,000 per event"
    },
    {
      id: 6,
      title: "Smart Technology",
      description: "Cutting-edge tech for transparent and efficient services",
      fullDescription: "Experience the future of transportation with our cutting-edge technology platform. Our mobile app provides real-time tracking, automated billing, advanced analytics, and comprehensive reporting. Stay connected with your transport operations at all times.",
      features: ["Mobile App", "Real-time Tracking", "Analytics", "Automated Billing"],
      benefits: [
        "Real-time vehicle location tracking",
        "Automated and transparent billing",
        "Detailed trip analytics",
        "Expense management dashboard",
        "Customized reports",
        "API integration available"
      ],
      icon: <Smartphone className="w-8 h-8" />,
      color: "from-indigo-600 to-indigo-400",
      image: getServiceImage(6),
      pricing: "Free app + optional premium features"
    }
  ];

  const activeServiceData = services.find(s => s.id === selectedServiceId) || services[0];

  const handleServiceClick = (serviceId: number) => {
    setSelectedServiceId(serviceId);
    setCurrentPage('serviceDetail');
    window.scrollTo(0, 0);
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
    window.scrollTo(0, 0);
  };

  return (
    <div className="w-full bg-white text-gray-900 overflow-hidden">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(239, 68, 68, 0.15); }
          50% { box-shadow: 0 0 40px rgba(239, 68, 68, 0.3); }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse-border {
          0%, 100% { border-color: rgba(239, 68, 68, 0.3); }
          50% { border-color: rgba(239, 68, 68, 0.8); }
        }
        
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-glow { animation: glow 2s ease-in-out infinite; }
        .animate-slideIn { animation: slideIn 0.6s ease-out; }
        .animate-fadeInUp { animation: fadeInUp 0.8s ease-out; }
        .animate-pulse-border { animation: pulse-border 2s ease-in-out infinite; }
        
        .gradient-text {
          background: linear-gradient(135deg, #ef4444, #f97316);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .shadow-light {
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }

        .shadow-card {
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .hover-shadow {
          transition: all 0.3s ease;
        }

        .hover-shadow:hover {
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
        }
      `}</style>

      {/* HOME PAGE */}
      {currentPage === 'home' && (
        <>
          {/* HERO SECTION */}
          <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-br from-white via-blue-50 to-orange-50">
            {/* Animated background */}
            <div className="absolute inset-0 z-0">
              <div className="absolute top-20 left-20 w-72 h-72 bg-red-200/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '0s' }}></div>
              <div className="absolute top-40 right-20 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
              <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-red-200/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
            </div>

            {/* Hero Content */}
            <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
              <h1 className="text-6xl md:text-8xl font-black mb-6 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                <span className="gradient-text">Services</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto mb-8 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
                Professional transport solutions tailored to your needs
              </p>
              <div className="flex justify-center gap-4 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
                <button className="px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-full font-bold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  Explore Services
                </button>
                <button className="px-8 py-4 bg-white border-2 border-gray-300 text-gray-900 rounded-full font-bold hover:bg-gray-50 transition-all duration-300">
                  Contact Us
                </button>
              </div>

              {/* Scroll indicator */}
              <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                <ChevronDown className="w-6 h-6 text-red-500" />
              </div>
            </div>
          </section>

          {/* MAIN SERVICES SECTION */}
          <section className="relative py-20 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
              {/* Section Title */}
              <div className="text-center mb-20 animate-fadeInUp">
                <h2 className="text-5xl md:text-6xl font-black mb-6">
                  Our <span className="gradient-text">Premium Services</span>
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                  Choose from our comprehensive range of transportation solutions
                </p>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                {services.map((service, idx) => (
                  <div
                    key={service.id}
                    className="group relative cursor-pointer animate-fadeInUp hover-shadow rounded-2xl"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                    onClick={() => handleServiceClick(service.id)}
                  >
                    {/* Card */}
                    <div className={`relative h-full bg-white rounded-2xl overflow-hidden transition-all duration-500 transform hover:scale-105 border-2 border-gray-200 shadow-light hover:border-red-500`}>
                      {/* Background Image */}
                      <img
                        src={service.image}
                        alt={service.title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-15"
                      />

                      {/* Gradient Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

                      {/* Content */}
                      <div className="relative p-8 h-full flex flex-col z-10">
                        {/* Icon */}
                        <div className={`mb-6 p-4 bg-gradient-to-br ${service.color} rounded-full w-fit group-hover:scale-110 transition-transform duration-300 text-white`}>
                          {service.icon}
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                          {service.title}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                          {service.description}
                        </p>

                        {/* CTA */}
                        <div className="flex items-center gap-2 text-red-600 font-semibold group-hover:gap-3 transition-all duration-300">
                          View Details <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* STATS SECTION */}
          <section className="py-20 px-4 bg-gradient-to-r from-red-50 to-orange-50 border-y border-gray-200">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  { number: "10K+", label: "Happy Clients" },
                  { number: "500+", label: "Vehicles" },
                  { number: "24/7", label: "Support" },
                  { number: "100%", label: "Reliability" }
                ].map((stat, idx) => (
                  <div key={idx} className="text-center bg-white rounded-2xl p-8 shadow-light hover:shadow-card transition-all duration-300 animate-fadeInUp" style={{ animationDelay: `${idx * 0.1}s` }}>
                    <h3 className="text-4xl font-black gradient-text mb-2">{stat.number}</h3>
                    <p className="text-gray-600 font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FOOTER */}
          <footer className="py-12 px-4 bg-gradient-to-br from-gray-900 to-gray-800 text-white border-t border-gray-700">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div>
                  <h3 className="text-2xl font-black gradient-text mb-4">PRR Tours</h3>
                  <p className="text-gray-400">Premium transportation solutions for modern businesses</p>
                </div>
                <div>
                  <h4 className="font-bold mb-4 text-white">Quick Links</h4>
                  <ul className="space-y-2 text-gray-400">
                    <li><a href="#" className="hover:text-red-400 transition">Home</a></li>
                    <li><a href="#" className="hover:text-red-400 transition">About</a></li>
                    <li><a href="#" className="hover:text-red-400 transition">Services</a></li>
                    <li><a href="#" className="hover:text-red-400 transition">Contact</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-4 text-white">Contact</h4>
                  <p className="text-gray-400 mb-2">📞 +91-7024B 48833</p>
                  <p className="text-gray-400">📧 booking@prrntabs.com</p>
                </div>
              </div>
              <div className="border-t border-gray-700 pt-8 text-center text-gray-500">
                <p>© 2025 PRR Tours & Cabs. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </>
      )}

      {/* SERVICE DETAIL PAGE */}
      {currentPage === 'serviceDetail' && (
        <>
          {/* Back Button Header */}
          <div className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-light">
            <div className="max-w-6xl mx-auto px-4 py-4">
              <button
                onClick={handleBackToHome}
                className="flex items-center gap-2 text-red-600 font-bold hover:text-red-700 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Services
              </button>
            </div>
          </div>

          {/* Hero Section */}
          <section className="relative h-96 overflow-hidden">
            <img
              src={activeServiceData.image}
              alt={activeServiceData.title}
              className="w-full h-full object-cover"
            />
            <div className={`absolute inset-0 bg-gradient-to-br ${activeServiceData.color} opacity-40`}></div>
            <div className="absolute inset-0 bg-black/20"></div>

            {/* Title Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className={`mb-4 p-6 bg-gradient-to-br ${activeServiceData.color} rounded-full w-fit mx-auto text-white`}>
                  {activeServiceData.icon}
                </div>
                <h1 className="text-5xl md:text-6xl font-black text-white drop-shadow-lg">
                  {activeServiceData.title}
                </h1>
              </div>
            </div>
          </section>

          {/* Main Content */}
          <section className="py-20 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
              {/* Overview */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
                {/* Left Content */}
                <div className="lg:col-span-2">
                  <h2 className="text-4xl font-black mb-6">Overview</h2>
                  <p className="text-gray-700 text-lg leading-relaxed mb-8">
                    {activeServiceData.fullDescription}
                  </p>

                  {/* Features */}
                  <div className="mb-12">
                    <h3 className="text-3xl font-black mb-6">Key Features</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {activeServiceData.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
                          <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${activeServiceData.color} flex-shrink-0`}></div>
                          <span className="font-medium text-gray-900">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h3 className="text-3xl font-black mb-6">Why Choose This Service?</h3>
                    <div className="space-y-4">
                      {activeServiceData.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-4 p-4 border-l-4 border-red-500 bg-red-50">
                          <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-900 font-medium">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Sidebar */}
                <div>
                  {/* Pricing Card */}
                  <div className={`bg-gradient-to-br ${activeServiceData.color} text-white rounded-2xl p-8 shadow-card mb-8 sticky top-24`}>
                    <h3 className="text-2xl font-bold mb-4">Pricing</h3>
                    <p className="text-xl font-black mb-8">{activeServiceData.pricing}</p>
                    <button className="w-full px-6 py-3 bg-white text-gray-900 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 mb-4">
                      Get Quote
                    </button>
                    <button className="w-full px-6 py-3 border-2 border-white text-white rounded-full font-bold hover:bg-white/20 transition-all duration-300">
                      Contact Sales
                    </button>
                  </div>

                  {/* Related Services */}
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <h4 className="font-bold text-lg mb-4">Other Services</h4>
                    <ul className="space-y-3">
                      {services
                        .filter(s => s.id !== activeServiceData.id)
                        .slice(0, 3)
                        .map(service => (
                          <li key={service.id}>
                            <button
                              onClick={() => handleServiceClick(service.id)}
                              className="text-left w-full p-3 rounded-lg hover:bg-white transition-colors hover:text-red-600"
                            >
                              <span className="font-medium">{service.title}</span>
                            </button>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4 bg-gradient-to-r from-red-50 to-orange-50">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-black mb-6">
                Ready to Get <span className="gradient-text">Started?</span>
              </h2>
              <p className="text-gray-700 text-lg mb-8">
                Contact our team today to discuss your transportation needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-full font-bold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  Book Service Now
                </button>
                <button className="px-8 py-4 bg-white border-2 border-gray-300 text-gray-900 rounded-full font-bold hover:bg-gray-50 transition-all duration-300">
                  Call: +91-7024B 48833
                </button>
              </div>
            </div>
          </section>

          {/* FOOTER */}
          <footer className="py-12 px-4 bg-gradient-to-br from-gray-900 to-gray-800 text-white border-t border-gray-700">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div>
                  <h3 className="text-2xl font-black gradient-text mb-4">PRR Tours</h3>
                  <p className="text-gray-400">Premium transportation solutions for modern businesses</p>
                </div>
                <div>
                  <h4 className="font-bold mb-4 text-white">Quick Links</h4>
                  <ul className="space-y-2 text-gray-400">
                    <li><button onClick={handleBackToHome} className="hover:text-red-400 transition text-left">Home</button></li>
                    <li><a href="#" className="hover:text-red-400 transition">About</a></li>
                    <li><button onClick={handleBackToHome} className="hover:text-red-400 transition text-left">Services</button></li>
                    <li><a href="#" className="hover:text-red-400 transition">Contact</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-4 text-white">Contact</h4>
                  <p className="text-gray-400 mb-2">📞 +91-7024B 48833</p>
                  <p className="text-gray-400">📧 booking@prrntabs.com</p>
                </div>
              </div>
              <div className="border-t border-gray-700 pt-8 text-center text-gray-500">
                <p>© 2025 PRR Tours & Cabs. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </>
      )}
    </div>
  );
}