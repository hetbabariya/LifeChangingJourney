import React from 'react';
import { motion } from 'framer-motion';
import { Brain, ArrowRight, Users, Target, Heart } from 'lucide-react';

const HomePage = ({ onStart }) => {
  const features = [
    {
      icon: Brain,
      title: "8 વિશેષ પરીક્ષણો",
      description: "MBTI, Big Five, RIASEC અને વધુ"
    },
    {
      icon: Users,
      title: "ગુજરાતી ભાષામાં",
      description: "સરળ અને સમજવામાં સરળ"
    },
    {
      icon: Target,
      title: "વિશ્વસનીય પરિણામો",
      description: "વૈજ્ઞાનિક પદ્ધતિઓથી"
    },
    {
      icon: Heart,
      title: "કારકિર્દી માર્ગદર્શન",
      description: "તમારા ભવિષ્ય માટે"
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-2 sm:px-3 md:px-4 lg:px-6 py-4 sm:py-6 md:py-8 lg:py-12">
      <div className="max-w-6xl mx-auto text-center w-full">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 sm:mb-8 md:mb-12 lg:mb-16"
        >
          <motion.h1 
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-gradient mb-2 sm:mb-3 md:mb-4 lg:mb-6 gujarati-text break-words leading-tight px-1 sm:px-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            જીવન પરિવર્તન સફર
          </motion.h1>
          
          <motion.h2 
            className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-gray-700 mb-3 sm:mb-4 md:mb-6 lg:mb-8 break-words px-2 sm:px-3 md:px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Career Assessment System
          </motion.h2>
          
          <motion.p 
            className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-600 max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed mb-4 sm:mb-6 md:mb-8 lg:mb-12 break-words px-2 sm:px-3 md:px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            તમારી વ્યક્તિત્વ, બુદ્ધિમતા, રુચિઓ અને કારકિર્દી માટેની તમારી તૈયારીનું મૂલ્યાંકન કરો. 
            આઠ વિવિધ મનોવૈજ્ઞાનિક પરીક્ષણો દ્વારા તમારા ભવિષ્ય માટે યોગ્ય માર્ગ શોધો.
          </motion.p>

          <motion.button
            onClick={onStart}
            className="btn-primary text-sm sm:text-base md:text-lg lg:text-xl px-4 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-4 md:py-5 lg:py-6 inline-flex items-center gap-2 sm:gap-3 break-words w-full sm:w-auto justify-center touch-manipulation active:scale-95"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <span className="whitespace-nowrap">પરીક્ષણ શરૂ કરો</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0" />
          </motion.button>
        </motion.div>

        {/* Features Section */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="card card-h-md card-p-md card-rounded-md card-shadow-sm text-center touch-manipulation active:scale-95"
              whileHover={{ y: -3, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + index * 0.1, duration: 0.6 }}
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 mx-auto mb-2 sm:mb-3 md:mb-4 lg:mb-5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center flex-shrink-0">
                <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-white" />
              </div>
              <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-800 mb-1 sm:mb-2 gujarati-text break-words leading-tight">
                {feature.title}
              </h3>
              <p className="text-gray-600 gujarati-text text-xs sm:text-sm md:text-base break-words leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div 
          className="mt-6 sm:mt-8 md:mt-12 lg:mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          <p className="text-gray-500 text-xs sm:text-sm md:text-base break-words px-2 sm:px-3 md:px-4">
            💡 ટિપ: તમે કોઈપણ સમયે પરીક્ષણ બંધ કરી શકો છો અને પાછળથી ફરીથી શરૂ કરી શકો છો
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;
