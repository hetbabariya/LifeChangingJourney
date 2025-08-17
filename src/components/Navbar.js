import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, BookOpen, BarChart3, Users, Menu, X } from 'lucide-react';

const Navbar = ({ currentScreen, onNavigate, testName }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        return <Home className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5" />;
      case 'selection':
        return <BookOpen className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5" />;
      case 'quiz':
        return <BarChart3 className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5" />;
      case 'results':
        return <Users className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5" />;
      default:
        return <Home className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5" />;
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavigation = (screen) => {
    onNavigate(screen);
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav 
      className="bg-white shadow-lg border-b border-gray-100 sticky top-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-3 md:px-4 lg:px-6">
        <div className="flex justify-between items-center h-11 sm:h-12 md:h-14 lg:h-16">
          {/* Logo/Brand */}
          <motion.div 
            className="flex items-center space-x-1 sm:space-x-2 md:space-x-3 cursor-pointer min-w-0 flex-1"
            onClick={() => handleNavigation('home')}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-md sm:rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0">
              <BookOpen className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-6 lg:h-6 text-white" />
            </div>
            <div className="min-w-0 flex-1 hidden sm:block">
              <h1 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold text-gray-800 gujarati-text break-words leading-tight">
                કારકિર્દી પરીક્ષણ
              </h1>
              <p className="text-xs text-gray-500 break-words hidden md:block">Career Assessment</p>
            </div>
          </motion.div>

          {/* Navigation Title - Hidden on mobile */}
          <div className="hidden sm:flex items-center space-x-1 sm:space-x-2 min-w-0 flex-1 justify-center">
            <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-sm sm:rounded-md md:rounded-lg flex items-center justify-center flex-shrink-0">
              {getNavIcon()}
            </div>
            <h2 className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-gray-700 gujarati-text break-words leading-tight">
              {getNavTitle()}
            </h2>
          </div>

          {/* Desktop Navigation Menu */}
          <div className="hidden md:flex items-center space-x-1 sm:space-x-2 md:space-x-4 min-w-0 flex-1 justify-end">
            {currentScreen !== 'home' && (
              <motion.button
                className="btn-outline text-xs sm:text-sm py-1 sm:py-1.5 md:py-2 px-1.5 sm:px-2 md:px-4 whitespace-nowrap touch-manipulation active:scale-95"
                onClick={() => handleNavigation('home')}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.97 }}
              >
                <Home className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 mr-1 sm:mr-1.5 md:mr-2 flex-shrink-0" />
                <span className="break-words hidden sm:inline">ઘર</span>
              </motion.button>
            )}
            
            {currentScreen === 'quiz' && (
              <motion.button
                className="btn-secondary text-xs sm:text-sm py-1 sm:py-1.5 md:py-2 px-1.5 sm:px-2 md:px-4 whitespace-nowrap touch-manipulation active:scale-95"
                onClick={() => handleNavigation('selection')}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.97 }}
              >
                <BookOpen className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 mr-1 sm:mr-1.5 md:mr-2 flex-shrink-0" />
                <span className="break-words hidden sm:inline">બધા પરીક્ષણો</span>
              </motion.button>
            )}

            {/* About Link */}
            <motion.button
              className="text-gray-600 hover:text-primary-600 text-xs sm:text-sm font-medium transition-colors duration-200 whitespace-nowrap touch-manipulation active:scale-95"
              onClick={() => handleNavigation('about')}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="break-words hidden sm:inline">આપણા વિશે</span>
              <span className="break-words sm:hidden">આપણે</span>
            </motion.button>

            {/* Contact Link */}
            <motion.button
              className="text-gray-600 hover:text-primary-600 text-xs sm:text-sm font-medium transition-colors duration-200 whitespace-nowrap touch-manipulation active:scale-95"
              onClick={() => handleNavigation('contact')}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="break-words hidden sm:inline">સંપર્ક</span>
              <span className="break-words sm:hidden">સંપર્ક</span>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <motion.button
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 touch-manipulation"
              onClick={toggleMobileMenu}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-gray-600" />
              ) : (
                <Menu className="w-5 h-5 text-gray-600" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white border-t border-gray-100 shadow-lg overflow-hidden"
          >
            <div className="px-4 py-3 space-y-2">
              {/* Current Screen Info */}
              <div className="flex items-center space-x-2 pb-3 border-b border-gray-100">
                <div className="w-6 h-6 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-md flex items-center justify-center">
                  {getNavIcon()}
                </div>
                <h3 className="text-sm font-semibold text-gray-700 gujarati-text">
                  {getNavTitle()}
                </h3>
              </div>

              {/* Navigation Links */}
              <div className="space-y-1">
                {currentScreen !== 'home' && (
                  <motion.button
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-sm text-gray-700 gujarati-text touch-manipulation"
                    onClick={() => handleNavigation('home')}
                    whileHover={{ backgroundColor: '#f9fafb' }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center space-x-2">
                      <Home className="w-4 h-4 text-gray-500" />
                      <span>ઘર</span>
                    </div>
                  </motion.button>
                )}

                {currentScreen === 'quiz' && (
                  <motion.button
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-sm text-gray-700 gujarati-text touch-manipulation"
                    onClick={() => handleNavigation('selection')}
                    whileHover={{ backgroundColor: '#f9fafb' }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center space-x-2">
                      <BookOpen className="w-4 h-4 text-gray-500" />
                      <span>બધા પરીક્ષણો</span>
                    </div>
                  </motion.button>
                )}

                <motion.button
                  className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-sm text-gray-700 gujarati-text touch-manipulation"
                  onClick={() => handleNavigation('about')}
                  whileHover={{ backgroundColor: '#f9fafb' }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-gray-500" />
                    <span>આપણા વિશે</span>
                  </div>
                </motion.button>

                <motion.button
                  className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-sm text-gray-700 gujarati-text touch-manipulation"
                  onClick={() => handleNavigation('contact')}
                  whileHover={{ backgroundColor: '#f9fafb' }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center space-x-2">
                    <BarChart3 className="w-4 h-4 text-gray-500" />
                    <span>સંપર્ક</span>
                  </div>
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
