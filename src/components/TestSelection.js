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
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          className="flex items-center justify-between mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            પાછળ જાઓ
          </button>
          
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gradient gujarati-text">
              પરીક્ષણ પસંદ કરો
            </h1>
            <p className="text-gray-600 mt-2">
              Select a test to begin your assessment
            </p>
          </div>
          
          <div className="w-20"></div> {/* Spacer for centering */}
        </motion.div>

        {/* Test Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {availableTests.map((test, index) => (
            <motion.div
              key={test.id}
              variants={cardVariants}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.98 }}
              className={`test-card cursor-pointer transition-all duration-300 ${
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
                className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-3xl"
                style={{ 
                  backgroundColor: `${test.color}20`,
                  color: test.color
                }}
              >
                {iconMap[test.icon] || '📋'}
              </div>

              {/* Test Info */}
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-800 gujarati-text">
                  {test.name}
                </h3>
                
                <p className="text-sm text-gray-600 leading-relaxed">
                  {test.description}
                </p>

                {/* Test Stats */}
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <HelpCircle className="w-4 h-4" />
                    <span>{test.questions} પ્રશ્નો</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{test.duration}</span>
                  </div>
                </div>

                {/* Sections Info */}
                <div className="text-xs text-gray-500">
                  <span className="font-medium">વિભાગો:</span> {test.sections.length}
                </div>

                {/* Selection Indicator */}
                {selectedTest?.id === test.id && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute top-4 right-4 w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center"
                  >
                    <CheckCircle className="w-4 h-4 text-white" />
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Instructions */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="bg-white rounded-xl p-6 shadow-soft max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-gray-800 mb-3 gujarati-text">
              💡 પરીક્ષણ વિશે
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed gujarati-text">
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
