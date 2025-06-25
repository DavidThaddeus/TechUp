  import React, { useEffect, lazy, Suspense } from 'react';
  import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
  import Header from './components/Header';
  import Footer from './components/Footer';
  
  const HomePage = lazy(() => import('./pages/HomePage'));
  const AboutPage = lazy(() => import('./pages/AboutPage'));
  const InitiativesPage = lazy(() => import('./pages/InitiativesPage'));
  const ImpactPage = lazy(() => import('./pages/ImpactPage'));
  const JoinUsPage = lazy(() => import('./pages/JoinUsPage'));
  
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
            <Suspense fallback={null}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/initiatives" element={<InitiativesPage />} />
                <Route path="/impact" element={<ImpactPage />} />
                <Route path="/join-us" element={<JoinUsPage />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </Router>
    );
  }
  
  export default App;