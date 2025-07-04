import { useRef, useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import bannerImage from '../TechUp_images/techBg3.jpg';
import podcastImage from '../TechUp_images/podcast.jpg';
import podcast2Image from '../TechUp_images/podcast2.jpg';
import podcast3Image from '../TechUp_images/podcast3.jpg';
import podcast4Image from '../TechUp_images/podcast4.jpg';
import podcast1Image from '../TechUp_images/podcast1.jpg';
import teamimg1 from '../TechUp_images/teamimg1.jpeg';
import teamImg4 from '../TechUp_images/teamImg4.png';
import teamimg2 from '../TechUp_images/teamimg2.jpeg';
import teamimg3 from '../TechUp_images/teamimg3.jpeg';
import teamImg5 from '../TechUp_images/teamImg5.jpg';
import davidImg from '../TechUp_images/davidImg.jpg';
import teamImg6 from '../TechUp_images/teamImg6.jpg';

// Podcast data
const podcastData = [
  {
    title: "Integrating Tech Incline Policy Into Traditional Educational System",
    description: "Exploring how technology policies can be effectively integrated into traditional education systems across Africa.",
    image: podcastImage,
    link: "https://anchor.fm/techup9/episodes/Integrating-Tech-incline-Policy-into-the-Traditional-Education-system-e2d45ef"
  },
  {
    title: "The Future Of Work",
    description: "Examining how technology is reshaping careers and workplace dynamics in the digital age.",
    image: podcast2Image,
    link: "https://anchor.fm/techup9/episodes/TechUp-Series-Future-of-work-e2a268u"
  },
  {
    title: "New Generation Skills and Possible Threat",
    description: "Exploring emerging technologies and their potential impact on the future workforce.",
    image: podcast4Image,
    link: "https://rb.gy/f9mi65"
  },
  {
    title: "Building A Career In Tech",
    description: "Strategies and insights for developing a successful career in the technology industry.",
    image: podcast1Image,
    link: "https://x.com/TechUp_office/status/1841208406322921624"
  },
  {
    title: "Mastering your tech career",
    description: "Advanced strategies for growth and development in the technology sector.",
    image: podcast3Image,
    link: "https://x.com/i/spaces/1djGXrRBAovxZ"
  }
];

function HomePage() {
  const location = useLocation();
  const initiativesRef = useRef(null);
  const boxesRef = useRef([]);
  const podcastsRef = useRef(null);
  const podcastBoxesRef = useRef([]);
  const teamRef = useRef(null);
  const teamBoxesRef = useRef([]);
  const mobileTeamBoxesRef = useRef([]);
  const [currentTeamSlide, setCurrentTeamSlide] = useState(0);
  const [currentPodcastSlide, setCurrentPodcastSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  
  // Effect to handle scrolling to podcasts section when navigated from initiatives page
  useEffect(() => {
    if (location.state?.scrollToPodcasts && podcastsRef.current) {
      setTimeout(() => {
        podcastsRef.current.scrollIntoView({ behavior: 'smooth' });
      }, 500); // Small delay to ensure the page is fully loaded
    }
  }, [location.state]);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  // Simplified useEffect without animations
  useEffect(() => {
    // Make all boxes visible immediately
    boxesRef.current.forEach((box) => {
      if (box) {
        box.style.opacity = 1;
        box.style.transform = 'translateY(0)';
      }
    });

    // No cleanup needed
  }, []); // Empty dependency array - run once on mount

  // Simplified useEffect for team animations
  useEffect(() => {
    const refs = window.innerWidth < 768 ? mobileTeamBoxesRef.current : teamBoxesRef.current;
    
    // Position all boxes with simple style changes
    refs.forEach((box, index) => {
      if (!box) return;
      
      // Set positions for all boxes
      if (index === currentTeamSlide) {
        box.style.transform = 'translateX(0%)';
        box.style.opacity = 1;
        box.style.zIndex = 3;
      } else if (index < currentTeamSlide) {
        box.style.transform = 'translateX(-100%)';
        box.style.opacity = 0;
        box.style.zIndex = 1;
      } else {
        box.style.transform = 'translateX(100%)';
        box.style.opacity = 0;
        box.style.zIndex = 1;
      }
    });
  }, [currentTeamSlide]);
  
  // Effect for podcast carousel animations
  useEffect(() => {
    for (let i = 0; i < podcastBoxesRef.current.length; i++) {
      const box = podcastBoxesRef.current[i];
      if (!box) continue;
      
      if (i === currentPodcastSlide) {
        box.style.transform = 'translateX(0%)';
        box.style.opacity = 1;
        box.style.zIndex = 3;
      } else if (i < currentPodcastSlide) {
        box.style.transform = 'translateX(-100%)';
        box.style.opacity = 0;
        box.style.zIndex = 1;
      } else {
        box.style.transform = 'translateX(100%)';
        box.style.opacity = 0;
        box.style.zIndex = 1;
      }
    }
  }, [currentPodcastSlide]);

  // Simplified carousel navigation functions for team
  const nextTeamSlide = useCallback(() => {
    const refs = window.innerWidth < 768 ? mobileTeamBoxesRef.current : teamBoxesRef.current;
    if (!refs[currentTeamSlide]) return;
    
    const maxSlide = teamMembers.length - 1;
    const nextIndex = currentTeamSlide >= maxSlide ? 0 : currentTeamSlide + 1;
    
    // Simply update the current slide - the useEffect will handle the UI
    setCurrentTeamSlide(nextIndex);
  }, [currentTeamSlide]);

  const prevTeamSlide = useCallback(() => {
    const refs = window.innerWidth < 768 ? mobileTeamBoxesRef.current : teamBoxesRef.current;
    if (!refs[currentTeamSlide]) return;
    
    const maxSlide = teamMembers.length - 1;
    const prevIndex = currentTeamSlide <= 0 ? maxSlide : currentTeamSlide - 1;
    
    // Simply update the current slide - the useEffect will handle the UI
    setCurrentTeamSlide(prevIndex);
  }, [currentTeamSlide]);

  // Podcast carousel navigation functions
  const nextPodcastSlide = useCallback(() => {
    if (!podcastBoxesRef.current[currentPodcastSlide]) return;
    
    const maxSlide = podcastData.length - 1;
    const nextIndex = currentPodcastSlide >= maxSlide ? 0 : currentPodcastSlide + 1;
    
    setCurrentPodcastSlide(nextIndex);
  }, [currentPodcastSlide]);

  const prevPodcastSlide = useCallback(() => {
    if (!podcastBoxesRef.current[currentPodcastSlide]) return;
    
    const maxSlide = podcastData.length - 1;
    const prevIndex = currentPodcastSlide <= 0 ? maxSlide : currentPodcastSlide - 1;
    
    setCurrentPodcastSlide(prevIndex);
  }, [currentPodcastSlide]);

  // Auto-slide effect for team
  useEffect(() => {
    const slideInterval = setInterval(nextTeamSlide, 5000); // Slide every 5 seconds
    return () => clearInterval(slideInterval);
  }, [nextTeamSlide]);
  
  // Auto-slide effect for podcasts
  useEffect(() => {
    const podcastSlideInterval = setInterval(nextPodcastSlide, 6000); // Slide every 6 seconds
    return () => clearInterval(podcastSlideInterval);
  }, [nextPodcastSlide]);

  // Touch handlers for swipe functionality
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = (e, isPodcast = false) => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isPodcast) {
      if (isLeftSwipe) {
        nextPodcastSlide();
      } else if (isRightSwipe) {
        prevPodcastSlide();
      }
    } else {
      if (isLeftSwipe) {
        nextTeamSlide();
      } else if (isRightSwipe) {
        prevTeamSlide();
      }
    }
  };
  
  // Specialized touch handlers for podcast carousel
  const onPodcastTouchEnd = (e) => onTouchEnd(e, true);

  return (
    <div className="pt-0"> {/* Ensure no top padding */}
      {/* Banner Image with Enhanced Gradient Overlay */}
      <div className="relative w-full h-[70vh] sm:h-[75vh] md:h-[80vh] lg:h-[85vh] overflow-hidden">
        <img 
          src={bannerImage} 
          alt="TechUp Banner" 
          className="w-full h-full object-cover object-center"
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
              className="bg-white py-10 px-6 rounded-lg shadow-md text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:bg-blue-50 icon-pulse initiative-box cursor-pointer"
              ref={el => boxesRef.current[0] = el}
            >
              <div className="text-4xl text-[#1fc9d5] mb-4"><i className="fas fa-laptop-code"></i></div>
              <h3 className="text-xl font-bold mb-2 font-montserrat">Tech Tours</h3>
              <p className="text-gray-600 font-raleway">Bringing technology education to schools across Africa.</p>
            </div>
            <div 
              className="bg-white py-10 px-6 rounded-lg shadow-md text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:bg-blue-50 icon-pulse initiative-box cursor-pointer"
              ref={el => boxesRef.current[1] = el}
            >
              <div className="text-4xl text-[#1fc9d5] mb-4"><i className="fas fa-podcast"></i></div>
              <h3 className="text-xl font-bold mb-2 font-montserrat">Tech Podcasts</h3>
              <p className="text-gray-600 font-raleway">Inspiring stories and insights from tech leaders.</p>
            </div>
            <div 
              className="bg-white py-10 px-6 rounded-lg shadow-md text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:bg-blue-50 icon-pulse initiative-box cursor-pointer"
              ref={el => boxesRef.current[2] = el}
            >
              <div className="text-4xl text-[#1fc9d5] mb-4"><i className="fas fa-code"></i></div>
              <h3 className="text-xl font-bold mb-2 font-montserrat">Bootcamps</h3>
              <p className="text-gray-600 font-raleway">Intensive training programs for in-demand tech skills.</p>
            </div>
            <div 
              className="bg-white py-10 px-6 rounded-lg shadow-md text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:bg-blue-50 icon-pulse initiative-box cursor-pointer"
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

      {/* Podcast Series Section - with carousel */}
      <section id="podcasts" className="py-12 sm:py-16 md:py-20 bg-gray-100" ref={podcastsRef}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16 font-montserrat">Our Podcast Series</h2>
          <p className="text-base md:text-lg text-center mb-8 sm:mb-12 max-w-3xl mx-auto font-raleway">
            Listen to inspiring stories from tech leaders, entrepreneurs, and innovators from across Africa and beyond.
          </p>
          
          <div className="max-w-6xl mx-auto">
            {/* Podcast carousel */}
            <div className="flex items-center justify-center relative max-w-sm mx-auto">
              {/* Carousel container */}
              <div 
                className="relative h-[600px] w-full overflow-hidden px-6"
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onPodcastTouchEnd}
              >
                {/* First podcast */}
                <div 
                  className="absolute top-0 left-0 w-full h-full"
                  ref={el => podcastBoxesRef.current[0] = el}
                  style={{
                    opacity: currentPodcastSlide === 0 ? 1 : 0,
                    transform: currentPodcastSlide === 0 ? 'translateX(0%)' : (currentPodcastSlide > 0 ? 'translateX(-100%)' : 'translateX(100%)'),
                    zIndex: currentPodcastSlide === 0 ? 3 : 1,
                    transition: 'transform 0.5s ease, opacity 0.5s ease'
                  }}
                >
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full p-4 pb-32">
                      <div className="h-full w-full border-4 border-[#1fc9d5] rounded-lg overflow-hidden">
                        <img 
                          src={podcastData[0].image} 
                          alt={podcastData[0].title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="mt-6 text-center">
                        <a 
                          href={podcastData[0].link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-block bg-[#1fc9d5] hover:bg-[#19b6c1] text-white font-bold py-3 px-8 rounded-full transition-colors shadow-lg"
                        >
                          Listen Now
                        </a>
                      </div>
                  </div>
                </div>
                
                {/* Second podcast */}
                <div 
                  className="absolute top-0 left-0 w-full h-full"
                  ref={el => podcastBoxesRef.current[1] = el}
                  style={{
                    opacity: currentPodcastSlide === 1 ? 1 : 0,
                    transform: currentPodcastSlide === 1 ? 'translateX(0%)' : (currentPodcastSlide > 1 ? 'translateX(-100%)' : 'translateX(100%)'),
                    zIndex: currentPodcastSlide === 1 ? 3 : 1,
                    transition: 'transform 0.5s ease, opacity 0.5s ease'
                  }}
                >
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full p-4 pb-32">
                      <div className="h-full w-full border-4 border-[#1fc9d5] rounded-lg overflow-hidden">
                        <img 
                          src={podcastData[1].image} 
                          alt={podcastData[1].title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="mt-6 text-center">
                        <a 
                          href={podcastData[1].link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-block bg-[#1fc9d5] hover:bg-[#19b6c1] text-white font-bold py-3 px-8 rounded-full transition-colors shadow-lg"
                        >
                          Listen Now
                        </a>
                      </div>
                  </div>
                </div>
                
                {/* Third podcast */}
                <div 
                  className="absolute top-0 left-0 w-full h-full"
                  ref={el => podcastBoxesRef.current[2] = el}
                  style={{
                    opacity: currentPodcastSlide === 2 ? 1 : 0,
                    transform: currentPodcastSlide === 2 ? 'translateX(0%)' : (currentPodcastSlide > 2 ? 'translateX(-100%)' : 'translateX(100%)'),
                    zIndex: currentPodcastSlide === 2 ? 3 : 1,
                    transition: 'transform 0.5s ease, opacity 0.5s ease'
                  }}
                >
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full p-4 pb-32">
                      <div className="h-full w-full border-4 border-[#1fc9d5] rounded-lg overflow-hidden">
                        <img 
                          src={podcastData[2].image} 
                          alt={podcastData[2].title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="mt-6 text-center">
                        <a 
                          href={podcastData[2].link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-block bg-[#1fc9d5] hover:bg-[#19b6c1] text-white font-bold py-3 px-8 rounded-full transition-colors shadow-lg"
                        >
                          Listen Now
                        </a>
                      </div>
                  </div>
                </div>
                
                {/* Fourth podcast */}
                <div 
                  className="absolute top-0 left-0 w-full h-full"
                  ref={el => podcastBoxesRef.current[3] = el}
                  style={{
                    opacity: currentPodcastSlide === 3 ? 1 : 0,
                    transform: currentPodcastSlide === 3 ? 'translateX(0%)' : (currentPodcastSlide > 3 ? 'translateX(-100%)' : 'translateX(100%)'),
                    zIndex: currentPodcastSlide === 3 ? 3 : 1,
                    transition: 'transform 0.5s ease, opacity 0.5s ease'
                  }}
                >
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full p-4 pb-32">
                      <div className="h-full w-full border-4 border-[#1fc9d5] rounded-lg overflow-hidden">
                        <img 
                          src={podcastData[3].image} 
                          alt={podcastData[3].title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="mt-6 text-center">
                        <a 
                          href={podcastData[3].link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-block bg-[#1fc9d5] hover:bg-[#19b6c1] text-white font-bold py-3 px-8 rounded-full transition-colors shadow-lg"
                        >
                          Listen Now
                        </a>
                      </div>
                  </div>
                </div>
                
                {/* Fifth podcast */}
                <div 
                  className="absolute top-0 left-0 w-full h-full"
                  ref={el => podcastBoxesRef.current[4] = el}
                  style={{
                    opacity: currentPodcastSlide === 4 ? 1 : 0,
                    transform: currentPodcastSlide === 4 ? 'translateX(0%)' : (currentPodcastSlide > 4 ? 'translateX(-100%)' : 'translateX(100%)'),
                    zIndex: currentPodcastSlide === 4 ? 3 : 1,
                    transition: 'transform 0.5s ease, opacity 0.5s ease'
                  }}
                >
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full p-4 pb-32">
                      <div className="h-full w-full border-4 border-[#1fc9d5] rounded-lg overflow-hidden">
                        <img 
                          src={podcastData[4].image} 
                          alt={podcastData[4].title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="mt-6 text-center">
                        <a 
                          href={podcastData[4].link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-block bg-[#1fc9d5] hover:bg-[#19b6c1] text-white font-bold py-3 px-8 rounded-full transition-colors shadow-lg"
                        >
                          Listen Now
                        </a>
                      </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Navigation buttons below for podcast */}
            <div className="flex justify-center space-x-4 mt-6 mb-4">
              <button 
                onClick={prevPodcastSlide} 
                className="bg-[#1fc9d5] hover:bg-[#19b6c1] text-white w-12 h-12 rounded-full flex items-center justify-center transition-colors shadow-md"
                aria-label="Previous podcast"
              >
                <i className="fas fa-chevron-left text-lg"></i>
              </button>
              
              <button 
                onClick={nextPodcastSlide} 
                className="bg-[#1fc9d5] hover:bg-[#19b6c1] text-white w-12 h-12 rounded-full flex items-center justify-center transition-colors shadow-md"
                aria-label="Next podcast"
              >
                <i className="fas fa-chevron-right text-lg"></i>
              </button>
            </div>
            
            {/* Carousel indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {podcastData.map((_, index) => (
                <button
                  key={`podcast-indicator-${index}`}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentPodcastSlide ? 'bg-[#1fc9d5]' : 'bg-gray-300'
                  }`}
                  onClick={() => setCurrentPodcastSlide(index)}
                  aria-label={`Go to podcast ${index + 1}`}
                />
              ))}
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
              onClick={prevTeamSlide} 
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
                        e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%236b7280' font-family='Arial, sans-serif' font-size='14'%3EImage not found%3C/text%3E%3C/svg%3E";
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
                      {member.linkedin && (
                        <a 
                          href={member.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-[#1fc9d5] transition-colors"
                          aria-label={`${member.name}'s LinkedIn`}
                        >
                          <i className="fab fa-linkedin text-2xl"></i>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Right navigation button */}
            <button 
              onClick={nextTeamSlide} 
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
                        e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%236b7280' font-family='Arial, sans-serif' font-size='14'%3EImage not found%3C/text%3E%3C/svg%3E";
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
                      {member.linkedin && (
                        <a 
                          href={member.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-[#1fc9d5] transition-colors"
                          aria-label={`${member.name}'s LinkedIn`}
                        >
                          <i className="fab fa-linkedin text-xl sm:text-2xl"></i>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation buttons below for mobile/tablet */}
            <div className="flex justify-center space-x-4 mb-4">
              <button 
                onClick={prevTeamSlide} 
                className="bg-[#1fc9d5] hover:bg-[#19b6c1] text-white w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-colors shadow-md"
                aria-label="Previous team member"
              >
                <i className="fas fa-chevron-left text-lg sm:text-xl"></i>
              </button>
              
              <button 
                onClick={nextTeamSlide} 
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
    image: teamimg1,
    twitter: "https://x.com/global_techgirl",
    linkedin: "http://linkedin.com/in/mercythaddeus"
  },
  {
    name: "Boluwatife (Ebenezer) Majoyeogbe",
    role: "Founder",
    image: teamImg4,
    twitter: "https://x.com/boluwatifeeben2",
    linkedin: "http://linkedin.com/in/boluwatife-majoyeogbe-b154b1147"
  },
  {
    name: "Daniel Abidoye",
    role: "Designer",
    image: teamimg2,
    twitter: "https://x.com/DAbidoye55950",
    linkedin: null
  },
  {
    name: "Toluwalope Idowu",
    role: "Project Manager",
    image: teamimg3,
    twitter: "https://x.com/toluwalopeidowu",
    linkedin: "http://linkedin.com/in/toluwalopeidowu"
  },
  {
    name: "Shukurat Akanbi",
    role: "Program Coordinator",
    image: teamImg5,
    twitter: "https://x.com/teh_mmyh",
    linkedin: "http://linkedin.com/in/akanbi-shukurat"
  },
  {
    name: "David Thaddeus",
    role: "Software Developer",
    image: davidImg,
    twitter: "https://x.com/TDavelife",
    linkedin: "https://www.linkedin.com/in/david-thaddeus"
  },
  {
    name: "Esther Afolabi",
    role: "Social Media Manager",
    image: teamImg6,
    twitter: "https://x.com/oluwabusolami_a",
    linkedin: "http://linkedin.com/in/estherafolabi"
  }
];

export default HomePage;
