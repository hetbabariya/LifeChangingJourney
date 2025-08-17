import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Mail, Clock, MessageSquare, Send, ArrowLeft } from 'lucide-react';

const ContactPage = ({ onBack }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('આપનો સંદેશ સફળતાપૂર્વક મોકલવામાં આવ્યો છે! (Your message has been sent successfully!)');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "ફોન નંબર",
      value: "+91 6354571342",
      link: "tel:+916354571342",
      description: "સોમ-શુક્ર: 9:00 AM - 6:00 PM"
    },
    {
      icon: MapPin,
      title: "સરનામું",
      value: "ABC Circle, Office No. 402",
      link: null,
      description: "ગુજરાત, ભારત"
    },
    {
      icon: Mail,
      title: "ઈમેઇલ",
      value: "career@assessment.com",
      link: "mailto:career@assessment.com",
      description: "24x7 સમર્થન"
    },
    {
      icon: Clock,
      title: "કામના કલાકો",
      value: "સોમ-શુક્ર: 9:00 AM - 6:00 PM",
      link: null,
      description: "શનિ-રવિ: બંધ"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex items-center space-x-4 mb-6">
            {onBack && (
              <motion.button
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                onClick={onBack}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowLeft className="w-6 h-6 text-gray-600" />
              </motion.button>
            )}
            <div>
              <h1 className="text-3xl font-bold text-gray-800 gujarati-text">સંપર્ક કરો</h1>
              <p className="text-gray-600">Contact Us</p>
            </div>
          </div>
          
          <p className="text-lg text-gray-700 leading-relaxed gujarati-text">
            કારકિર્દી મૂલ્યાંકન સિસ્ટમ વિશે કોઈપણ પ્રશ્નો હોય તો અમારો સંપર્ક કરો. 
            અમે તમને મદદ કરવા માટે તૈયાર છીએ.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 gujarati-text">સંપર્ક માહિતી</h2>
            
            {contactInfo.map((contact, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <contact.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 gujarati-text text-lg mb-1">
                      {contact.title}
                    </h3>
                    {contact.link ? (
                      <a 
                        href={contact.link}
                        className="text-primary-600 hover:text-primary-700 transition-colors duration-200 text-lg font-medium"
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <p className="text-gray-800 text-lg font-medium">{contact.value}</p>
                    )}
                    <p className="text-gray-600 text-sm mt-1">{contact.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Additional Info */}
            <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl shadow-lg p-6 text-white">
              <div className="text-center">
                <MessageSquare className="w-12 h-12 mx-auto mb-4 text-white opacity-80" />
                <h3 className="text-xl font-bold mb-2 gujarati-text">તાત્કાલિક સમર્થન</h3>
                <p className="text-white opacity-90 gujarati-text">
                  કારકિર્દી માર્ગદર્શન માટે તાત્કાલિક સમર્થન મેળવો
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 gujarati-text">સંદેશ મોકલો</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 gujarati-text">
                    નામ *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    placeholder="તમારું નામ દાખલ કરો"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 gujarati-text">
                    ઈમેઇલ *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    placeholder="તમારું ઈમેઇલ દાખલ કરો"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 gujarati-text">
                    ફોન નંબર
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    placeholder="તમારો ફોન નંબર દાખલ કરો"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 gujarati-text">
                    વિષય *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    placeholder="સંદેશનો વિષય દાખલ કરો"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 gujarati-text">
                  સંદેશ *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="તમારો સંદેશ લખો..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full btn-primary flex items-center justify-center space-x-2 py-4 ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>મોકલી રહ્યા છીએ...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>સંદેશ મોકલો</span>
                  </>
                )}
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
