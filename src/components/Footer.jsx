import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-black text-white py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white font-montserrat">TechUp</h3>
            <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed font-raleway italic">
              Empowering young Africans with tech skills for a brighter future.
            </p>
            <div className="flex justify-center sm:justify-start space-x-4 sm:space-x-6">
              <a 
                href="https://x.com/TechUP_office" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-[#1fc9d5] transition-all duration-300 transform hover:scale-110"
                aria-label="Follow us on Twitter"
              >
                <i className="fab fa-twitter text-base sm:text-lg"></i>
              </a>
              <a 
                href="https://instagram.com/techup.official_" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-[#1fc9d5] transition-all duration-300 transform hover:scale-110"
                aria-label="Follow us on Instagram"
              >
                <i className="fab fa-instagram text-base sm:text-lg"></i>
              </a>
              <a 
                href="#" 
                className="text-white hover:text-[#1fc9d5] transition-all duration-300 transform hover:scale-110"
                aria-label="Connect with us on LinkedIn"
              >
                <i className="fab fa-linkedin text-base sm:text-lg"></i>
              </a>
            </div>
          </div>
          
          {/* Contact Section */}
          <div className="text-center sm:text-left">
            <h4 className="font-bold mb-3 sm:mb-4 text-base sm:text-lg text-white font-montserrat">Contact</h4>
            <div className="space-y-2 sm:space-y-3">
              <p className="text-sm sm:text-base text-gray-300 font-raleway">
                <i className="fas fa-envelope mr-2 sm:mr-3 text-[#1fc9d5]"></i>
                <a 
                  href="mailto:Techup1.official@gmail.com" 
                  className="hover:text-[#1fc9d5] transition-colors duration-300"
                >
                  Techup1.official@gmail.com
                </a>
              </p>
              <p className="text-sm sm:text-base text-gray-300 font-raleway">
                <i className="fas fa-map-marker-alt mr-2 sm:mr-3 text-[#1fc9d5]"></i>
                Nigeria, Africa
              </p>
            </div>
          </div>
          
          {/* Subscribe Section */}
          <div className="text-center sm:text-left sm:col-span-2 lg:col-span-1">
            <h4 className="font-bold mb-3 sm:mb-4 text-base sm:text-lg text-white font-montserrat">Subscribe</h4>
            <p className="text-sm sm:text-base mb-4 sm:mb-6 text-gray-300 font-raleway leading-relaxed">
              Stay updated with our latest news and events.
            </p>
            <form className="flex flex-col sm:flex-row gap-2 sm:gap-0 max-w-md mx-auto sm:mx-0">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-3 py-1.5 rounded-lg sm:rounded-l-lg sm:rounded-r-none text-gray-800 w-full text-sm focus:outline-none focus:ring-2 focus:ring-[#1fc9d5] transition-all duration-300 font-raleway"
                required
              />
              <button 
                type="submit" 
                className="bg-[#1fc9d5] hover:bg-[#19b6c1] text-white px-3 py-1.5 rounded-lg sm:rounded-r-lg sm:rounded-l-none transition-all duration-300 transform hover:scale-105 font-montserrat font-medium text-sm"
              >
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
        
        {/* Copyright Section */}
        <div className="mt-8 sm:mt-12 lg:mt-16 pt-6 sm:pt-8 border-t border-gray-800 text-center">
          <p className="text-xs sm:text-sm text-gray-400 font-raleway">
            &copy; {new Date().getFullYear()} TechUp. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
