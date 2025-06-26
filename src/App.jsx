  import React, { useEffect } from 'react';
  import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
  import Header from './components/Header';
  import Footer from './components/Footer';
  import HomePage from './pages/HomePage';
  import AboutPage from './pages/AboutPage';
  import InitiativesPage from './pages/InitiativesPage';
  import ImpactPage from './pages/ImpactPage';
  import JoinUsPage from './pages/JoinUsPage';
  import TechToursPage from './pages/TechToursPage';
  
  // Component to handle scroll to top on route change
  function ScrollToTop() {
    const { pathname } = useLocation();
  
    useEffect(() => {
      // Force scroll to top immediately and smoothly
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
  
      // Also try document methods as backup
      document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);
  
    return null;
  }
  
  function App() {
    return (
      <Router>
        <div className="app">
          <ScrollToTop />
          <Header />
          <main className="pt-20"> {/* Increased padding-top to account for taller header */}
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/initiatives" element={<InitiativesPage />} />
              <Route path="/impact" element={<ImpactPage />} />
              <Route path="/join-us" element={<JoinUsPage />} />
              <Route path="/tech-tours" element={<TechToursPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    );
  }
  
  export default App;