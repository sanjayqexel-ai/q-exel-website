import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Placements from './pages/Placements';
import Booking from './pages/Booking';
import Documentation from './pages/Documentation';
import TalentSolutions from './pages/TalentSolutions';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/placements" element={<Placements />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/talent-solutions" element={<TalentSolutions />} />
      </Routes>
      <Footer />
    </>
  );
}
