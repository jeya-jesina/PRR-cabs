import React from 'react';
import { CheckCircle2, ShieldCheck, UserCheck, Heart, Star, Phone, Mail, MapPin } from 'lucide-react';
import WomenEntrepreneurship from './WomenEntrepreneurship';

const About: React.FC = () => {
  return (
    <div className="font-sans text-gray-800 bg-white">
      {/* --- Hero Section --- */}
     {/* --- Enhanced Hero Section --- */}
<section className="relative h-[500px] flex items-center justify-center overflow-hidden">
  {/* Background Image with Zoom Effect */}
  <img 
    src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=2070" 
    alt="Red Car Hero" 
    className="absolute inset-0 w-full h-full object-cover scale-105 animate-pulse-slow brightness-[0.4]"
  />

  {/* Content Container */}
  <div className="relative z-10 text-center px-4">
    <span className="text-red-500 font-semibold tracking-widest uppercase mb-2 block animate-bounce">
      Get to know us
    </span>
    <h1 className="text-6xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
      Our <span className="text-red-600">Story</span>
    </h1>
    <p className="max-w-2xl mx-auto text-gray-200 text-lg mb-8 leading-relaxed">
      We are more than just a dealership. We are a community of car enthusiasts 
      dedicated to bringing you the best driving experience.
    </p>
    
   
  </div>

  {/* Bottom Gradient Fade */}
  {/* <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div> */}
</section>

      {/* --- Women Entrepreneurship Section --- */}
      <section className="container mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div className="rounded-2xl overflow-hidden shadow-xl">
          <img 
            src="https://img.freepik.com/free-vector/women-entrepreneurship-concept-illustration_114360-7253.jpg" 
            alt="Women Entrepreneurship" 
            className="w-full h-auto"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">A Pioneering Women-Led Transport Company with Tech-Driven Excellence</h2>
          <p className="text-gray-600 mb-6">
            At PRR Tours and Cabs Private Limited, we are revolutionizing the transportation industry by combining women-led leadership with cutting-edge technology. Our commitment to gender equality, safety, and innovation sets us apart as a forward-thinking mobility solution.
          </p>
          <h3 className="text-xl font-semibold mb-4 text-blue-900">Empowering Women Through Opportunity & Technology</h3>
          <p className="text-gray-600 mb-4">We are breaking stereotypes by training and employing women drivers, supported by advanced tech solutions that enhance their efficiency and safety. Our initiatives include:</p>
          <ul className="space-y-4">
            {[
              { title: "Driver Training", desc: " simulations and modules to enhance driving skills and customer service." },
              { title: "Digital Onboarding & Upskilling:", desc: "Mobile apps for seamless training, license assistance, and real-time performance tracking." },
              { title: "Safety Wearables & Panic Alerts:", desc: "Smart devices for drivers with emergency SOS buttons and real-time location sharing." }
            ].map((item, idx) => (
              <li key={idx} className="flex gap-3">
                <CheckCircle2 className="text-blue-600 flex-shrink-0" size={24} />
                <div>
                  <span className="font-bold">{item.title}:</span> <span className="text-gray-600">{item.desc}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      {/* <WomenEntrepreneurship/> */}

      {/* --- Smart Fleet Section --- */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">Smart Fleet Management for a Safer Ride</h2>
            <p className="text-gray-600 mb-6">We leverage next-gen technologies to ensure reliability and security:</p>
            <div className="space-y-4 mb-8">
              <p className="flex items-center gap-2"><CheckCircle2 className="text-blue-600" size={20}/> <strong>GPS & Real-Time Tracking:</strong> Live vehicle monitoring.</p>
              <p className="flex items-center gap-2"><CheckCircle2 className="text-blue-600" size={20}/> <strong>Women-Centric Safety:</strong> In-app emergency buttons.</p>
              <p className="flex items-center gap-2"><CheckCircle2 className="text-blue-600" size={20}/> <strong>Predictive Maintenance:</strong> Minimize breakdowns.</p>
            </div>
            <h2 className="text-2xl font-bold mb-4">Customer-Centric Digital Experience</h2>
            <div className="space-y-4">
              <p className="flex items-center gap-2"><CheckCircle2 className="text-blue-600" size={20}/> <strong>User-Friendly App:</strong> Easy booking and cashless payments.</p>
              <p className="flex items-center gap-2"><CheckCircle2 className="text-blue-600" size={20}/> <strong>24/7 Support:</strong> Multi-lingual assistance.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-1/2 h-80 rounded-full overflow-hidden border-8 border-white shadow-lg">
                <img src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=500" className="h-full w-full object-cover" alt="Fleet 1" />
            </div>
            <div className="w-1/2 h-80 rounded-full overflow-hidden border-8 border-white shadow-lg mt-12">
                <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=500" className="h-full w-full object-cover" alt="Fleet 2" />
            </div>
          </div>
        </div>
      </section>

      {/* --- Why Choose Lady Drivers --- */}
      <section className="py-16 container mx-auto px-6 text-center">
        <p className="text-red-600 font-semibold mb-2">Prr Tours And Cabs Pvt Limited</p>
        <h2 className="text-3xl font-bold mb-12">Why Choose Lady Drivers?</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { icon: <ShieldCheck size={40}/>, title: "Safety & Trust", text: "Women drivers are statistically more cautious and responsible on the road." },
            { icon: <UserCheck size={40}/>, title: "Professionalism", text: "Our lady drivers undergo rigorous training and background verification." },
            { icon: <Heart size={40}/>, title: "Empowering Women", text: "Helping break stereotypes and creating sustainable employment." },
            { icon: <Star size={40}/>, title: "Brand Image", text: "Partnering with us shows a strong message of gender equality." }
          ].map((card, idx) => (
            <div key={idx} className="p-8 bg-blue-50 rounded-xl hover:shadow-md transition-shadow">
              <div className="text-blue-600 flex justify-center mb-4">{card.icon}</div>
              <h4 className="font-bold mb-2">{card.title}</h4>
              <p className="text-sm text-gray-600">{card.text}</p>
            </div>
          ))}
        </div>
      </section>

     
    </div>
  );
};

export default About;