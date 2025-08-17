import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HomePage from './components/HomePage';
import TestSelection from './components/TestSelection';
import QuizInterface from './components/QuizInterface';
import ResultsPage from './components/ResultsPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import Navbar from './components/Navbar';
import './index.css';

function App() {
  const [currentScreen, setCurrentScreen] = useState('home');
  const [selectedTest, setSelectedTest] = useState(null);
  const [testResults, setTestResults] = useState(null);
  const [testData, setTestData] = useState(null);

  const navigateTo = (screen) => {
    setCurrentScreen(screen);
  };

  const startTest = (test) => {
    setSelectedTest(test);
    setCurrentScreen('quiz');
  };

  const completeTest = (results) => {
    setTestResults(results);
    setCurrentScreen('results');
  };

  const resetApp = () => {
    setCurrentScreen('home');
    setSelectedTest(null);
    setTestResults(null);
    setTestData(null);
  };

  const screenVariants = {
    initial: { opacity: 0, x: 100 },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: -100 }
  };

  const screenTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50">
      {/* Navbar */}
      <Navbar 
        currentScreen={currentScreen}
        onNavigate={navigateTo}
        testName={selectedTest?.name}
      />
      
      <AnimatePresence mode="wait">
        {currentScreen === 'home' && (
          <motion.div
            key="home"
            initial="initial"
            animate="in"
            exit="out"
            variants={screenVariants}
            transition={screenTransition}
          >
            <HomePage onStart={() => navigateTo('selection')} />
          </motion.div>
        )}

        {currentScreen === 'selection' && (
          <motion.div
            key="selection"
            initial="initial"
            animate="in"
            exit="out"
            variants={screenVariants}
            transition={screenTransition}
          >
            <TestSelection 
              onTestSelect={startTest}
              onBack={() => navigateTo('home')}
            />
          </motion.div>
        )}

        {currentScreen === 'quiz' && selectedTest && (
          <motion.div
            key="quiz"
            initial="initial"
            animate="in"
            exit="out"
            variants={screenVariants}
            transition={screenTransition}
          >
            <QuizInterface 
              test={selectedTest}
              onComplete={completeTest}
              onBack={() => navigateTo('selection')}
            />
          </motion.div>
        )}

        {currentScreen === 'results' && testResults && (
          <motion.div
            key="results"
            initial="initial"
            animate="in"
            exit="out"
            variants={screenVariants}
            transition={screenTransition}
          >
            <ResultsPage 
              results={testResults}
              test={selectedTest}
              onNewTest={() => navigateTo('selection')}
              onHome={() => resetApp()}
            />
          </motion.div>
        )}

        {currentScreen === 'about' && (
          <motion.div
            key="about"
            initial="initial"
            animate="in"
            exit="out"
            variants={screenVariants}
            transition={screenTransition}
          >
            <AboutPage onBack={() => navigateTo('home')} />
          </motion.div>
        )}

        {currentScreen === 'contact' && (
          <motion.div
            key="contact"
            initial="initial"
            animate="in"
            exit="out"
            variants={screenVariants}
            transition={screenTransition}
          >
            <ContactPage onBack={() => navigateTo('home')} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
