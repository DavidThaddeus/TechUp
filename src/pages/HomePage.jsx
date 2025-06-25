import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import bannerImage from '../TechUp images/techBg3.jpg';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function HomePage() {
  const initiativesRef = useRef(null);
  const boxesRef = useRef([]);
  const podcastsRef = useRef(null);
  const podcastBoxesRef = useRef([]);
  const teamRef = useRef(null);
  const teamBoxesRef = useRef([]);
  const mobileTeamBoxesRef = useRef([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  // Separate useEffect for initiatives and podcasts
  useEffect(() => {
    // Animation for initiative boxes
    boxesRef.current.forEach((box, index) => {
      gsap.fromTo(
        box,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: initiativesRef.current,
            start: "top 75%",
            toggleActions: "play none none reset",
            markers: false
          },
          delay: index * 0.15
        }
      );
    });

    // Animation for podcast boxes
    podcastBoxesRef.current.forEach((box, index) => {
      gsap.fromTo(
        box,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: podcastsRef.current,
            start: "top 75%",
            toggleActions: "play none none reset",
            markers: false
          },
          delay: index * 0.15
        }
      );
    });

    // Cleanup function for scroll triggers
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []); // Empty dependency array - run once on mount

  // Separate useEffect for team animations
  useEffect(() => {
    const refs = window.innerWidth < 768 ? mobileTeamBoxesRef.current : teamBoxesRef.current;

    // Kill any existing animations first
    refs.forEach(box => {
      if (box) {
        gsap.killTweensOf(box);
      }
    });
    
    // Position all boxes initially
    refs.forEach((box, index) => {
      if (!box) return;
      
      // Set initial positions for all boxes
      if (index === currentSlide) {
        gsap.set(box, { x: '0%', opacity: 1, zIndex: 3 });
      } else if (index < currentSlide) {
        gsap.set(box, { x: '-100%', opacity: 0, zIndex: 1 });
      } else {
        gsap.set(box, { x: '100%', opacity: 0, zIndex: 1 });
      }
    });
  }, [currentSlide]);

  // Carousel navigation functions
  const nextSlide = useCallback(() => {
    const refs = window.innerWidth < 768 ? mobileTeamBoxesRef.current : teamBoxesRef.current;
    if (!refs[currentSlide]) return;
    
    const maxSlide = teamMembers.length - 1;
    const nextIndex = currentSlide >= maxSlide ? 0 : currentSlide + 1;
    
    // Prepare the next slide
    if (refs[nextIndex]) {
      gsap.set(refs[nextIndex], {
        x: '100%',
        opacity: 0,
        zIndex: 2
      });
    }
    
    // Animate current slide out to the left
    gsap.to(refs[currentSlide], {
      x: '-100%',
      opacity: 0,
      duration: 1.2,
      ease: "power3.inOut",
      onComplete: () => {
        gsap.set(refs[currentSlide], { zIndex: 1 });
      }
    });
    
    // Animate next slide in from the right
    if (refs[nextIndex]) {
      gsap.to(refs[nextIndex], {
        x: '0%',
        opacity: 1,
        duration: 1.2,
        ease: "power3.inOut"
      });
    }
    
    // Update current slide
    setCurrentSlide(nextIndex);
  }, [currentSlide]);

  const prevSlide = useCallback(() => {
    const refs = window.innerWidth < 768 ? mobileTeamBoxesRef.current : teamBoxesRef.current;
    if (!refs[currentSlide]) return;
    
    const maxSlide = teamMembers.length - 1;
    const prevIndex = currentSlide <= 0 ? maxSlide : currentSlide - 1;
    
    // Prepare the previous slide
    if (refs[prevIndex]) {
      gsap.set(refs[prevIndex], {
        x: '-100%',
        opacity: 0,
        zIndex: 2
      });
    }
    
    // Animate current slide out to the right
    gsap.to(refs[currentSlide], {
      x: '100%',
      opacity: 0,
      duration: 1.2,
      ease: "power3.inOut",
      onComplete: () => {
        gsap.set(refs[currentSlide], { zIndex: 1 });
      }
    });
    
    // Animate previous slide in from the left
    if (refs[prevIndex]) {
      gsap.to(refs[prevIndex], {
        x: '0%',
        opacity: 1,
        duration: 1.2,
        ease: "power3.inOut"
      });
    }
    
    // Update current slide
    setCurrentSlide(prevIndex);
  }, [currentSlide]);

  // Auto-slide effect
  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000); // Slide every 5 seconds
    return () => clearInterval(slideInterval);
  }, [nextSlide]);

  // Touch handlers for swipe functionality
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <div className="pt-0"> {/* Ensure no top padding */}
      {/* Banner Image with Enhanced Gradient Overlay */}
      <div className="relative w-full h-[70vh] sm:h-[75vh] md:h-[80vh] lg:h-[85vh] overflow-hidden">
        <img 
          src={bannerImage} 
          alt="TechUp Banner" 
          className="w-full h-full object-cover object-center transform scale-[1.02] filter contrast-[1.05] brightness-[0.95]"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/70 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl">
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 animate-fadeIn leading-tight">
              Empowering Young Africans with Tech Skills
            </h1>
            <p className="text-sm xs:text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-3xl mx-auto animate-slideUp leading-relaxed">
              Building a brighter future through technology education, mentorship, and community.
            </p>
            <div className="flex justify-center">
              <Link to="/about" className="liquid-button bg-[#1fc9d5] hover:bg-[#19b6c1] text-white font-bold py-2 px-6 sm:py-3 sm:px-8 md:py-4 md:px-10 rounded-full transition-colors shadow-lg relative overflow-hidden">
                <span className="relative z-10">Learn More</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Initiatives Section - original version */}
      <section className="py-12 sm:py-16 md:py-20 mt-4 sm:mt-6 md:mt-8" ref={initiativesRef}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16 font-montserrat">Our Initiatives</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div 
              className="bg-white py-10 px-6 rounded-lg shadow-md text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:bg-blue-50 icon-pulse initiative-box cursor-pointer opacity-0"
              ref={el => boxesRef.current[0] = el}
            >
              <div className="text-4xl text-[#1fc9d5] mb-4"><i className="fas fa-laptop-code"></i></div>
              <h3 className="text-xl font-bold mb-2 font-montserrat">Tech Tours</h3>
              <p className="text-gray-600 font-raleway">Bringing technology education to schools across Africa.</p>
            </div>
            <div 
              className="bg-white py-10 px-6 rounded-lg shadow-md text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:bg-blue-50 icon-pulse initiative-box cursor-pointer opacity-0"
              ref={el => boxesRef.current[1] = el}
            >
              <div className="text-4xl text-[#1fc9d5] mb-4"><i className="fas fa-podcast"></i></div>
              <h3 className="text-xl font-bold mb-2 font-montserrat">Tech Podcasts</h3>
              <p className="text-gray-600 font-raleway">Inspiring stories and insights from tech leaders.</p>
            </div>
            <div 
              className="bg-white py-10 px-6 rounded-lg shadow-md text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:bg-blue-50 icon-pulse initiative-box cursor-pointer opacity-0"
              ref={el => boxesRef.current[2] = el}
            >
              <div className="text-4xl text-[#1fc9d5] mb-4"><i className="fas fa-code"></i></div>
              <h3 className="text-xl font-bold mb-2 font-montserrat">Bootcamps</h3>
              <p className="text-gray-600 font-raleway">Intensive training programs for in-demand tech skills.</p>
            </div>
            <div 
              className="bg-white py-10 px-6 rounded-lg shadow-md text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:bg-blue-50 icon-pulse initiative-box cursor-pointer opacity-0"
              ref={el => boxesRef.current[3] = el}
            >
              <div className="text-4xl text-[#1fc9d5] mb-4"><i className="fas fa-users"></i></div>
              <h3 className="text-xl font-bold mb-2 font-montserrat">Tech Clubs</h3>
              <p className="text-gray-600 font-raleway">Building communities of young tech enthusiasts.</p>
            </div>
          </div>
          
          {/* Learn More Button */}
          <div className="flex justify-center mt-12 sm:mt-16">
            <Link to="/initiatives" className="liquid-button bg-[#1fc9d5] hover:bg-[#19b6c1] text-white font-bold py-3 px-8 md:py-4 md:px-10 rounded-full transition-colors shadow-lg relative overflow-hidden">
              <span className="relative z-10">Learn More</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Podcast Series Section - original version */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-100" ref={podcastsRef}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16 font-montserrat">Our Podcast Series</h2>
          <p className="text-base md:text-lg text-center mb-8 sm:mb-12 max-w-3xl mx-auto font-raleway">
            Listen to inspiring stories from tech leaders, entrepreneurs, and innovators from across Africa and beyond.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div 
              className="block opacity-0"
              ref={el => podcastBoxesRef.current[0] = el}
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden animate-float h-full">
                <div className="w-full px-4 sm:px-6 pt-4 sm:pt-6 flex justify-center">
                  <div className="w-full overflow-hidden">
                    <img 
                      src="/src/TechUp images/podcast.jpg" 
                      alt="Integrating Tech Incline Policy Into Traditionnal Educational System" 
                      className="w-full transition-transform duration-500 hover:scale-110 transform"
                    />
                  </div>
                </div>
                <div className="px-4 sm:px-6 pt-4 sm:pt-6 pb-3 sm:pb-4 text-center">
                  <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 font-montserrat">Integrating Tech Incline Policy Into Traditionnal Educational System</h3>
                  <p className="text-xs sm:text-sm text-gray-600 font-raleway">Exploring how technology policies can be effectively integrated into traditional education systems across Africa.</p>
                </div>
                <div className="px-4 sm:px-6 py-4 sm:py-6 flex justify-center bg-white">
                  <a 
                    href="https://rb.gy/85m640" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="liquid-button-blue bg-[#1fc9d5] hover:bg-[#19b6c1] text-white font-bold py-2 px-6 rounded-full transition-colors shadow-md relative overflow-hidden inline-block"
                  >
                    <span className="relative z-10">Listen Now</span>
                  </a>
                </div>
              </div>
            </div>
            
            <div 
              className="block opacity-0"
              ref={el => podcastBoxesRef.current[1] = el}
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden animate-float h-full" style={{animationDelay: '0.2s'}}>
                <div className="w-full px-4 sm:px-6 pt-4 sm:pt-6 flex justify-center">
                  <div className="w-full overflow-hidden">
                    <img 
                      src="/src/TechUp images/podcast2.jpg" 
                      alt="The Future Of Work" 
                      className="w-full transition-transform duration-500 hover:scale-110 transform"
                    />
                  </div>
                </div>
                <div className="px-4 sm:px-6 pt-4 sm:pt-6 pb-3 sm:pb-4 text-center">
                  <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 font-montserrat">The Future Of Work</h3>
                  <p className="text-xs sm:text-sm text-gray-600 font-raleway">Examining how technology is reshaping careers and workplace dynamics in the digital age.</p>
                </div>
                <div className="px-4 sm:px-6 py-4 sm:py-6 flex justify-center bg-white">
                  <a 
                    href="https://shorturl.at/eotR0" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="liquid-button-blue bg-[#1fc9d5] hover:bg-[#19b6c1] text-white font-bold py-2 px-6 rounded-full transition-colors shadow-md relative overflow-hidden inline-block"
                  >
                    <span className="relative z-10">Listen Now</span>
                  </a>
                </div>
              </div>
            </div>

            <div 
              className="block opacity-0"
              ref={el => podcastBoxesRef.current[2] = el}
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden animate-float h-full" style={{animationDelay: '0.4s'}}>
                <div className="w-full px-4 sm:px-6 pt-4 sm:pt-6 flex justify-center">
                  <div className="w-full overflow-hidden">
                    <img 
                      src="/src/TechUp images/podcast.jpg" 
                      alt="Understanding Tech Entrepreneurship" 
                      className="w-full transition-transform duration-500 hover:scale-110 transform"
                    />
                  </div>
                </div>
                <div className="px-4 sm:px-6 pt-4 sm:pt-6 pb-3 sm:pb-4 text-center">
                  <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 font-montserrat">Understanding Tech Entrepreneurship</h3>
                  <p className="text-xs sm:text-sm text-gray-600 font-raleway">Insights into building successful tech startups and navigating the entrepreneurial landscape in Africa.</p>
                </div>
                <div className="px-4 sm:px-6 py-4 sm:py-6 flex justify-center bg-white">
                  <a 
                    href="https://shorturl.at/eotR0" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="liquid-button-blue bg-[#1fc9d5] hover:bg-[#19b6c1] text-white font-bold py-2 px-6 rounded-full transition-colors shadow-md relative overflow-hidden inline-block"
                  >
                    <span className="relative z-10">Listen Now</span>
                  </a>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* The Team Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50" ref={teamRef}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16 font-montserrat">The Team</h2>
          
          {/* Desktop Layout - Buttons on sides */}
          <div className="hidden md:flex items-center justify-center relative max-w-6xl mx-auto">
            {/* Left navigation button */}
            <button 
              onClick={prevSlide} 
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-[#1fc9d5] hover:bg-[#19b6c1] text-white w-12 h-12 rounded-full flex items-center justify-center transition-colors shadow-md"
              aria-label="Previous team member"
            >
              <i className="fas fa-chevron-left text-lg"></i>
            </button>
            
            {/* Team member cards container */}
            <div 
              className="relative h-[500px] w-full max-w-2xl overflow-hidden"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              {teamMembers.map((member, index) => (
                <div 
                  className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
                  ref={el => teamBoxesRef.current[index] = el}
                  key={`team-desktop-${index}`}
                  style={{
                    opacity: index === 0 ? 1 : 0,
                    transform: index === 0 ? 'translateX(0%)' : 'translateX(100%)',
                    zIndex: index === 0 ? 3 : 1
                  }}
                >
                  <div className="bg-white py-12 px-10 rounded-lg shadow-lg text-center max-w-lg mx-auto transform transition-transform duration-300 hover:scale-[1.02]">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-56 h-56 rounded-full mx-auto mb-8 object-cover border-4 border-[#1fc9d5]/20"
                      loading="eager"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/src/TechUp images/placeholder.jpg";
                      }}
                    />
                    <h3 className="text-3xl font-bold mb-3 font-montserrat">{member.name}</h3>
                    <p className="text-xl text-[#1fc9d5] font-medium font-raleway mb-5">{member.role}</p>
                    <div className="flex justify-center space-x-6">
                      <a 
                        href={member.twitter} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-[#1fc9d5] transition-colors"
                        aria-label={`${member.name}'s Twitter`}
                      >
                        <i className="fab fa-twitter text-2xl"></i>
                      </a>
                      <a 
                        href={member.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-[#1fc9d5] transition-colors"
                        aria-label={`${member.name}'s LinkedIn`}
                      >
                        <i className="fab fa-linkedin text-2xl"></i>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Right navigation button */}
            <button 
              onClick={nextSlide} 
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-[#1fc9d5] hover:bg-[#19b6c1] text-white w-12 h-12 rounded-full flex items-center justify-center transition-colors shadow-md"
              aria-label="Next team member"
            >
              <i className="fas fa-chevron-right text-lg"></i>
            </button>
          </div>

          {/* Mobile/Tablet Layout - Buttons below */}
          <div className="md:hidden">
            {/* Team member cards container - larger for mobile */}
            <div 
              className="relative h-[550px] sm:h-[600px] w-full max-w-md mx-auto overflow-hidden mb-6"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              {teamMembers.map((member, index) => (
                <div 
                  className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
                  ref={el => mobileTeamBoxesRef.current[index] = el}
                  key={`team-mobile-${index}`}
                  style={{
                    opacity: index === 0 ? 1 : 0,
                    transform: index === 0 ? 'translateX(0%)' : 'translateX(100%)',
                    zIndex: index === 0 ? 3 : 1
                  }}
                >
                  <div className="bg-white py-8 sm:py-10 px-6 sm:px-8 rounded-lg shadow-lg text-center w-full mx-4 transform transition-transform duration-300 hover:scale-[1.02]">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-48 h-48 sm:w-56 sm:h-56 rounded-full mx-auto mb-6 sm:mb-8 object-cover border-4 border-[#1fc9d5]/20"
                      loading="eager"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/src/TechUp images/placeholder.jpg";
                      }}
                    />
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 font-montserrat">{member.name}</h3>
                    <p className="text-base sm:text-lg text-[#1fc9d5] font-medium font-raleway mb-5">{member.role}</p>
                    <div className="flex justify-center space-x-6">
                      <a 
                        href={member.twitter} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-[#1fc9d5] transition-colors"
                        aria-label={`${member.name}'s Twitter`}
                      >
                        <i className="fab fa-twitter text-xl sm:text-2xl"></i>
                      </a>
                      <a 
                        href={member.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-[#1fc9d5] transition-colors"
                        aria-label={`${member.name}'s LinkedIn`}
                      >
                        <i className="fab fa-linkedin text-xl sm:text-2xl"></i>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation buttons below for mobile/tablet */}
            <div className="flex justify-center space-x-4 mb-4">
              <button 
                onClick={prevSlide} 
                className="bg-[#1fc9d5] hover:bg-[#19b6c1] text-white w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-colors shadow-md"
                aria-label="Previous team member"
              >
                <i className="fas fa-chevron-left text-lg sm:text-xl"></i>
              </button>
              
              <button 
                onClick={nextSlide} 
                className="bg-[#1fc9d5] hover:bg-[#19b6c1] text-white w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-colors shadow-md"
                aria-label="Next team member"
              >
                <i className="fas fa-chevron-right text-lg sm:text-xl"></i>
              </button>
            </div>


          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-b from-blue-300 to-blue-200 text-gray-800 py-10 sm:py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 sm:mb-8 font-playfair">Join Us</h2>
          <p className="text-sm sm:text-base mb-8 sm:mb-10 max-w-3xl mx-auto font-raleway">
            Whether you are a young person eager to learn, an educator passionate about teaching, 
            or an organization interested in partnering with us, we invite you to join TechUp in our 
            mission to transform lives through technology education. Together, we can create a 
            brighter future for Nigeria's youth and ensure they are equipped for success in the 
            digital age.
          </p>
          <div className="w-full max-w-3xl mx-auto mb-6 sm:mb-8 relative">
            <div className="absolute inset-0 w-full h-full overflow-hidden">
              <div className="w-full h-full border-b border-blue-400 animate-underline"></div>
            </div>
            <div className="border-b border-blue-400"></div>
          </div>
          <div className="mt-4 sm:mt-6 text-xs sm:text-sm font-medium tracking-widest text-white py-2 px-4 mx-auto inline-block">
            TAG WORD: <span className="italic">Home of Innovation</span>
          </div>
        </div>
      </section>
    </div>
  );
}

const teamMembers = [
  {
    name: "Mercy Thaddeus",
    role: "Co-Founder",
    image: "/src/TechUp images/teamimg1.jpeg",
    twitter: "https://twitter.com/mercythaddeus",
    linkedin: "https://linkedin.com/in/mercythaddeus"
  },
  {
    name: "Boluwatife Ebenezer",
    role: "Co-Founder",
    image: "/src/TechUp images/teamImg4.png",
    twitter: "https://twitter.com/boluwatifeebenezer",
    linkedin: "https://linkedin.com/in/boluwatifeebenezer"
  },
  {
    name: "John Toluwalope",
    role: "Content Creator",
    image: "/src/TechUp images/teamimg2.jpeg",
    twitter: "https://twitter.com/johntoluwalope",
    linkedin: "https://linkedin.com/in/johntoluwalope"
  },
  {
    name: "Toluwalope Idowu",
    role: "Project Manager",
    image: "/src/TechUp images/teamimg3.jpeg",
    twitter: "https://twitter.com/toluwalopeidowu",
    linkedin: "https://linkedin.com/in/toluwalopeidowu"
  },
  {
    name: "Blessing Faith",
    role: "Project Manager",
    image: "/src/TechUp images/teamimg5.jpg",
    twitter: "https://twitter.com/blessingfaith",
    linkedin: "https://linkedin.com/in/blessingfaith"
  },
  {
    name: "David Thaddeus",
    role: "Frontend Developer",
    image: "/src/TechUp images/davidImg.jpg",
    twitter: "https://twitter.com/davidthaddeus",
    linkedin: "https://linkedin.com/in/davidthaddeus"
  }
];

export default HomePage;
