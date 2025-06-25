import React from 'react';

function InitiativesPage() {
  return (
    <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16 font-montserrat">Our Initiatives</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
        <div className="bg-white py-5 sm:py-6 md:py-8 px-4 sm:px-5 md:px-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:bg-blue-50 initiative-box cursor-pointer">
          <div className="text-2xl sm:text-3xl md:text-3xl text-[#1fc9d5] mb-2 sm:mb-3"><i className="fas fa-laptop-code"></i></div>
          <h2 className="text-lg sm:text-xl md:text-xl font-bold mb-2 sm:mb-3 font-montserrat">Tech Tours</h2>
          <p className="mb-2 sm:mb-3 text-xs sm:text-sm font-raleway">Our Tech Tours bring technology education directly to schools across Africa, introducing students to coding, robotics, and digital skills.</p>
          <p className="text-xs sm:text-sm font-raleway">Through interactive workshops and hands-on activities, we spark interest in technology and show students how they can use tech to solve problems in their communities.</p>
        </div>
        
        <div className="bg-white py-5 sm:py-6 md:py-8 px-4 sm:px-5 md:px-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:bg-blue-50 initiative-box cursor-pointer">
          <div className="text-2xl sm:text-3xl md:text-3xl text-[#1fc9d5] mb-2 sm:mb-3"><i className="fas fa-podcast"></i></div>
          <h2 className="text-lg sm:text-xl md:text-xl font-bold mb-2 sm:mb-3 font-montserrat">Tech Podcasts</h2>
          <p className="mb-2 sm:mb-3 text-xs sm:text-sm font-raleway">Our podcast series features inspiring stories from tech leaders, entrepreneurs, and innovators from across Africa and beyond.</p>
          <p className="text-xs sm:text-sm font-raleway">By sharing these stories, we aim to inspire the next generation of tech talent and provide insights into various career paths in technology.</p>
        </div>
        
        <div className="bg-white py-5 sm:py-6 md:py-8 px-4 sm:px-5 md:px-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:bg-blue-50 initiative-box cursor-pointer">
          <div className="text-2xl sm:text-3xl md:text-3xl text-[#1fc9d5] mb-2 sm:mb-3"><i className="fas fa-code"></i></div>
          <h2 className="text-lg sm:text-xl md:text-xl font-bold mb-2 sm:mb-3 font-montserrat">Bootcamps</h2>
          <p className="mb-2 sm:mb-3 text-xs sm:text-sm font-raleway">Our intensive bootcamp programs provide hands-on training in in-demand tech skills, from web development to data science and AI.</p>
          <p className="text-xs sm:text-sm font-raleway">Designed to be accessible and practical, our bootcamps equip participants with the skills they need to launch careers in technology.</p>
        </div>
        
        <div className="bg-white py-5 sm:py-6 md:py-8 px-4 sm:px-5 md:px-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:bg-blue-50 initiative-box cursor-pointer">
          <div className="text-2xl sm:text-3xl md:text-3xl text-[#1fc9d5] mb-2 sm:mb-3"><i className="fas fa-users"></i></div>
          <h2 className="text-lg sm:text-xl md:text-xl font-bold mb-2 sm:mb-3 font-montserrat">Tech Clubs</h2>
          <p className="mb-2 sm:mb-3 text-xs sm:text-sm font-raleway">We establish and support tech clubs in schools and communities, creating spaces where young people can learn, collaborate, and innovate together.</p>
          <p className="text-xs sm:text-sm font-raleway">These clubs provide ongoing support, resources, and mentorship to nurture long-term interest and growth in technology.</p>
        </div>
      </div>
    </div>
  );
}

export default InitiativesPage;
