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
    alert('Thank you for your inquiry! We will contact you soon.');
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const destinations = [
    { name: "Kochi", img: "https://images.unsplash.com/photo-1583422409516-2895a77efded?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Queen of the Arabian Sea" },
    { name: "Munnar", img: "https://images.unsplash.com/photo-1627389955925-6e7a21d02609?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Hill Station Paradise" },
    { name: "Thekkady", img: "https://images.unsplash.com/photo-1599910725903-a2d1f1c92476?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Wildlife & Spice Gardens" },
    { name: "Alleppey", img: "https://images.unsplash.com/photo-1597145125736-06b7e2928e77?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Venice of the East" },
    { name: "Varkala", img: "https://images.unsplash.com/photo-1578303512597-81d582a8b090?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Cliff Beach Beauty" },
    { name: "Kanyakumari", img: "https://images.unsplash.com/photo-1609331838525-3d8c4b5a80a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Sunrise & Sunset Point" },
  ];

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Poppins', sans-serif;
        }

        .gradient-bg {
          background: linear-gradient(135deg, #0c4b33 0%, #166145 50%, #1e794c 100%);
        }

        .card-shadow {
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
        }

        .card-hover:hover {
          transform: translateY(-5px);
          transition: transform 0.3s ease;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
        }

        .input-focus:focus {
          border-color: #0c4b33;
          box-shadow: 0 0 0 3px rgba(12, 75, 51, 0.1);
        }

        .btn-primary {
          background: linear-gradient(to right, #0c4b33, #166145);
          transition: all 0.3s ease;
        }

        .btn-primary:hover {
          background: linear-gradient(to right, #093826, #0c4b33);
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(12, 75, 51, 0.2);
        }

        .border-accent {
          border-color: #0c4b33;
        }

        .text-accent {
          color: #0c4b33;
        }

        .bg-accent {
          background-color: #0c4b33;
        }

        .destination-overlay {
          background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, transparent 100%);
        }
      `}</style>

    

      {/* Hero Section */}
      <div className="relative h-[400px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        </div>
        
        <div className="relative h-full flex flex-col justify-center px-4">
          <div className="max-w-7xl mx-auto w-full">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                Plan Your Kerala Journey
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Experience God's Own Country with our premium travel services. Custom itineraries, comfortable cabs, and unforgettable memories.
              </p>
              <div className="flex gap-4 text-white">
                <div className="text-center bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-sm">Happy Travelers</div>
                </div>
                <div className="text-center bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">50+</div>
                  <div className="text-sm">Destinations</div>
                </div>
                <div className="text-center bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">10+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="card-shadow rounded-2xl p-8 bg-white">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Travel Inquiry Form</h2>
                <p className="text-gray-600">Fill in your travel details and we'll create the perfect itinerary for you</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none input-focus"
                      required
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Number of Adults *
                    </label>
                    <input
                      type="number"
                      name="adults"
                      value={formData.adults}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none input-focus"
                      required
                      placeholder="Number of adults"
                      min="1"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Number of Kids
                    </label>
                    <input
                      type="number"
                      name="kids"
                      value={formData.kids}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none input-focus"
                      placeholder="Number of children"
                      min="0"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Arrival Date *
                    </label>
                    <input
                      type="date"
                      name="arrivalDate"
                      value={formData.arrivalDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none input-focus"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Departure Date *
                    </label>
                    <input
                      type="date"
                      name="departureDate"
                      value={formData.departureDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none input-focus"
                      required
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Places to Visit *
                    </label>
                    <input
                      type="text"
                      name="places"
                      value={formData.places}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none input-focus"
                      required
                      placeholder="e.g., Kochi, Munnar, Alleppey"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Special Requirements
                  </label>
                  <textarea
                    name="requirements"
                    value={formData.requirements}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none input-focus resize-none"
                    placeholder="Any special requests, dietary requirements, accessibility needs, etc."
                  ></textarea>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="btn-primary text-white px-8 py-4 rounded-lg font-semibold text-lg"
                  >
                    Submit Travel Inquiry
                  </button>
                  <p className="text-sm text-gray-500 mt-3">
                    We'll contact you within 24 hours with a custom itinerary and quote.
                  </p>
                </div>
              </form>
            </div>

            {/* Services Section */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white card-shadow rounded-xl p-6 card-hover">
                <div className="text-3xl mb-4">🚗</div>
                <h3 className="font-bold text-lg mb-2">Premium Cabs</h3>
                <p className="text-gray-600">Well-maintained AC & non-AC vehicles with professional drivers</p>
              </div>
              <div className="bg-white card-shadow rounded-xl p-6 card-hover">
                <div className="text-3xl mb-4">🗺️</div>
                <h3 className="font-bold text-lg mb-2">Custom Itineraries</h3>
                <p className="text-gray-600">Personalized travel plans based on your preferences and budget</p>
              </div>
              <div className="bg-white card-shadow rounded-xl p-6 card-hover">
                <div className="text-3xl mb-4">🏨</div>
                <h3 className="font-bold text-lg mb-2">Hotel Bookings</h3>
                <p className="text-gray-600">Best deals on accommodations from budget to luxury</p>
              </div>
            </div>
          </div>

          {/* Contact Info Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="bg-gradient-to-b from-green-900 to-green-800 rounded-2xl text-white p-8 mb-6">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="text-2xl">📍</div>
                    <div>
                      <h4 className="font-semibold mb-2">Office Locations</h4>
                      <p className="text-sm text-green-100 leading-relaxed">
                        183/4 Charamangalam, Muhama, Alappuzha, Kerala 688525
                      </p>
                      <p className="text-sm text-green-100 leading-relaxed mt-2">
                        GCH, Edens Square, Panampilly Nagar, Cochin 682036
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="text-2xl">📞</div>
                    <div>
                      <h4 className="font-semibold">Call Us</h4>
                      <p className="text-lg font-bold mt-1">+1800 412 5003</p>
                      <p className="text-sm text-green-100">24/7 Customer Support</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="text-2xl">✉️</div>
                    <div>
                      <h4 className="font-semibold">Email Us</h4>
                      <p className="text-lg font-bold mt-1">info@cochingchcabs.com</p>
                      <p className="text-sm text-green-100">Response within 24 hours</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-green-700">
                  <h4 className="font-bold mb-3">Why Choose Us?</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <span className="text-green-300">✓</span> GPS-equipped vehicles
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-300">✓</span> Multi-lingual drivers
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-300">✓</span> 24/7 road assistance
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-300">✓</span> Flexible payment options
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                <h4 className="font-bold text-lg mb-3">📅 Peak Season Alert</h4>
                <p className="text-gray-700 mb-4">
                  October to March is peak tourist season in Kerala. We recommend booking at least 30 days in advance for the best rates and availability.
                </p>
                <div className="text-sm text-gray-600">
                  <span className="font-bold">Current Availability:</span> Good
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Destinations Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Explore Kerala's Beauty
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From tranquil backwaters to misty hills, discover the diverse landscapes of God's Own Country
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((place, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden card-shadow card-hover group"
              >
                <div className="relative h-64">
                  <img
                    src={place.img}
                    alt={place.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 destination-overlay flex flex-col justify-end p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {place.name}
                    </h3>
                    <p className="text-white/90 mb-4">{place.desc}</p>
                    <button className="self-start bg-white text-green-900 px-5 py-2 rounded-full font-semibold text-sm hover:bg-green-50 transition">
                      Explore Package
                    </button>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 text-green-900 px-3 py-1 rounded-full text-sm font-semibold">
                    Popular
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-900 transition">
              View All Destinations →
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      
    </div>
  );
};

export default ContactPage;