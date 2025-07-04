import React from 'react';
import { Link } from 'react-router-dom';
import ilorinTour1 from '../TechUp_images/ilorinTour1.jpg';
import ilorinTour2 from '../TechUp_images/ilorinTour2.jpg';
import ilorinTour3 from '../TechUp_images/ilorinTour3.jpg';
import ibadanTour1 from '../TechUp_images/ibadanTour1.png';
import ibadanTour2 from '../TechUp_images/ibadanTour2.png';
import ibadanTour3 from '../TechUp_images/ibadanTour3.png';
import osunTour1 from '../TechUp_images/osunTour1.jpg';
import osunTour2 from '../TechUp_images/osunTour2.jpg';
import osunTour3 from '../TechUp_images/osunTour3.jpg';

function TechToursPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <div className="container mx-auto px-3 xs:px-4 py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-black mb-3 sm:mb-4 md:mb-6 text-black" style={{fontFamily: "'Poppins', 'Inter', 'Roboto', sans-serif"}}>
            Our Tech Tours
          </h1>
          <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-raleway px-2">
            Bringing technology education directly to schools across Nigeria
          </p>
          <div className="mt-5 sm:mt-6 md:mt-8">
            <Link to="/initiatives" className="bg-[#1fc9d5] hover:bg-[#19b6c1] text-white font-bold text-sm xs:text-base py-2 px-5 xs:px-6 sm:py-2.5 sm:px-7 rounded-full transition-colors shadow-lg">
              Back to Initiatives
            </Link>
          </div>
        </div>

        {/* Ilorin Tour Section */}
        <div className="max-w-6xl mx-auto mb-10 sm:mb-14 md:mb-20">
          <div className="bg-white p-4 sm:p-6 md:p-8 lg:p-10 rounded-xl shadow-lg">
            <h2 className="text-xl xs:text-2xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 md:mb-8 text-[#1fc9d5] relative font-montserrat">
              Ilorin Tech Tour
              <span className="absolute -bottom-2 left-0 w-12 sm:w-16 h-0.5 bg-gradient-to-r from-[#1fc9d5] to-[#19b6c1]"></span>
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 xs:gap-4 sm:gap-5 md:gap-6 mb-4 sm:mb-6 md:mb-8">
              <div className="bg-gradient-to-br from-[#1fc9d5] to-[#19b6c1] p-1 rounded-xl">
                <div className="bg-white p-1 sm:p-2 rounded-lg h-40 xs:h-44 sm:h-48 md:h-56 lg:h-64 overflow-hidden">
                  <img 
                    src={ilorinTour1} 
                    alt="Ilorin Tech Tour" 
                    className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="bg-gradient-to-br from-[#1fc9d5] to-[#19b6c1] p-1 rounded-xl">
                <div className="bg-white p-1 sm:p-2 rounded-lg h-40 xs:h-44 sm:h-48 md:h-56 lg:h-64 overflow-hidden">
                  <img 
                    src={ilorinTour2} 
                    alt="Ilorin Tech Tour" 
                    className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="bg-gradient-to-br from-[#1fc9d5] to-[#19b6c1] p-1 rounded-xl sm:col-span-2 lg:col-span-1">
                <div className="bg-white p-1 sm:p-2 rounded-lg h-40 xs:h-44 sm:h-48 md:h-56 lg:h-64 overflow-hidden">
                  <img 
                    src={ilorinTour3} 
                    alt="Ilorin Tech Tour" 
                    className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            
            <p className="text-sm xs:text-base text-gray-700 mb-4 sm:mb-6 font-raleway">
              Our tech tour in Ilorin brought hands-on technology education to local schools, introducing students to coding, robotics, and digital skills through interactive workshops and engaging activities.
            </p>
            
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              <a 
                href="https://www.instagram.com/p/C78w3PaM9kt/?igsh=cWp6MjFna3dic3Q4" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#1fc9d5] hover:bg-[#19b6c1] text-white font-bold text-xs xs:text-sm sm:text-base py-1.5 xs:py-2 px-4 xs:px-5 sm:px-6 rounded-full transition-colors shadow-md inline-block"
              >
                View on Instagram
              </a>
              <a 
                href="https://www.linkedin.com/posts/techup0_empoweryouth-futureinnovators-techforgood-activity-7223675592494219264-jF6u?utm_source=share&utm_medium=member_ios&rcm=ACoAACN9qAEBx8RzSLmwm4iKCSVXVVA3pwm3A5g" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#0077b5] hover:bg-[#005885] text-white font-bold text-xs xs:text-sm sm:text-base py-1.5 xs:py-2 px-4 xs:px-5 sm:px-6 rounded-full transition-colors shadow-md inline-block"
              >
                View on LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Ibadan Tour Section */}
        <div className="max-w-6xl mx-auto mb-10 sm:mb-14 md:mb-20">
          <div className="bg-white p-4 sm:p-6 md:p-8 lg:p-10 rounded-xl shadow-lg">
            <h2 className="text-xl xs:text-2xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 md:mb-8 text-[#1fc9d5] relative font-montserrat">
              Ibadan Tech Tour
              <span className="absolute -bottom-2 left-0 w-12 sm:w-16 h-0.5 bg-gradient-to-r from-[#1fc9d5] to-[#19b6c1]"></span>
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 xs:gap-4 sm:gap-5 md:gap-6 mb-4 sm:mb-6 md:mb-8">
              <div className="bg-gradient-to-br from-[#1fc9d5] to-[#19b6c1] p-1 rounded-xl">
                <div className="bg-white p-1 sm:p-2 rounded-lg h-40 xs:h-44 sm:h-48 md:h-56 lg:h-64 overflow-hidden">
                  <img 
                    src={ibadanTour1} 
                    alt="Ibadan Tech Tour" 
                    className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="bg-gradient-to-br from-[#1fc9d5] to-[#19b6c1] p-1 rounded-xl">
                <div className="bg-white p-1 sm:p-2 rounded-lg h-40 xs:h-44 sm:h-48 md:h-56 lg:h-64 overflow-hidden">
                  <img 
                    src={ibadanTour2} 
                    alt="Ibadan Tech Tour" 
                    className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="bg-gradient-to-br from-[#1fc9d5] to-[#19b6c1] p-1 rounded-xl sm:col-span-2 lg:col-span-1">
                <div className="bg-white p-1 sm:p-2 rounded-lg h-40 xs:h-44 sm:h-48 md:h-56 lg:h-64 overflow-hidden">
                  <img 
                    src={ibadanTour3} 
                    alt="Ibadan Tech Tour" 
                    className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            
            <p className="text-sm xs:text-base text-gray-700 mb-4 sm:mb-6 font-raleway">
              In Ibadan, our tech tour engaged students with practical technology education, fostering creativity and problem-solving skills through interactive sessions on coding, digital literacy, and emerging technologies.
            </p>
            
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              <a 
                href="https://www.instagram.com/reel/C6n4KcyM05N/?igsh=MXY5YXc1c2x2c3BpOQ==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#1fc9d5] hover:bg-[#19b6c1] text-white font-bold text-xs xs:text-sm sm:text-base py-1.5 xs:py-2 px-4 xs:px-5 sm:px-6 rounded-full transition-colors shadow-md inline-block"
              >
                View on Instagram
              </a>
              <a 
                href="https://www.linkedin.com/posts/techup0_exploringthefutureoftecheducationonourschooltour-activity-7178467799214809088--Aa8?utm_source=share&utm_medium=member_ios&rcm=ACoAACN9qAEBx8RzSLmwm4iKCSVXVVA3pwm3A5g" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#0077b5] hover:bg-[#005885] text-white font-bold text-xs xs:text-sm sm:text-base py-1.5 xs:py-2 px-4 xs:px-5 sm:px-6 rounded-full transition-colors shadow-md inline-block"
              >
                View on LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Osun Tour Section */}
        <div className="max-w-6xl mx-auto mb-10 sm:mb-14 md:mb-20">
          <div className="bg-white p-4 sm:p-6 md:p-8 lg:p-10 rounded-xl shadow-lg">
            <h2 className="text-xl xs:text-2xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 md:mb-8 text-[#1fc9d5] relative font-montserrat">
              Osun Tech Tour
              <span className="absolute -bottom-2 left-0 w-12 sm:w-16 h-0.5 bg-gradient-to-r from-[#1fc9d5] to-[#19b6c1]"></span>
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 xs:gap-4 sm:gap-5 md:gap-6 mb-4 sm:mb-6 md:mb-8">
              <div className="bg-gradient-to-br from-[#1fc9d5] to-[#19b6c1] p-1 rounded-xl">
                <div className="bg-white p-1 sm:p-2 rounded-lg h-40 xs:h-44 sm:h-48 md:h-56 lg:h-64 overflow-hidden">
                  <img 
                    src={osunTour1} 
                    alt="Osun Tech Tour" 
                    className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="bg-gradient-to-br from-[#1fc9d5] to-[#19b6c1] p-1 rounded-xl">
                <div className="bg-white p-1 sm:p-2 rounded-lg h-40 xs:h-44 sm:h-48 md:h-56 lg:h-64 overflow-hidden">
                  <img 
                    src={osunTour2} 
                    alt="Osun Tech Tour" 
                    className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="bg-gradient-to-br from-[#1fc9d5] to-[#19b6c1] p-1 rounded-xl sm:col-span-2 lg:col-span-1">
                <div className="bg-white p-1 sm:p-2 rounded-lg h-40 xs:h-44 sm:h-48 md:h-56 lg:h-64 overflow-hidden">
                  <img 
                    src={osunTour3} 
                    alt="Osun Tech Tour" 
                    className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            
            <p className="text-sm xs:text-base text-gray-700 mb-4 sm:mb-6 font-raleway">
              The Osun Tech Tour brought innovative technology education to students in Osun State, focusing on practical skills development through hands-on workshops in coding, digital literacy, and creative problem-solving.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechToursPage;