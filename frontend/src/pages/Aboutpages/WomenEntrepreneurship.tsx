import React from 'react';
import { motion, Variants } from 'framer-motion';
import { CheckCircle2, Zap, ShieldCheck, Smartphone } from 'lucide-react';

const WomenEntrepreneurship: React.FC = () => {
  // Container animation - children elements-ah step-by-step ah trigger pannum
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.25, delayChildren: 0.2 }
    }
  };

  // Keela irunthu mela paranthu vara animation
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 50, damping: 20, duration: 0.8 } 
    }
  };

  // Image-ku special entrance matrum floating effect
  const imageVariants: Variants = {
    hidden: { opacity: 0, x: -100, rotate: -5 },
    visible: { 
      opacity: 1, 
      x: 0, 
      rotate: 0,
      transition: { duration: 1, ease: "easeOut" } 
    }
  };

  const features = [
    { title: "Driver Training", icon: <Zap size={20} />, desc: "Simulations and modules to enhance driving skills and customer service." },
    { title: "Digital Onboarding & Upskilling", icon: <Smartphone size={20} />, desc: "Mobile apps for seamless training, license assistance, and real-time performance tracking." },
    { title: "Safety Wearables & Panic Alerts", icon: <ShieldCheck size={20} />, desc: "Smart devices for drivers with emergency SOS buttons and real-time location sharing." }
  ];

  return (
    <section className="relative py-24 px-6 bg-white overflow-hidden">
      {/* Background Decor - Elements mithakura mari irukum */}
      <motion.div 
        animate={{ y: [0, 50, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-10 right-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl -z-10"
      />
      
      <div className="container mx-auto">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          
          {/* --- Left Column: Animated Image Card --- */}
          <motion.div variants={imageVariants} className="relative group">
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border-8 border-white">
              <motion.img 
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
                src="https://img.freepik.com/free-vector/women-entrepreneurship-concept-illustration_114360-7253.jpg" 
                alt="Women Entrepreneurship" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decoration behind image */}
            <div className="absolute -bottom-6 -left-6 w-full h-full bg-blue-600/10 rounded-[2.5rem] -z-10 transition-transform group-hover:-translate-x-4 group-hover:translate-y-4 duration-500" />
          </motion.div>

          {/* --- Right Column: Content Animation --- */}
          <div className="flex flex-col space-y-8">
            <motion.div variants={fadeInUp}>
              <span className="text-blue-600 font-bold uppercase tracking-widest text-sm bg-blue-50 px-4 py-2 rounded-full">
                Empowering the Future
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-6 leading-[1.15]">
                A Pioneering <span className="text-blue-600 italic font-serif">Women-Led</span> Transport Company
              </h2>
              <p className="text-lg text-gray-500 mt-6 font-light">
                At PRR Tours and Cabs Private Limited, we are revolutionizing the transportation industry by combining women-led leadership with cutting-edge technology.
              </p>
            </motion.div>

            {/* List items staggered entrance */}
            <div className="space-y-6">
              {features.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  whileHover={{ x: 15 }}
                  className="flex gap-5 p-6 rounded-2xl bg-gray-50/50 border border-gray-100 hover:bg-white hover:shadow-xl hover:border-blue-100 transition-all duration-300"
                >
                  <div className="bg-blue-600 text-white p-3 rounded-xl shadow-lg h-fit">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-lg uppercase tracking-tight">{item.title}</h4>
                    <p className="text-gray-500 text-sm mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default WomenEntrepreneurship;