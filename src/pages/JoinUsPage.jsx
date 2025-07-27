import React, { useState } from 'react';
import { sendContactEmail } from '../utils/emailService';
import Toast from '../components/Toast';

function JoinUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState({
    isVisible: false,
    message: '',
    type: 'success'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Client-side validation
    const { name, email, subject, message } = formData;
    
    if (!name.trim() || name.trim().length < 2) {
      setToast({
        isVisible: true,
        message: 'Please enter a valid name (at least 2 characters).',
        type: 'error'
      });
      return;
    }
    
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setToast({
        isVisible: true,
        message: 'Please enter a valid email address.',
        type: 'error'
      });
      return;
    }
    
    if (!subject.trim() || subject.trim().length < 5) {
      setToast({
        isVisible: true,
        message: 'Please enter a subject (at least 5 characters).',
        type: 'error'
      });
      return;
    }
    
    if (!message.trim() || message.trim().length < 10) {
      setToast({
        isVisible: true,
        message: 'Please enter a message (at least 10 characters).',
        type: 'error'
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const result = await sendContactEmail(formData);
      
      if (result.success) {
        setToast({
          isVisible: true,
          message: result.message,
          type: 'success'
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setToast({
          isVisible: true,
          message: result.message,
          type: 'error'
        });
      }
    } catch (error) {
      setToast({
        isVisible: true,
        message: 'An unexpected error occurred. Please try again.',
        type: 'error'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeToast = () => {
    setToast(prev => ({ ...prev, isVisible: false }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 text-black" style={{fontFamily: "'Poppins', 'Inter', 'Roboto', sans-serif"}}>
            Join Our Mission
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto font-raleway leading-relaxed">
            There are many ways to get involved with TechUp and help us empower young Africans with technology skills. Together, we can shape the future of technology in Africa.
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto">
          {/* Opportunity Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 mb-16 sm:mb-20 md:mb-24">
            {/* Student Card */}
            <div className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#1fc9d5] to-[#19b6c1] rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-graduation-cap text-white text-sm"></i>
                </div>
                <h2 className="text-xl font-bold text-[#1fc9d5] font-montserrat">Become a Student</h2>
              </div>
              <p className="text-sm text-gray-600 mb-4 font-raleway leading-relaxed">
                Join our bootcamps, workshops, or tech clubs to develop your skills and launch your tech career. Experience hands-on learning with industry experts and build real-world projects.
              </p>
              <div className="flex items-center text-xs text-[#1fc9d5] font-semibold">
                <i className="fas fa-rocket mr-2"></i>
                Launch Your Tech Journey
              </div>
            </div>
            
            {/* Mentor Card */}
            <div className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#1fc9d5] to-[#19b6c1] rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-chalkboard-teacher text-white text-sm"></i>
                </div>
                <h2 className="text-xl font-bold text-[#1fc9d5] font-montserrat">Volunteer as a Mentor</h2>
              </div>
              <p className="text-sm text-gray-600 mb-4 font-raleway leading-relaxed">
                Share your knowledge and experience by mentoring aspiring tech professionals in our programs. Make a lasting impact on the next generation of African tech leaders.
              </p>
              <div className="flex items-center text-xs text-[#1fc9d5] font-semibold">
                <i className="fas fa-heart mr-2"></i>
                Shape Future Leaders
              </div>
            </div>
            
            {/* Partner Card */}
            <div className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#1fc9d5] to-[#19b6c1] rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-handshake text-white text-sm"></i>
                </div>
                <h2 className="text-xl font-bold text-[#1fc9d5] font-montserrat">Partner with Us</h2>
              </div>
              <p className="text-sm text-gray-600 mb-4 font-raleway leading-relaxed">
                Organizations can partner with TechUp to support our mission and help create opportunities for young Africans. Join us in building a tech-enabled future for Africa.
              </p>
              <div className="flex items-center text-xs text-[#1fc9d5] font-semibold">
                <i className="fas fa-building mr-2"></i>
                Corporate Partnership
              </div>
            </div>
            
            {/* Donate Card */}
            <div className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#1fc9d5] to-[#19b6c1] rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-donate text-white text-sm"></i>
                </div>
                <h2 className="text-xl font-bold text-[#1fc9d5] font-montserrat">Support Our Cause</h2>
              </div>
              <p className="text-sm text-gray-600 mb-4 font-raleway leading-relaxed">
                Your donation helps us reach more students and expand our programs to new communities. Every contribution makes a difference in transforming lives through technology.
              </p>
              <div className="flex items-center text-xs text-[#1fc9d5] font-semibold">
                <i className="fas fa-gift mr-2"></i>
                Make an Impact
              </div>
            </div>
          </div>
          
          {/* Contact Form Section */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
              {/* Form Header */}
              <div className="bg-gradient-to-r from-[#1fc9d5] to-[#19b6c1] p-6 text-center">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="fas fa-envelope text-white text-lg"></i>
                </div>
                <h2 className="text-2xl font-bold text-white mb-2 font-montserrat">Get In Touch</h2>
                <p className="text-sm text-white text-opacity-90 font-raleway">
                  Ready to join our mission? Send us a message and let's start the conversation.
                </p>
              </div>
              
              {/* Form Body */}
              <div className="p-6">
                <div className="mb-4 text-sm text-gray-600 font-raleway">
                  <span className="text-red-500">*</span> Required fields
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="group">
                      <label className="block text-sm font-semibold text-gray-700 mb-2 font-raleway">
                        <i className="fas fa-user mr-2 text-[#1fc9d5]"></i>Full Name <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 rounded-lg border-2 border-gray-200 focus:border-[#1fc9d5] focus:outline-none transition-colors duration-300 text-gray-800 font-raleway group-hover:border-[#1fc9d5] group-hover:border-opacity-50"
                        placeholder="Enter your full name"
                        required
                        minLength="2"
                        maxLength="50"
                      />
                    </div>
                    <div className="group">
                      <label className="block text-sm font-semibold text-gray-700 mb-2 font-raleway">
                        <i className="fas fa-envelope mr-2 text-[#1fc9d5]"></i>Email Address <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 rounded-lg border-2 border-gray-200 focus:border-[#1fc9d5] focus:outline-none transition-colors duration-300 text-gray-800 font-raleway group-hover:border-[#1fc9d5] group-hover:border-opacity-50"
                        placeholder="Enter your email address"
                        required
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                      />
                    </div>
                  </div>
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2 font-raleway">
                      <i className="fas fa-tag mr-2 text-[#1fc9d5]"></i>Subject <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="text" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 rounded-lg border-2 border-gray-200 focus:border-[#1fc9d5] focus:outline-none transition-colors duration-300 text-gray-800 font-raleway group-hover:border-[#1fc9d5] group-hover:border-opacity-50"
                      placeholder="What would you like to discuss?"
                      required
                      minLength="5"
                      maxLength="100"
                    />
                  </div>
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2 font-raleway">
                      <i className="fas fa-comment mr-2 text-[#1fc9d5]"></i>Message <span className="text-red-500">*</span>
                    </label>
                    <textarea 
                      rows="4" 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 rounded-lg border-2 border-gray-200 focus:border-[#1fc9d5] focus:outline-none transition-colors duration-300 text-gray-800 font-raleway resize-none group-hover:border-[#1fc9d5] group-hover:border-opacity-50"
                      placeholder="Tell us more about how you'd like to get involved..."
                      required
                      minLength="10"
                      maxLength="1000"
                    ></textarea>
                  </div>
                  
                  {/* Submit Button */}
                  <div className="text-center pt-2">
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="group relative inline-flex items-center justify-center px-6 py-3 text-base font-bold text-white bg-gradient-to-r from-[#1fc9d5] to-[#19b6c1] rounded-full hover:from-[#19b6c1] hover:to-[#1fc9d5] transition-all duration-300 transform hover:scale-105 hover:shadow-lg font-raleway disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <span className="relative z-10 flex items-center">
                        {isSubmitting ? (
                          <>
                            <i className="fas fa-spinner fa-spin mr-2"></i>
                            Sending...
                          </>
                        ) : (
                          <>
                            <i className="fas fa-paper-plane mr-2"></i>
                            Send Message
                          </>
                        )}
                      </span>
                      <div className="absolute inset-0 bg-white bg-opacity-20 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Toast Notification */}
      <Toast 
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={closeToast}
      />
    </div>
  );
}

export default JoinUsPage;