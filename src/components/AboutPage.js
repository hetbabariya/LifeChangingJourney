import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Users, Target, Heart, Phone, MapPin, Mail, BookOpen, Award, Shield, Clock } from 'lucide-react';

const AboutPage = ({ onBack }) => {
  const features = [
    {
      icon: Brain,
      title: "વૈજ્ઞાનિક પદ્ધતિ",
      description: "મનોવિજ્ઞાનના સિદ્ધાંતો પર આધારિત પરીક્ષણો"
    },
    {
      icon: Users,
      title: "ગુજરાતી ભાષા",
      description: "ભારતીય વિદ્યાર્થીઓ માટે સરળ અને સમજવામાં સરળ"
    },
    {
      icon: Target,
      title: "કારકિર્દી માર્ગદર્શન",
      description: "તમારા ભવિષ્ય માટે યોગ્ય ક્ષેત્રની પસંદગી"
    },
    {
      icon: Heart,
      title: "વ્યક્તિગત વિકાસ",
      description: "તમારી વ્યક્તિત્વ અને ક્ષમતાઓનું મૂલ્યાંકન"
    },
    {
      icon: BookOpen,
      title: "8 વિવિધ પરીક્ષણો",
      description: "MBTI, Big Five, RIASEC, SVS અને વધુ"
    },
    {
      icon: Award,
      title: "વિશ્વસનીય પરિણામો",
      description: "ઉચ્ચ ગુણવતા અને ચોકસાઈ સાથે"
    }
  ];

  const contactInfo = [
    {
      icon: Phone,
      title: "ફોન નંબર",
      value: "+91 6354571342",
      link: "tel:+916354571342"
    },
    {
      icon: MapPin,
      title: "સરનામું",
      value: "ABC Circle, Office No. 402",
      link: null
    },
    {
      icon: Mail,
      title: "ઈમેઇલ",
      value: "career@assessment.com",
      link: "mailto:career@assessment.com"
    },
    {
      icon: Clock,
      title: "કામના કલાકો",
      value: "સોમ-શુક્ર: 9:00 AM - 6:00 PM",
      link: null
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-3 sm:p-4 md:p-6 mb-4 sm:mb-6 md:mb-8">
          <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 mb-3 sm:mb-4 md:mb-6">
            {onBack && (
              <motion.button
                className="p-1.5 sm:p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 flex-shrink-0"
                onClick={onBack}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </motion.button>
            )}
            <div className="min-w-0 flex-1">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 gujarati-text break-words leading-tight">
                આપણા વિશે
              </h1>
              <p className="text-gray-600 text-xs sm:text-sm md:text-base break-words">About Us</p>
            </div>
          </div>
          
          <div className="prose max-w-none">
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-3 sm:mb-4 md:mb-6 gujarati-text break-words">
              કારકિર્દી મૂલ્યાંકન સિસ્ટમ એક વ્યાપક મનોવૈજ્ઞાનિક પરીક્ષણ પ્લેટફોર્મ છે જે વિદ્યાર્થીઓ અને વ્યવસાયિકોને 
              તેમની કારકિર્દી માટે યોગ્ય માર્ગ પસંદ કરવામાં મદદ કરે છે. આ સિસ્ટમ આઠ વિવિધ પ્રકારના પરીક્ષણો દ્વારા 
              વ્યક્તિની વ્યક્તિત્વ, બુદ્ધિમતા, રુચિઓ અને કારકિર્દી માટેની તૈયારીનું મૂલ્યાંકન કરે છે.
            </p>
            
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-3 sm:mb-4 md:mb-6 gujarati-text break-words">
              અમારો ધ્યેય ભારતીય વિદ્યાર્થીઓને તેમની માતૃભાષામાં ગુણવતાયુક્ત કારકિર્દી માર્ગદર્શન પ્રદાન કરવાનો છે. 
              આ પરીક્ષણો વૈજ્ઞાનિક પદ્ધતિઓ પર આધારિત છે અને વિશ્વભરમાં માન્યતા પ્રાપ્ત છે.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 gujarati-text">
                {feature.title}
              </h3>
              <p className="text-gray-600 gujarati-text leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 gujarati-text text-center">સંપર્ક માહિતી</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactInfo.map((contact, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                  <contact.icon className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 gujarati-text">{contact.title}</h3>
                  {contact.link ? (
                    <a 
                      href={contact.link}
                      className="text-primary-600 hover:text-primary-700 transition-colors duration-200"
                    >
                      {contact.value}
                    </a>
                  ) : (
                    <p className="text-gray-600">{contact.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl shadow-lg p-8 mt-8 text-white">
          <div className="text-center">
            <Shield className="w-16 h-16 mx-auto mb-4 text-white opacity-80" />
            <h2 className="text-2xl font-bold mb-4 gujarati-text">અમારો ધ્યેય</h2>
            <p className="text-lg leading-relaxed gujarati-text opacity-90">
              ભારતીય વિદ્યાર્થીઓને તેમની માતૃભાષામાં ગુણવતાયુક્ત કારકિર્દી માર્ગદર્શન પ્રદાન કરવું અને 
              તેમને તેમના ભવિષ્ય માટે યોગ્ય નિર્ણય લેવામાં મદદ કરવી.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
