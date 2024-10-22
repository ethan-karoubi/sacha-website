import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AOS from "aos";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import BannerVideo from "./Component/bannerVideo";
import Navbar from "./Component/navBar";
import Footer from "./Component/footer";
import Home from "./Component/Home";
import PricingSection from "./Component/work";
import About from "./Component/about";
import Services from "./Component/service";
import MyWorks from "./Component/work";
import GalleryR from "./Component/reportage";
import GalleryP from "./Component/portrait";
import GalleryP2 from "./Component/packshot";
import GalleryI from "./Component/insert";
import GalleryE from "./Component/evenement";
import Contact from "./Component/contact";
import Team from "./Component/team";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durée des animations en millisecondes
      once: false, // Les animations ne se jouent qu'une fois
      mirror: true, // Les animations ne se jouent pas en faisant défiler vers le haut
    });
  }, []);
  return (
    <Router>
      <div className="App">
        {/* Navbar affichée sur toutes les pages */}
        <Navbar />

        {/* Routes */}
        <Routes>
          {/* Page Home */}
          <Route
            path="/"
            element={
              <>
                <Home />
                <About />
                <BannerVideo />
                <Services />
                <Contact />
              </>
            }
          />

          {/* Page About */}
          <Route
            path="/about"
            element={
              <>
                <About />
                <Team />
              </>
            }
          />

          {/* Page Nos Services */}
          <Route path="/service" element={<PricingSection />} />

          {/* Page Nos Réalisations */}
          <Route
            path="/rea"
            element={
              <>
                <MyWorks />
                <Services />
              </>
            }
          />

          {/* Sous-routes pour chaque galerie sous "Nos Réalisations" */}
          <Route path="/rea/reportage" element={<GalleryR />} />
          <Route path="/rea/portrait" element={<GalleryP />} />
          <Route path="/rea/evenement" element={<GalleryE />} />
          <Route path="/rea/insert" element={<GalleryI />} />
          <Route path="/rea/packshot" element={<GalleryP2 />} />

          {/* Page Contact */}
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* Footer affiché sur toutes les pages */}
        <Footer />
      </div>
    </Router>
  );
}


export default App;
