import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, HelpCircle, CheckCircle } from 'lucide-react';
import { availableTests } from '../data/testConfig';

// Icon mapping for test types
const iconMap = {
  Brain: '🧠',
  Lightbulb: '💡',
  User: '👤',
  Briefcase: '💼',
  Heart: '❤️',
  Target: '🎯',
  BookOpen: '📖',
  Map: '🗺️'
};

const TestSelection = ({ onTestSelect, onBack }) => {
  const [selectedTest, setSelectedTest] = useState(null);

  const handleTestSelect = (test) => {
    setSelectedTest(test);
    setTimeout(() => {
      onTestSelect(test);
    }, 300);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen py-3 sm:py-4 md:py-6 lg:py-8 px-2 sm:px-3 md:px-4 lg:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-between mb-6 sm:mb-8 md:mb-10 lg:mb-12 gap-2 sm:gap-3 md:gap-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <button
            onClick={onBack}
            className="flex items-center gap-1.5 sm:gap-2 text-gray-600 hover:text-gray-800 transition-colors order-1 sm:order-none text-xs sm:text-sm md:text-base touch-manipulation active:scale-95"
          >
            <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 flex-shrink-0" />
            <span className="whitespace-nowrap">પાછળ જાઓ</span>
          </button>
          
          <div className="text-center order-2 sm:order-none px-1 sm:px-2 md:px-4">
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gradient gujarati-text break-words leading-tight">
              પરીક્ષણ પસંદ કરો
            </h1>
            <p className="text-gray-600 mt-1 sm:mt-1.5 md:mt-2 text-xs sm:text-sm md:text-base break-words">
              Select a test to begin your assessment
            </p>
          </div>
          
          <div className="w-12 sm:w-16 md:w-20 order-3 sm:order-none"></div> {/* Spacer for centering */}
        </motion.div>

        {/* Test Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6"
        >
          {availableTests.map((test, index) => (
            <motion.div
              key={test.id}
              variants={cardVariants}
              whileHover={{ 
                y: -2, 
                scale: 1.01,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.97 }}
              className={`test-card touch-manipulation active:scale-95 ${
                selectedTest?.id === test.id ? 'ring-4 ring-primary-500 ring-opacity-50' : ''
              }`}
              onClick={() => handleTestSelect(test)}
              style={{ 
                borderColor: selectedTest?.id === test.id ? test.color : undefined,
                background: selectedTest?.id === test.id ? `linear-gradient(135deg, ${test.color}20, ${test.color}10)` : undefined
              }}
            >
              {/* Test Icon */}
              <div 
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-18 mx-auto mb-3 sm:mb-4 md:mb-5 lg:mb-6 rounded-full flex items-center justify-center text-xl sm:text-2xl md:text-3xl lg:text-4xl flex-shrink-0"
                style={{ 
                  backgroundColor: `${test.color}20`,
                  color: test.color
                }}
              >
                {iconMap[test.icon] || '📋'}
              </div>

              {/* Test Info */}
              <div className="space-y-2 sm:space-y-2.5 md:space-y-3 lg:space-y-4 min-w-0 flex-1 flex flex-col">
                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-800 gujarati-text break-words leading-tight flex-shrink-0">
                  {test.name}
                </h3>
                
                <p className="text-gray-600 gujarati-text text-xs sm:text-sm md:text-base break-words leading-relaxed flex-1">
                  {test.description}
                </p>

                {/* Test Stats */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs sm:text-sm text-gray-500 min-w-0 mt-auto space-y-1 sm:space-y-0">
                  <div className="flex items-center gap-1 min-w-0 flex-1">
                    <HelpCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 flex-shrink-0" />
                    <span className="break-words text-xs sm:text-sm">{test.questions} પ્રશ્નો</span>
                  </div>
                  <div className="flex items-center gap-1 min-w-0 flex-1 sm:justify-end">
                    <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 flex-shrink-0" />
                    <span className="break-words text-xs sm:text-sm">{test.duration}</span>
                  </div>
                </div>

                {/* Sections Info */}
                <div className="text-xs sm:text-sm text-gray-500 break-words flex-shrink-0">
                  <span className="font-medium">વિભાગો:</span> {test.sections.length}
                </div>

                {/* Selection Indicator */}
                {selectedTest?.id === test.id && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute top-2 sm:top-3 md:top-4 lg:top-5 right-2 sm:right-3 md:right-4 lg:right-5 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 bg-primary-500 rounded-full flex items-center justify-center z-10"
                  >
                    <CheckCircle className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 text-white" />
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Instructions */}
        <motion.div 
          className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 lg:p-6 shadow-soft max-w-2xl mx-auto">
            <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 mb-2 sm:mb-2.5 md:mb-3 gujarati-text break-words">
              💡 પરીક્ષણ વિશે
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed gujarati-text break-words">
              દરેક પરીક્ષણ તમારી વ્યક્તિત્વ અને કારકિર્દી માટેની તમારી તૈયારીનું મૂલ્યાંકન કરે છે. 
              તમે એક સમયે એક પરીક્ષણ લઈ શકો છો અને પરિણામો તમારા ભવિષ્ય માટે માર્ગદર્શન આપશે.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TestSelection;
