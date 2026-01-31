import React, { useState } from 'react';
import { motion, AnimatePresence ,Variants} from 'framer-motion';

import { 
  Car, ArrowRight, CheckCircle2, Star, 
  Users, Zap, DollarSign, MapPin, Calendar, 
  Clock, Phone, Mail, User, MessageSquare 
} from 'lucide-react';

interface BookingFormData {
  name: string;
  email: string;
  date: string;
  time: string;
  pickup: string;
  drop: string;
  phone: string;
  message: string;
}

const BookNow: React.FC = () => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '', email: '', date: '', time: '', 
    pickup: '', drop: '', phone: '', message: '',
  });
  
  const [activeStep, setActiveStep] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking Details:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  // Animation Variants
  const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

const scaleIn: Variants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 120,
    },
  },
};

  const features = [
    { icon: <Zap className="w-6 h-6" />, title: "Instant Booking", color: "from-yellow-500 to-orange-500" },
    { icon: <DollarSign className="w-6 h-6" />, title: "Best Prices", color: "from-green-500 to-emerald-500" },
    { icon: <Users className="w-6 h-6" />, title: "Expert Drivers", color: "from-blue-500 to-cyan-500" },
    { icon: <Star className="w-6 h-6" />, title: "5★ Rated", color: "from-purple-500 to-pink-500" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute top-0 -right-4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-12 lg:py-20">
        {/* Hero Section */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 150, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 mb-6"
          >
            <Car className="w-5 h-5 text-red-500" />
            <span className="text-red-400 font-semibold text-sm">Premium Cab Service</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Book Your Perfect
            </span>
            <br />
            <span className="bg-gradient-to-r from-red-500 via-red-400 to-orange-400 bg-clip-text text-transparent">
              Ride Today
            </span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Experience luxury, comfort, and reliability with PRR Cabs. Your journey begins here.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16 max-w-6xl mx-auto"
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={scaleIn}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center hover:border-white/20 transition-all">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.color} mb-4`}>
                  {feature.icon}
                </div>
                <h3 className="font-bold text-white">{feature.title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Booking Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative">
            {/* Glowing Border Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity" />
            
            <div className="relative bg-slate-900/90 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden">
              {/* Form Header */}
              <div className="bg-gradient-to-r from-red-600/20 to-purple-600/20 border-b border-white/10 px-8 py-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-1">Complete Your Booking</h2>
                    <p className="text-gray-400 text-sm">Fill in the details to reserve your ride</p>
                  </div>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="hidden md:block"
                  >
                    <Car className="w-12 h-12 text-red-500" />
                  </motion.div>
                </div>
              </div>

              {/* Form Content */}
              <form onSubmit={handleSubmit} className="p-8 md:p-10">
                <div className="space-y-8">
                  {/* Personal Information Section */}
                  <FormSection title="Personal Information" icon={<User className="w-5 h-5" />}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FloatingInput
                        label="Full Name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        icon={<User className="w-5 h-5" />}
                        placeholder="John Doe"
                      />
                      <FloatingInput
                        label="Email Address"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        icon={<Mail className="w-5 h-5" />}
                        placeholder="john@example.com"
                      />
                    </div>
                    <FloatingInput
                      label="Phone Number"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      icon={<Phone className="w-5 h-5" />}
                      placeholder="+91 98765 43210"
                    />
                  </FormSection>

                  {/* Trip Details Section */}
                  <FormSection title="Trip Details" icon={<MapPin className="w-5 h-5" />}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FloatingInput
                        label="Pickup Date"
                        name="date"
                        type="date"
                        value={formData.date}
                        onChange={handleChange}
                        icon={<Calendar className="w-5 h-5" />}
                      />
                      <FloatingInput
                        label="Pickup Time"
                        name="time"
                        type="time"
                        value={formData.time}
                        onChange={handleChange}
                        icon={<Clock className="w-5 h-5" />}
                      />
                      <FloatingInput
                        label="Pickup Location"
                        name="pickup"
                        type="text"
                        value={formData.pickup}
                        onChange={handleChange}
                        icon={<MapPin className="w-5 h-5" />}
                        placeholder="Enter pickup address"
                      />
                      <FloatingInput
                        label="Drop Location"
                        name="drop"
                        type="text"
                        value={formData.drop}
                        onChange={handleChange}
                        icon={<MapPin className="w-5 h-5" />}
                        placeholder="Enter destination"
                      />
                    </div>
                  </FormSection>

                  {/* Additional Notes */}
                  <FormSection title="Additional Notes" icon={<MessageSquare className="w-5 h-5" />}>
                    <div className="relative">
                      <textarea
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Any special requirements or preferences?"
                        className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all resize-none text-white placeholder:text-gray-500"
                      />
                    </div>
                  </FormSection>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative w-full group overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl" />
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative flex items-center justify-center gap-3 py-5 text-white font-bold text-lg">
                      <CheckCircle2 className="w-6 h-6" />
                      <span>Confirm Booking</span>
                      <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.button>
                </div>
              </form>
            </div>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="flex flex-wrap items-center justify-center gap-8 text-gray-400 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span>Secure Payment</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span>Verified Drivers</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span>No Hidden Charges</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              className="bg-slate-900 border border-white/20 rounded-3xl p-8 max-w-md w-full text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              >
                <CheckCircle2 className="w-20 h-20 text-green-500 mx-auto mb-4" />
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-2">Booking Confirmed!</h3>
              <p className="text-gray-400">Your ride has been successfully booked. We'll send you a confirmation shortly.</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CSS for animations */}
      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

// Form Section Component
const FormSection: React.FC<{ title: string; icon: React.ReactNode; children: React.ReactNode }> = ({ 
  title, 
  icon, 
  children 
}) => (
  <div className="space-y-4">
    <div className="flex items-center gap-3">
      <div className="p-2 bg-red-500/10 rounded-lg text-red-500">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-white">{title}</h3>
    </div>
    <div className="space-y-6 pl-0 md:pl-11">
      {children}
    </div>
  </div>
);

// Floating Input Component with Animation
const FloatingInput: React.FC<any> = ({ label, icon, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative">
      <motion.div
        animate={{
          scale: isFocused || props.value ? 1 : 0.95,
        }}
        className="relative group"
      >
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-red-500 transition-colors z-10">
          {icon}
        </div>
        <input
          {...props}
          required
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="w-full pl-12 pr-5 py-4 bg-white/5 border border-white/10 rounded-2xl 
                   focus:ring-2 focus:ring-red-500 focus:border-transparent focus:bg-white/10
                   outline-none transition-all text-white placeholder:text-gray-500
                   hover:border-white/20"
        />
        <label className="absolute left-12 top-0 -translate-y-1/2 px-2 bg-slate-900 text-xs font-medium text-gray-400 pointer-events-none">
          {label}
        </label>
      </motion.div>
    </div>
  );
};

export default BookNow;