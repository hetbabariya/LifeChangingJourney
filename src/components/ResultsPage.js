import React from 'react';
import { motion } from 'framer-motion';
import { Download, Trophy, BarChart3, PieChart, Target, Brain, Home, Star, Award, Users } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart as RechartsPieChart, Cell, Pie } from 'recharts';
import { mbtiTypes } from '../data/testConfig.js';

const ResultsPage = ({ results, test, onNewTest, onHome }) => {
  const { testId, testName, topResult, allResults, totalQuestions, answeredQuestions, mbtiType, scores } = results;

  const downloadResults = () => {
    let resultsText = `${testName} પરિણામો\n`;
    resultsText += '================================\n\n';
    
    if (testId === 'mbti' && mbtiType) {
      const mbtiInfo = mbtiTypes[mbtiType];
      resultsText += `🏆 તમારો MBTI પ્રકાર: ${mbtiType}\n`;
      resultsText += `📝 નામ: ${mbtiInfo.name}\n`;
      resultsText += `🌐 English: ${mbtiInfo.english}\n\n`;
      
      resultsText += '📊 પરિક્ષણ પરિણામો:\n';
      resultsText += '----------------------\n';
      allResults.forEach(result => {
        resultsText += `${result.name}: ${result.percentage}%\n`;
      });
      
      resultsText += '\n💼 વ્યક્તિત્વ વિગતો:\n';
      resultsText += '----------------------\n';
      resultsText += `ગુણધર્મ: ${mbtiInfo.qualities}\n`;
      resultsText += `શક્તિ: ${mbtiInfo.strengths}\n`;
      resultsText += `પડકાર: ${mbtiInfo.challenges}\n`;
      resultsText += `કારકિર્દી વિકલ્પો: ${mbtiInfo.careers.join(', ')}\n`;
    } else {
      resultsText += `🏆 ટોપ પરિણામ: ${topResult.name} (${topResult.percentage}%)\n\n`;
      resultsText += '📊 બધા પરિણામો:\n';
      resultsText += '----------------------\n';
      allResults.forEach(result => {
        resultsText += `${result.name}: ${result.percentage}%\n`;
      });
    }
    
    resultsText += `\n📈 સંકલન:\n`;
    resultsText += `કુલ પ્રશ્નો: ${totalQuestions}\n`;
    resultsText += `જવાબ આપેલા પ્રશ્નો: ${answeredQuestions}\n`;
    resultsText += `પૂર્ણતા: ${Math.round((answeredQuestions / totalQuestions) * 100)}%\n`;
    
    const blob = new Blob([resultsText], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${testId}-results.txt`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const getChartColors = () => {
    const colors = [
      '#3B82F6', '#EF4444', '#10B981', '#F59E0B', 
      '#8B5CF6', '#EC4899', '#06B6D4', '#84CC16',
      '#F97316', '#6366F1', '#14B8A6', '#F43F5E'
    ];
    return colors;
  };

  const chartData = allResults.map((result, index) => ({
    name: result.name,
    percentage: result.percentage,
    score: result.score,
    fill: getChartColors()[index % getChartColors().length]
  }));

  const pieData = allResults.map((result, index) => ({
    name: result.name,
    value: result.percentage,
    fill: getChartColors()[index % getChartColors().length]
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header with Test Summary */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mb-4">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800 gujarati-text">{testName} પરિણામો</h1>
            <p className="text-gray-600 mt-2">તમારા જવાબોના આધારે તમારા પરિણામો</p>
          </div>
          
          {/* Test Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center mb-6">
            <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
              <div className="text-2xl font-bold text-blue-600">{totalQuestions}</div>
              <div className="text-sm text-gray-600">કુલ પ્રશ્નો</div>
            </div>
            <div className="bg-green-50 rounded-xl p-4 border border-green-200">
              <div className="text-2xl font-bold text-green-600">{answeredQuestions}</div>
              <div className="text-sm text-gray-600">જવાબ આપેલા</div>
            </div>
            <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
              <div className="text-2xl font-bold text-purple-600">
                {Math.round((answeredQuestions / totalQuestions) * 100)}%
              </div>
              <div className="text-sm text-gray-600">પૂર્ણતા</div>
            </div>
          </div>

          {/* Download Button */}
          <div className="flex justify-center">
            <motion.button
              onClick={downloadResults}
              className="btn-primary flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-5 h-5" />
              <span>પરિણામો ડાઉનલોડ કરો</span>
            </motion.button>
          </div>
        </div>

        {/* Main Result Display */}
        {testId === 'mbti' && mbtiType ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-lg p-8 mb-6 border border-gray-100"
          >
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mb-6">
                <Trophy className="w-12 h-12 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-gray-800 gujarati-text mb-3">
                તમારો MBTI પ્રકાર: {mbtiType}
              </h2>
              <p className="text-2xl text-gray-600 mb-2">{mbtiTypes[mbtiType].english}</p>
              <p className="text-xl text-gray-700 gujarati-text">{mbtiTypes[mbtiType].name}</p>
            </div>

            {/* MBTI Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                  <h3 className="font-semibold text-blue-800 mb-2 text-lg">ગુણધર્મ (Qualities)</h3>
                  <p className="text-gray-700 gujarati-text">{mbtiTypes[mbtiType].qualities}</p>
                </div>
                <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                  <h3 className="font-semibold text-green-800 mb-2 text-lg">શક્તિ (Strengths)</h3>
                  <p className="text-gray-700 gujarati-text">{mbtiTypes[mbtiType].strengths}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-yellow-50 rounded-xl p-4 border border-yellow-200">
                  <h3 className="font-semibold text-yellow-800 mb-2 text-lg">પડકાર (Challenges)</h3>
                  <p className="text-gray-700 gujarati-text">{mbtiTypes[mbtiType].challenges}</p>
                </div>
                <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
                  <h3 className="font-semibold text-purple-800 mb-2 text-lg">કારકિર્દી વિકલ્પો (Career Options)</h3>
                  <ul className="text-gray-700">
                    {mbtiTypes[mbtiType].careers.map((career, index) => (
                      <li key={index} className="mb-1 flex items-center">
                        <Star className="w-4 h-4 text-purple-500 mr-2" />
                        {career}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-lg p-8 mb-6 border border-gray-100"
          >
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mb-6">
                <Trophy className="w-12 h-12 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-gray-800 gujarati-text mb-3">
                ટોપ પરિણામ
              </h2>
              <p className="text-2xl text-gray-600 mb-2">{topResult.name}</p>
              <div className="text-5xl font-bold text-primary mt-3">{topResult.percentage}%</div>
            </div>
          </motion.div>
        )}

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Bar Chart */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
          >
            <div className="flex items-center space-x-2 mb-4">
              <BarChart3 className="w-6 h-6 text-primary-500" />
              <h3 className="text-xl font-semibold text-gray-800">પરિણામોનો બાર ચાર્ટ</h3>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} />
                <YAxis />
                <Tooltip formatter={(value) => [`${value}%`, 'ટકાવારી']} />
                <Bar dataKey="percentage" fill="#3B82F6" />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Pie Chart */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
          >
            <div className="flex items-center space-x-2 mb-4">
              <PieChart className="w-6 h-6 text-primary-500" />
              <h3 className="text-xl font-semibold text-gray-800">પરિણામોનો પાઈ ચાર્ટ</h3>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <RechartsPieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value}%`, 'ટકાવારી']} />
              </RechartsPieChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* All Results Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-lg p-6 mb-6 border border-gray-100"
        >
          <div className="flex items-center space-x-2 mb-6">
            <Target className="w-6 h-6 text-primary-500" />
            <h3 className="text-xl font-semibold text-gray-800">બધા પરિણામો</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {allResults.map((result, index) => (
              <div
                key={result.dimension}
                className={`bg-gray-50 rounded-xl p-4 hover:shadow-md transition-shadow border ${
                  index === 0 ? 'border-primary-200 bg-primary-50' : 'border-gray-200'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-gray-800 gujarati-text">{result.name}</h4>
                  <span className={`text-lg font-bold ${
                    index === 0 ? 'text-primary-600' : 'text-primary-500'
                  }`}>
                    {result.percentage}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                  <div
                    className="bg-gradient-to-r from-primary-500 to-secondary-500 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${result.percentage}%` }}
                  />
                </div>
                {result.score && (
                  <p className="text-sm text-gray-600">સ્કોર: {result.score}</p>
                )}
                {index === 0 && (
                  <div className="flex items-center mt-2">
                    <Star className="w-4 h-4 text-yellow-500 mr-1" />
                    <span className="text-xs text-yellow-600 font-medium">ટોપ પરિણામ</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
          <motion.button
            onClick={onNewTest}
            className="btn-secondary flex items-center space-x-2 w-full sm:w-auto justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Brain className="w-5 h-5" />
            <span>ફરીથી પરીક્ષણ આપો</span>
          </motion.button>
          
          <motion.button
            onClick={onHome}
            className="btn-primary flex items-center space-x-2 w-full sm:w-auto justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Home className="w-5 h-5" />
            <span>ઘરે જાઓ</span>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
