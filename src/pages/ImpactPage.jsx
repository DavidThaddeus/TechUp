import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../TechUp images/logo.jpg';
import tourImg1 from '../TechUp images/tourImg1.jpg';
import tourImg2 from '../TechUp images/tourImg2.png';
import tourImg3 from '../TechUp images/tourImg3.png';
import tourImg5 from '../TechUp images/tourImg5.png';

function ImpactPage() {
  const navigate = useNavigate();

  const handleGetInvolved = () => {
    navigate('/join-us');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 text-black" style={{fontFamily: "'Poppins', 'Inter', 'Roboto', sans-serif"}}>
            Our Impact
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-raleway">
            Igniting passion for technology in young individuals across Nigeria and beyond
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-16 sm:mb-20 md:mb-24 max-w-4xl mx-auto">
          <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-[#1fc9d5] mb-2 sm:mb-3">5+</div>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 font-raleway leading-relaxed">States Reached Across Nigeria</p>
          </div>
          <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-[#1fc9d5] mb-2 sm:mb-3">1000+</div>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 font-raleway leading-relaxed">Students Inspired</p>
          </div>
          <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-[#1fc9d5] mb-2 sm:mb-3">100%</div>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 font-raleway leading-relaxed">Commitment to Growth</p>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 sm:mb-16 font-montserrat">
            Our Journey of Impact
          </h2>
          
          {/* Timeline Container */}
          <div className="relative">
            {/* Timeline Line - Hidden on mobile */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-[#1fc9d5] to-[#19b6c1] h-full"></div>
            
            {/* Timeline Items */}
            <div className="space-y-8 sm:space-y-12 md:space-y-16">
              
              {/* Timeline Item 1 - Educational Outreach */}
              <div className="relative flex flex-col md:flex-row items-center">
                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#1fc9d5] rounded-full border-4 border-white shadow-lg z-10"></div>
                
                {/* Content - Left Side on Desktop */}
                <div className="w-full md:w-5/12 md:pr-8">
                  <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center mb-3 sm:mb-4">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#1fc9d5] rounded-full flex items-center justify-center mr-3">
                        <i className="fas fa-graduation-cap text-white text-sm sm:text-base"></i>
                      </div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold font-montserrat">Educational Outreach</h3>
                    </div>
                    <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 font-raleway">
                      Through our educational podcasts, Twitter spaces, and interactive sessions, we've informed the next generation about technology's limitless possibilities.
                    </p>
                    <div className="text-xs sm:text-sm text-[#1fc9d5] font-semibold">
                      <i className="fas fa-podcast mr-2"></i>Multiple Platforms Reached
                    </div>
                  </div>
                </div>
                
                {/* Image - Right Side on Desktop */}
                <div className="w-full md:w-5/12 md:pl-8 mt-4 md:mt-0">
                  <div className="bg-gradient-to-br from-[#1fc9d5] to-[#19b6c1] p-1 rounded-xl">
                    <div className="bg-white p-2 rounded-lg h-48 sm:h-56 md:h-64 overflow-hidden">
                      <img 
                        src={tourImg5} 
                        alt="Educational Outreach Sessions" 
                        className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline Item 2 - Physical Tours */}
              <div className="relative flex flex-col md:flex-row-reverse items-center">
                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#1fc9d5] rounded-full border-4 border-white shadow-lg z-10"></div>
                
                {/* Content - Right Side on Desktop */}
                <div className="w-full md:w-5/12 md:pl-8">
                  <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center mb-3 sm:mb-4">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#1fc9d5] rounded-full flex items-center justify-center mr-3">
                        <i className="fas fa-map-marked-alt text-white text-sm sm:text-base"></i>
                      </div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold font-montserrat">Nationwide Tours</h3>
                    </div>
                    <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 font-raleway">
                      We've traveled to over five states across Nigeria, promoting tech education both physically and online, reaching communities far and wide.
                    </p>
                    <div className="text-xs sm:text-sm text-[#1fc9d5] font-semibold">
                      <i className="fas fa-route mr-2"></i>5+ States Covered
                    </div>
                  </div>
                </div>
                
                {/* Image - Left Side on Desktop */}
                <div className="w-full md:w-5/12 md:pr-8 mt-4 md:mt-0">
                  <div className="bg-gradient-to-br from-[#1fc9d5] to-[#19b6c1] p-1 rounded-xl">
                    <div className="bg-white p-2 rounded-lg h-48 sm:h-56 md:h-64 overflow-hidden">
                      <img 
                        src={tourImg3} 
                        alt="Tech Tours Across Nigeria" 
                        className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline Item 3 - Student Engagement */}
              <div className="relative flex flex-col md:flex-row items-center">
                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#1fc9d5] rounded-full border-4 border-white shadow-lg z-10"></div>
                
                {/* Content - Left Side on Desktop */}
                <div className="w-full md:w-5/12 md:pr-8">
                  <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center mb-3 sm:mb-4">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#1fc9d5] rounded-full flex items-center justify-center mr-3">
                        <i className="fas fa-users text-white text-sm sm:text-base"></i>
                      </div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold font-montserrat">Student Inspiration</h3>
                    </div>
                    <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 font-raleway">
                      We've had the privilege of sparking curiosity in numerous students about what tech truly entails, encouraging them to embrace technology's potential.
                    </p>
                    <div className="text-xs sm:text-sm text-[#1fc9d5] font-semibold">
                      <i className="fas fa-lightbulb mr-2"></i>Curiosity Ignited
                    </div>
                  </div>
                </div>
                
                {/* Image - Right Side on Desktop */}
                <div className="w-full md:w-5/12 md:pl-8 mt-4 md:mt-0">
                  <div className="bg-gradient-to-br from-[#1fc9d5] to-[#19b6c1] p-1 rounded-xl">
                    <div className="bg-white p-2 rounded-lg h-48 sm:h-56 md:h-64 overflow-hidden">
                      <img 
                        src={tourImg1} 
                        alt="Inspiring Young Minds" 
                        className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline Item 4 - Future Vision */}
              <div className="relative flex flex-col md:flex-row-reverse items-center">
                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#1fc9d5] rounded-full border-4 border-white shadow-lg z-10"></div>
                
                {/* Content - Right Side on Desktop */}
                <div className="w-full md:w-5/12 md:pl-8">
                  <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center mb-3 sm:mb-4">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#1fc9d5] rounded-full flex items-center justify-center mr-3">
                        <i className="fas fa-globe-africa text-white text-sm sm:text-base"></i>
                      </div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold font-montserrat">Global Vision</h3>
                    </div>
                    <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 font-raleway">
                      Our aim is to extend our reach, inspiring young individuals across Africa and the world, fostering innovation and digital leadership.
                    </p>
                    <div className="text-xs sm:text-sm text-[#1fc9d5] font-semibold">
                      <i className="fas fa-rocket mr-2"></i>Expanding Horizons
                    </div>
                  </div>
                </div>
                
                {/* Image - Left Side on Desktop */}
                <div className="w-full md:w-5/12 md:pr-8 mt-4 md:mt-0">
                  <div className="bg-gradient-to-br from-[#1fc9d5] to-[#19b6c1] p-1 rounded-xl">
                    <div className="bg-white p-2 rounded-lg h-48 sm:h-56 md:h-64 overflow-hidden">
                      <img 
                        src={tourImg2} 
                        alt="Reaching Africa & Beyond" 
                        className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 sm:mt-20 md:mt-24">
          <div className="bg-white p-6 sm:p-8 md:p-10 rounded-xl shadow-lg max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 font-montserrat">
              Join Our Mission
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8 font-raleway">
              We are dedicated to fostering a culture of innovation and ensuring every willing learner has the opportunity to become a leader in the ever-evolving digital world.
            </p>
            <div className="flex justify-center">
              <button 
                onClick={handleGetInvolved}
                className="liquid-button bg-[#1fc9d5] hover:bg-[#19b6c1] text-white font-bold py-3 px-6 sm:px-8 rounded-full transition-colors shadow-lg relative overflow-hidden"
              >
                <span className="relative z-10">Get Involved</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImpactPage;