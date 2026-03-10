import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from "./pages/Home";
import About from './pages/About';
import Projects from './pages/ProjectsPage';
import Contact from './pages/ContactUs';

import Preloader from './components/Preloader';
import AppButtons from './components/AppButtons';
import DownloadBrochure from "./components/DownloadBrochure";

function App() {
 const [loadingDone, setLoadingDone] = useState(() => {
  return sessionStorage.getItem("preloaderShown") === "true";
});


  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        document.body.classList.add("scrolled");
      } else {
        document.body.classList.remove("scrolled");
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Router>
      {/* Preloader always on top */}
{!loadingDone && (
  <Preloader
    onFinish={() => {
      sessionStorage.setItem("preloaderShown", "true");
      setLoadingDone(true);
    }}
  />
)}

  {/* Main App is ALWAYS rendered */}
        <Navbar />
        <DownloadBrochure />
        <AppButtons/>
      <div className="App">

        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;