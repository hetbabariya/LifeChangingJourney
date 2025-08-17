import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';
import { testQuestions } from '../data/questions.js';
import { availableTests, testDimensions } from '../data/testConfig.js';

const QuizInterface = ({ test, onComplete, onBack }) => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [selectedOption, setSelectedOption] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const sections = test.sections || [];
  const currentSection = sections[currentSectionIndex];
  
  // Get questions for current section
  const getCurrentQuestions = () => {
    if (test.id === 'mbti') {
      return testQuestions[test.id]?.[currentSection?.id] || [];
    }
    // For other tests, use the original structure
    return testQuestions[test.id]?.[currentSection?.id] || [];
  };

  const currentQuestions = getCurrentQuestions();
  const currentQuestion = currentQuestions[currentQuestionIndex];

  // Calculate total questions across all sections
  const totalQuestions = sections.reduce((total, section) => {
    if (test.id === 'mbti') {
      return total + (testQuestions[test.id]?.[section.id]?.length || 0);
    }
    return total + (testQuestions[test.id]?.[section.id]?.length || 0);
  }, 0);

  const answeredQuestions = Object.keys(answers).length;
  const progress = (answeredQuestions / totalQuestions) * 100;

  const handleOptionSelect = (optionIndex) => {
    setSelectedOption(optionIndex);
    
    const questionKey = `${currentSectionIndex}_${currentQuestionIndex}`;
    setAnswers(prev => ({
      ...prev,
      [questionKey]: optionIndex
    }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < currentQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOption(null);
    } else if (currentSectionIndex < sections.length - 1) {
      setCurrentSectionIndex(prev => prev + 1);
      setCurrentQuestionIndex(0);
      setSelectedOption(null);
    } else {
      // Test completed
      completeTest();
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
      setSelectedOption(null);
    } else if (currentSectionIndex > 0) {
      setCurrentSectionIndex(prev => prev - 1);
      const prevSection = sections[currentSectionIndex - 1];
      const prevQuestions = getCurrentQuestions();
      setCurrentQuestionIndex(prevQuestions.length - 1);
      setSelectedOption(null);
    }
  };

  const completeTest = () => {
    setIsLoading(true);
    
    // Calculate results based on test type
    const results = calculateResults();
    
    setTimeout(() => {
      setIsLoading(false);
      onComplete(results);
    }, 1000);
  };

  const calculateResults = () => {
    if (test.id === 'mbti') {
      return calculateMBTIResults();
    } else if (test.id === 'bigfive') {
      return calculateBigFiveResults();
    } else if (test.id === 'intelligence') {
      return calculateIntelligenceResults();
    } else if (test.id === 'riasec') {
      return calculateRIASECResults();
    } else if (test.id === 'svs') {
      return calculateSVSResults();
    } else if (test.id === 'decision') {
      return calculateDecisionResults();
    } else if (test.id === 'vark') {
      return calculateVARKResults();
    } else if (test.id === 'life-situation') {
      return calculateLifeSituationResults();
    }
    // For other tests, implement their specific logic
    return calculateGenericResults();
  };

  const calculateMBTIResults = () => {
    const scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
    
    // Calculate scores based on answers
    Object.keys(answers).forEach(questionKey => {
      const [sectionIndex, questionIndex] = questionKey.split('_').map(Number);
      const section = sections[sectionIndex];
      const questions = testQuestions[test.id]?.[section.id] || [];
      const question = questions[questionIndex];
      const selectedOptionIndex = answers[questionKey];
      const selectedOption = question.options[selectedOptionIndex];
      
      if (selectedOption && selectedOption.dimension) {
        scores[selectedOption.dimension] += selectedOption.weight || 3;
      }
    });

    // Determine MBTI type
    const mbtiType = [
      scores.E >= scores.I ? 'E' : 'I',
      scores.S >= scores.N ? 'S' : 'N',
      scores.T >= scores.F ? 'T' : 'F',
      scores.J >= scores.P ? 'J' : 'P'
    ].join('');

    // Calculate percentages for each dimension
    const results = [];
    const dimensionPairs = [
      { dim1: 'E', dim2: 'I', name: 'બહિર્મુખ/આંતર્મુખ' },
      { dim1: 'S', dim2: 'N', name: 'અનુભવ/કલ્પના' },
      { dim1: 'T', dim2: 'F', name: 'વિચાર/લાગણી' },
      { dim1: 'J', dim2: 'P', name: 'આયોજન/ઓપન' }
    ];

    dimensionPairs.forEach(pair => {
      const score1 = scores[pair.dim1] || 0;
      const score2 = scores[pair.dim2] || 0;
      const total = score1 + score2;
      
      let percentage1 = 50;
      let percentage2 = 50;
      
      if (total > 0) {
        percentage1 = Math.round((score1 / total) * 100);
        percentage2 = 100 - percentage1;
      }

      results.push({
        dimension: pair.dim1,
        name: testDimensions[test.id]?.[pair.dim1]?.gujarati || pair.dim1,
        percentage: percentage1,
        score: score1
      });

      results.push({
        dimension: pair.dim2,
        name: testDimensions[test.id]?.[pair.dim2]?.gujarati || pair.dim2,
        percentage: percentage2,
        score: score2
      });
    });

    // Sort by percentage to get top results
    results.sort((a, b) => b.percentage - a.percentage);

    return {
      testId: test.id,
      testName: test.name,
      mbtiType,
      topResult: results[0],
      allResults: results,
      totalQuestions,
      answeredQuestions,
      scores
    };
  };

  const calculateBigFiveResults = () => {
    const scores = { openness: 0, conscientiousness: 0, extraversion: 0, agreeableness: 0, neuroticism: 0 };
    
    Object.keys(answers).forEach(questionKey => {
      const [sectionIndex, questionIndex] = questionKey.split('_').map(Number);
      const section = sections[sectionIndex];
      const questions = testQuestions[test.id]?.[section.id] || [];
      const question = questions[questionIndex];
      const selectedOptionIndex = answers[questionKey];
      const selectedOption = question.options[selectedOptionIndex];
      
      if (selectedOption && selectedOption.score) {
        scores[section.id] += selectedOption.score;
      }
    });

    const maxScore = 32; // 8 questions * 4 points each
    const results = Object.keys(scores).map(dimension => ({
      dimension,
      name: testDimensions[test.id]?.[dimension]?.gujarati || dimension,
      percentage: Math.round((scores[dimension] / maxScore) * 100),
      score: scores[dimension]
    }));

    results.sort((a, b) => b.percentage - a.percentage);

    return {
      testId: test.id,
      testName: test.name,
      topResult: results[0],
      allResults: results,
      totalQuestions,
      answeredQuestions,
      scores
    };
  };

  const calculateIntelligenceResults = () => {
    const scores = { musical: 0, logical: 0, intrapersonal: 0, bodily: 0, naturalistic: 0, visual: 0, linguistic: 0, interpersonal: 0, existential: 0 };
    
    Object.keys(answers).forEach(questionKey => {
      const [sectionIndex, questionIndex] = questionKey.split('_').map(Number);
      const section = sections[sectionIndex];
      const questions = testQuestions[test.id]?.[section.id] || [];
      const question = questions[questionIndex];
      const selectedOptionIndex = answers[questionKey];
      const selectedOption = question.options[selectedOptionIndex];
      
      if (selectedOption && selectedOption.score) {
        scores[section.id] += selectedOption.score;
      }
    });

    const maxScore = 32; // 8 questions * 4 points each
    const results = Object.keys(scores).map(dimension => ({
      dimension,
      name: testDimensions[test.id]?.[dimension]?.gujarati || dimension,
      percentage: Math.round((scores[dimension] / maxScore) * 100),
      score: scores[dimension]
    }));

    results.sort((a, b) => b.percentage - a.percentage);

    return {
      testId: test.id,
      testName: test.name,
      topResult: results[0],
      allResults: results,
      totalQuestions,
      answeredQuestions,
      scores
    };
  };

  const calculateRIASECResults = () => {
    const scores = { realistic: 0, investigative: 0, artistic: 0, social: 0, enterprising: 0, conventional: 0 };
    
    Object.keys(answers).forEach(questionKey => {
      const [sectionIndex, questionIndex] = questionKey.split('_').map(Number);
      const section = sections[sectionIndex];
      const questions = testQuestions[test.id]?.[section.id] || [];
      const question = questions[questionIndex];
      const selectedOptionIndex = answers[questionKey];
      const selectedOption = question.options[selectedOptionIndex];
      
      if (selectedOption && selectedOption.score) {
        scores[section.id] += selectedOption.score;
      }
    });

    const maxScore = 40; // 10 questions * 4 points each
    const results = Object.keys(scores).map(dimension => ({
      dimension,
      name: testDimensions[test.id]?.[dimension]?.gujarati || dimension,
      percentage: Math.round((scores[dimension] / maxScore) * 100),
      score: scores[dimension]
    }));

    results.sort((a, b) => b.percentage - a.percentage);

    return {
      testId: test.id,
      testName: test.name,
      topResult: results[0],
      allResults: results,
      totalQuestions,
      answeredQuestions,
      scores
    };
  };

  const calculateSVSResults = () => {
    const scores = { 'self-direction': 0, achievement: 0, hedonism: 0, stimulation: 0, benevolence: 0, conformity: 0, tradition: 0, security: 0, power: 0, universalism: 0 };
    
    Object.keys(answers).forEach(questionKey => {
      const [sectionIndex, questionIndex] = questionKey.split('_').map(Number);
      const section = sections[sectionIndex];
      const questions = testQuestions[test.id]?.[section.id] || [];
      const question = questions[questionIndex];
      const selectedOptionIndex = answers[questionKey];
      const selectedOption = question.options[selectedOptionIndex];
      
      if (selectedOption && selectedOption.score) {
        scores[section.id] += selectedOption.score;
      }
    });

    const maxScore = 20; // 5 questions * 4 points each
    const results = Object.keys(scores).map(dimension => ({
      dimension,
      name: testDimensions[test.id]?.[dimension]?.gujarati || dimension,
      percentage: Math.round((scores[dimension] / maxScore) * 100),
      score: scores[dimension]
    }));

    results.sort((a, b) => b.percentage - a.percentage);

    return {
      testId: test.id,
      testName: test.name,
      topResult: results[0],
      allResults: results,
      totalQuestions,
      answeredQuestions,
      scores
    };
  };

  const calculateDecisionResults = () => {
    const scores = { rational: 0, intuitive: 0, dependent: 0, avoidant: 0, spontaneous: 0 };
    
    Object.keys(answers).forEach(questionKey => {
      const [sectionIndex, questionIndex] = questionKey.split('_').map(Number);
      const section = sections[sectionIndex];
      const questions = testQuestions[test.id]?.[section.id] || [];
      const question = questions[questionIndex];
      const selectedOptionIndex = answers[questionKey];
      const selectedOption = question.options[selectedOptionIndex];
      
      if (selectedOption && selectedOption.score) {
        scores[section.id] += selectedOption.score;
      }
    });

    const maxScore = 20; // 5 questions * 4 points each
    const results = Object.keys(scores).map(dimension => ({
      dimension,
      name: testDimensions[test.id]?.[dimension]?.gujarati || dimension,
      percentage: Math.round((scores[dimension] / maxScore) * 100),
      score: scores[dimension]
    }));

    results.sort((a, b) => b.percentage - a.percentage);

    return {
      testId: test.id,
      testName: test.name,
      topResult: results[0],
      allResults: results,
      totalQuestions,
      answeredQuestions,
      scores
    };
  };

  const calculateVARKResults = () => {
    const scores = { visual: 0, auditory: 0, reading: 0, kinesthetic: 0 };
    
    Object.keys(answers).forEach(questionKey => {
      const [sectionIndex, questionIndex] = questionKey.split('_').map(Number);
      const section = sections[sectionIndex];
      const questions = testQuestions[test.id]?.[section.id] || [];
      const question = questions[questionIndex];
      const selectedOptionIndex = answers[questionKey];
      const selectedOption = question.options[selectedOptionIndex];
      
      if (selectedOption && selectedOption.score) {
        scores[section.id] += selectedOption.score;
      }
    });

    const maxScore = 20; // 5 questions * 4 points each
    const results = Object.keys(scores).map(dimension => ({
      dimension,
      name: testDimensions[test.id]?.[dimension]?.gujarati || dimension,
      percentage: Math.round((scores[dimension] / maxScore) * 100),
      score: scores[dimension]
    }));

    results.sort((a, b) => b.percentage - a.percentage);

    return {
      testId: test.id,
      testName: test.name,
      topResult: results[0],
      allResults: results,
      totalQuestions,
      answeredQuestions,
      scores
    };
  };

  const calculateLifeSituationResults = () => {
    const scores = { social: 0, economic: 0, geographical: 0 };
    
    Object.keys(answers).forEach(questionKey => {
      const [sectionIndex, questionIndex] = questionKey.split('_').map(Number);
      const section = sections[sectionIndex];
      const questions = testQuestions[test.id]?.[section.id] || [];
      const question = questions[questionIndex];
      const selectedOptionIndex = answers[questionKey];
      const selectedOption = question.options[selectedOptionIndex];
      
      if (selectedOption && selectedOption.score) {
        scores[section.id] += selectedOption.score;
      }
    });

    const maxScore = 20; // 5 questions * 4 points each
    const results = Object.keys(scores).map(dimension => ({
      dimension,
      name: testDimensions[test.id]?.[dimension]?.gujarati || dimension,
      percentage: Math.round((scores[dimension] / maxScore) * 100),
      score: scores[dimension]
    }));

    results.sort((a, b) => b.percentage - a.percentage);

    return {
      testId: test.id,
      testName: test.name,
      topResult: results[0],
      allResults: results,
      totalQuestions,
      answeredQuestions,
      scores
    };
  };

  const calculateGenericResults = () => {
    // Generic calculation for other tests
    const scores = {};
    
    Object.keys(answers).forEach(questionKey => {
      const [sectionIndex, questionIndex] = questionKey.split('_').map(Number);
      const section = sections[sectionIndex];
      const questions = testQuestions[test.id]?.[section.id] || [];
      const question = questions[questionIndex];
      const selectedOptionIndex = answers[questionKey];
      const selectedOption = question.options[selectedOptionIndex];
      
      if (selectedOption && selectedOption.score) {
        scores[selectedOption.score] = (scores[selectedOption.score] || 0) + 1;
      }
    });

    const results = Object.keys(scores).map(key => ({
      dimension: key,
      name: testDimensions[test.id]?.[key]?.gujarati || key,
      percentage: Math.round((scores[key] / answeredQuestions) * 100),
      score: scores[key]
    }));

    results.sort((a, b) => b.percentage - a.percentage);

    return {
      testId: test.id,
      testName: test.name,
      topResult: results[0],
      allResults: results,
      totalQuestions,
      answeredQuestions,
      scores
    };
  };

  const canGoNext = selectedOption !== null;
  const canGoPrevious = currentSectionIndex > 0 || currentQuestionIndex > 0;

  if (!currentQuestion) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600">પ્રશ્નો લોડ થઈ રહ્યા છે...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-2 sm:p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-4 md:p-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 space-y-3 md:space-y-0">
            <div className="flex items-center space-x-3 md:space-x-4">
              {onBack && (
                <motion.button
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  onClick={onBack}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ChevronLeft className="w-6 h-6 text-gray-600" />
                </motion.button>
              )}
              <div className="min-w-0 flex-1">
                <h1 className="text-xl md:text-2xl font-bold text-gray-800 gujarati-text break-words">
                  {test.name}
                </h1>
                <p className="text-sm md:text-base text-gray-600 break-words">
                  {currentSection?.gujarati || currentSection?.name}
                </p>
              </div>
            </div>
            <div className="text-left md:text-right">
              <p className="text-xs md:text-sm text-gray-500">પ્રશ્ન {currentQuestionIndex + 1} / {currentQuestions.length}</p>
              <p className="text-xs md:text-sm text-gray-500">સેક્શન {currentSectionIndex + 1} / {sections.length}</p>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-3 mb-4 overflow-hidden shadow-inner">
            <motion.div
              className="bg-gradient-to-r from-primary-500 to-secondary-500 h-3 rounded-full relative"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {/* Progress Bar Shine Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
                animate={{
                  x: ["-100%", "100%"]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </motion.div>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:justify-between text-xs sm:text-sm text-gray-600 space-y-2 sm:space-y-0">
            <span className="flex items-center space-x-2">
              <motion.div
                className="w-2 h-2 rounded-full bg-green-500"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <span className="break-words">
                {answeredQuestions} / {totalQuestions} પ્રશ્નો પૂરા
              </span>
            </span>
            <span className="font-medium text-primary-600">{Math.round(progress)}% પૂર્ણ</span>
          </div>
        </div>

        {/* Question */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${currentSectionIndex}-${currentQuestionIndex}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-6 gujarati-text leading-relaxed break-words">
                {currentQuestion.question}
              </h2>

              {/* Options */}
              <div className="space-y-3 md:space-y-4">
                {currentQuestion.options.map((option, index) => (
                  <motion.div
                    key={index}
                    className={`option-card cursor-pointer transition-all duration-300 ${
                      selectedOption === index ? 'selected-option' : ''
                    }`}
                    onClick={() => handleOptionSelect(index)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-start space-x-3 md:space-x-4">
                      <div className={`w-5 h-5 md:w-6 md:h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 flex-shrink-0 ${
                        selectedOption === index 
                          ? 'border-primary-500 bg-primary-500 shadow-lg' 
                          : 'border-gray-300'
                      }`}>
                        {selectedOption === index && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.2 }}
                          >
                            <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-white" />
                          </motion.div>
                        )}
                      </div>
                      <span className={`text-gray-800 gujarati-text transition-colors duration-300 text-sm md:text-base leading-relaxed break-words flex-1 ${
                        selectedOption === index ? 'text-primary-700 font-medium' : ''
                      }`}>
                        {option.text}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
          <motion.button
            className={`btn-secondary flex items-center space-x-2 w-full sm:w-auto justify-center ${
              !canGoPrevious ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            onClick={handlePrevious}
            disabled={!canGoPrevious}
            whileHover={canGoPrevious ? { scale: 1.05 } : {}}
            whileTap={canGoPrevious ? { scale: 0.95 } : {}}
          >
            <ChevronLeft className="w-5 h-5" />
            <span>પાછળ</span>
          </motion.button>

          <motion.button
            className={`btn-primary flex items-center space-x-2 w-full sm:w-auto justify-center ${
              !canGoNext ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            onClick={handleNext}
            disabled={!canGoNext}
            whileHover={canGoNext ? { scale: 1.05 } : {}}
            whileTap={canGoNext ? { scale: 0.95 } : {}}
          >
            <span>
              {currentSectionIndex === sections.length - 1 && 
               currentQuestionIndex === currentQuestions.length - 1 
                ? 'પરિણામ જુઓ' 
                : 'આગળ'}
            </span>
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </div>
      </div>

      {/* Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-gray-600 gujarati-text">પરિણામો ગણી રહ્યા છીએ...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizInterface;
