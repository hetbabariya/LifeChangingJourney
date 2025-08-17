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
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-gradient mb-6 gujarati-text"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            જીવન પરિવર્તન સફર
          </motion.h1>
          
          <motion.h2 
            className="text-2xl md:text-3xl font-semibold text-gray-700 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Career Assessment System
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            તમારી વ્યક્તિત્વ, બુદ્ધિમતા, રુચિઓ અને કારકિર્દી માટેની તમારી તૈયારીનું મૂલ્યાંકન કરો. 
            આઠ વિવિધ મનોવૈજ્ઞાનિક પરીક્ષણો દ્વારા તમારા ભવિષ્ય માટે યોગ્ય માર્ગ શોધો.
          </motion.p>

          <motion.button
            onClick={onStart}
            className="btn-primary text-lg px-8 py-4 inline-flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            પરીક્ષણ શરૂ કરો
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>

        {/* Features Section */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="card p-6 text-center"
              whileHover={{ y: -10, scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + index * 0.1, duration: 0.6 }}
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 gujarati-text">
                {feature.title}
              </h3>
              <p className="text-gray-600 gujarati-text">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          <p className="text-gray-500 text-sm">
            💡 ટિપ: તમે કોઈપણ સમયે પરીક્ષણ બંધ કરી શકો છો અને પાછળથી ફરીથી શરૂ કરી શકો છો
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;
