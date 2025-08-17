import React from 'react';
import { motion } from 'framer-motion';
import { Home, BookOpen, BarChart3, Users } from 'lucide-react';

const Navbar = ({ currentScreen, onNavigate, testName }) => {
  const getNavTitle = () => {
    switch (currentScreen) {
      case 'home':
        return 'કારકિર્દી પરીક્ષણ';
      case 'selection':
        return 'પરીક્ષણ પસંદ કરો';
      case 'quiz':
        return testName || 'પરીક્ષણ';
      case 'results':
        return 'પરિણામો';
      default:
        return 'કારકિર્દી પરીક્ષણ';
    }
  };

  const getNavIcon = () => {
    switch (currentScreen) {
      case 'home':
        return <Home className="w-5 h-5" />;
      case 'selection':
        return <BookOpen className="w-5 h-5" />;
      case 'quiz':
        return <BarChart3 className="w-5 h-5" />;
      case 'results':
        return <Users className="w-5 h-5" />;
      default:
        return <Home className="w-5 h-5" />;
    }
  };

  return (
    <motion.nav 
      className="bg-white shadow-lg border-b border-gray-100 sticky top-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <motion.div 
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => onNavigate('home')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800 gujarati-text">કારકિર્દી પરીક્ષણ</h1>
              <p className="text-xs text-gray-500">Career Assessment</p>
            </div>
          </motion.div>

          {/* Navigation Title */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
              {getNavIcon()}
            </div>
            <h2 className="text-lg font-semibold text-gray-700 gujarati-text">
              {getNavTitle()}
            </h2>
          </div>

          {/* Navigation Menu */}
          <div className="flex items-center space-x-4">
            {currentScreen !== 'home' && (
              <motion.button
                className="btn-outline text-sm py-2 px-4"
                onClick={() => onNavigate('home')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Home className="w-4 h-4 mr-2" />
                ઘર
              </motion.button>
            )}
            
            {currentScreen === 'quiz' && (
              <motion.button
                className="btn-secondary text-sm py-2 px-4"
                onClick={() => onNavigate('selection')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <BookOpen className="w-4 h-4 mr-2" />
                બધા પરીક્ષણો
              </motion.button>
            )}

            {/* About Link */}
            <motion.button
              className="text-gray-600 hover:text-primary-600 text-sm font-medium transition-colors duration-200"
              onClick={() => onNavigate('about')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              આપણા વિશે
            </motion.button>

            {/* Contact Link */}
            <motion.button
              className="text-gray-600 hover:text-primary-600 text-sm font-medium transition-colors duration-200"
              onClick={() => onNavigate('contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              સંપર્ક
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
