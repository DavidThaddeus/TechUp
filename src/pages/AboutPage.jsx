import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import bannerImage from '../TechUp images/techUpBg3.jpeg';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function AboutPage() {
  const statsRef = useRef(null);
  const missionRef = useRef(null);
  const visionRef = useRef(null);
  const valuesRef = useRef(null);

  useEffect(() => {
    // Animate sections on scroll
    gsap.fromTo(
      missionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: missionRef.current,
          start: "top 80%",
          toggleActions: "play none none reset"
        }
      }
    );

    gsap.fromTo(
      visionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: visionRef.current,
          start: "top 80%",
          toggleActions: "play none none reset"
        }
      }
    );

    gsap.fromTo(
      valuesRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: valuesRef.current,
          start: "top 80%",
          toggleActions: "play none none reset"
        }
      }
    );

    // Animate stats with counter effect
    if (statsRef.current) {
      const statElements = statsRef.current.querySelectorAll('.stat-number');
      statElements.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        gsap.to(stat, {
          innerHTML: target,
          duration: 2,
          snap: { innerHTML: 1 },
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%"
          }
        });
      });
    }
  }, []);

  return (
    <div className="min-h-screen pt-0 bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Banner Image with Enhanced Gradient Overlay */}
      <div className="relative w-full h-[50vh] sm:h-[55vh] md:h-[60vh] lg:h-[65vh] overflow-hidden">
        <img 
          src={bannerImage} 
          alt="TechUp About Banner" 
          className="w-full h-full object-cover object-center transform scale-[1.02] filter contrast-[1.05] brightness-[0.95]"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/70 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 animate-fadeIn" style={{fontFamily: "'Poppins', 'Inter', 'Roboto', sans-serif"}}>
              About TechUp
            </h1>
            <p className="text-base sm:text-lg mb-6 sm:mb-8 max-w-3xl mx-auto animate-slideUp font-raleway">
              Championing relevant tech-skill education among young Africans to address unemployment and prepare them for the Industrial Revolution.
            </p>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center relative">
            <p className="text-base sm:text-lg text-gray-800 leading-relaxed font-raleway font-normal tracking-wide">
              <i className="fas fa-quote-left text-xl sm:text-2xl text-[#1fc9d5] mr-2 align-top"></i><span className="font-medium text-[#1fc9d5]">TechUp</span> is an organization dedicated to championing relevant tech-skill education among young Africans. By doing this we will address the pressing issue of unemployment in Nigeria (Africa), particularly among youth. With youth unemployment rates soaring over <span className="font-medium text-[#1fc9d5]">35%</span>, according to <span className="italic">Bloomberg</span>, the need for interventions that equip young minds with relevant skills for the modern workforce has never been more critical. With an impact of reaching out to over <span className="font-medium text-[#1fc9d5]">one thousand (1000+)</span> young persons across board, TechUp aim to place young Africans as contributors towards global innovations and also to prepare them for the Industrial Revolution.<i className="fas fa-quote-right text-xl sm:text-2xl text-[#1fc9d5] ml-2 align-top"></i>
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50" ref={statsRef}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            <div className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl text-center transform transition-all duration-500 hover:scale-105 border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-br from-[#1fc9d5] to-[#19b6c1] rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-users text-white text-sm"></i>
              </div>
              <div className="text-2xl font-bold text-[#1fc9d5] mb-2 stat-number font-montserrat" data-target="1000">0</div>
              <p className="text-sm text-gray-600 font-raleway font-medium">Young Africans Reached</p>
            </div>
            <div className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl text-center transform transition-all duration-500 hover:scale-105 border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-br from-[#1fc9d5] to-[#19b6c1] rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-chart-line text-white text-sm"></i>
              </div>
              <div className="text-2xl font-bold text-[#1fc9d5] mb-2 font-montserrat">
                <span className="stat-number" data-target="35">0</span><span>%</span>
              </div>
              <p className="text-sm text-gray-600 font-raleway font-medium">Youth Unemployment Rate</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12" ref={missionRef}>
            <h2 className="text-2xl font-bold mb-4 text-[#1fc9d5] relative font-montserrat">
              Our Mission
              <span className="absolute -bottom-2 left-0 w-16 h-0.5 bg-gradient-to-r from-[#1fc9d5] to-[#19b6c1]"></span>
            </h2>
            <p className="text-base mb-6 text-gray-700 leading-relaxed font-raleway">
              At TechUp, we are committed to promoting tech skill-education and preparing the young once for the challenges and opportunities of the technological age. Our mission aligns closely with Sustainable Development Goal 8 - Decent Work and Economic Growth, as well as SDG 4 - Quality Education. We are on a mission to <span className="font-semibold text-[#1fc9d5]">'Empower the Next Generation of Tech Leaders'</span>.
            </p>
          </div>
          
          <div className="mb-12" ref={visionRef}>
            <h2 className="text-2xl font-bold mb-4 text-[#1fc9d5] relative font-montserrat">
              Our Vision
              <span className="absolute -bottom-2 left-0 w-16 h-0.5 bg-gradient-to-r from-[#1fc9d5] to-[#19b6c1]"></span>
            </h2>
            <p className="text-base mb-6 text-gray-700 leading-relaxed font-raleway">
              Our vision is to create a future where every young person in Nigeria (Africa) has the opportunity to gain quality education and decent work, contributing to the nation's economic growth and technological advancement. By fostering a culture of continuous learning and innovation, we aim to reduce unemployment and build a robust, skilled workforce capable of driving sustainable development.
            </p>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-[#1fc9d5] relative font-montserrat">
              What We Do
              <span className="absolute -bottom-2 left-0 w-16 h-0.5 bg-gradient-to-r from-[#1fc9d5] to-[#19b6c1]"></span>
            </h2>
            <p className="text-base mb-6 text-gray-700 leading-relaxed font-raleway">
              Through various initiatives, including tech tours, podcasts, bootcamps, and tech clubs across the board, we strive to empower young individuals with the skills and knowledge needed to thrive in today's digital economy. Our programs are designed to be accessible, practical, and impactful, ensuring that participants are well-prepared for the demands of the modern job market.
            </p>
          </div>
          
          <div ref={valuesRef}>
            <h2 className="text-2xl font-bold mb-6 text-[#1fc9d5] relative font-montserrat">
              Our Values
              <span className="absolute -bottom-2 left-0 w-16 h-0.5 bg-gradient-to-r from-[#1fc9d5] to-[#19b6c1]"></span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-[#1fc9d5] to-[#19b6c1] p-6 rounded-2xl shadow-lg text-white border border-gray-100">
                <h3 className="text-lg font-bold mb-3 flex items-center font-montserrat">
                  <i className="fas fa-door-open mr-3 text-white"></i>
                  Accessibility
                </h3>
                <p className="text-sm leading-relaxed font-raleway">Making technology education accessible to all, regardless of background or location.</p>
              </div>
              <div className="bg-gradient-to-br from-[#1fc9d5] to-[#19b6c1] p-6 rounded-2xl shadow-lg text-white border border-gray-100">
                <h3 className="text-lg font-bold mb-3 flex items-center font-montserrat">
                  <i className="fas fa-lightbulb mr-3 text-white"></i>
                  Innovation
                </h3>
                <p className="text-sm leading-relaxed font-raleway">Fostering creative thinking and problem-solving through technology.</p>
              </div>
              <div className="bg-gradient-to-br from-[#1fc9d5] to-[#19b6c1] p-6 rounded-2xl shadow-lg text-white border border-gray-100">
                <h3 className="text-lg font-bold mb-3 flex items-center font-montserrat">
                  <i className="fas fa-users mr-3 text-white"></i>
                  Community
                </h3>
                <p className="text-sm leading-relaxed font-raleway">Building supportive communities where learning and growth thrive.</p>
              </div>
              <div className="bg-gradient-to-br from-[#1fc9d5] to-[#19b6c1] p-6 rounded-2xl shadow-lg text-white border border-gray-100">
                <h3 className="text-lg font-bold mb-3 flex items-center font-montserrat">
                  <i className="fas fa-award mr-3 text-white"></i>
                  Excellence
                </h3>
                <p className="text-sm leading-relaxed font-raleway">Striving for the highest standards in everything we do.</p>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}

export default AboutPage;
