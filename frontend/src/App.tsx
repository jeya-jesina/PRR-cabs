import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import HeroSection from "./pages/prb_car_rental";
import Header from "./components/Header";
import AboutSection from "./pages/AboutSection";
import ServicesPage from "./pages/services/services-page";

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop/>
      <Header/>
      <Routes>
        <Route path="/" element={<HeroSection/>} />
        <Route path="/services" element={<ServicesPage/>} />
      </Routes>
    </Router>
  );
};
export default App;
