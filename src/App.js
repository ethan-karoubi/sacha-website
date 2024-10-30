import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import AOS from "aos";
import React, { useEffect, useState } from "react";
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
import Preloader from "./Component/preloader"; // Importez le composant Preloader
import ScrollToTop from "./Component/Progresstop"; // Importez le composant ScrollToTop

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialisation de AOS
    AOS.init({
      duration: 1000,
      once: false,
      mirror: false,
    });

    // Simuler un délai de chargement
    const timer = setTimeout(() => setLoading(false), 2000); // Ajustez la durée selon vos besoins

    return () => clearTimeout(timer); // Nettoyage du timer lorsque le composant est démonté
  }, []);

  return (
    <Router>
      <div className="App">
        {/* Afficher le préloader si "loading" est true */}
        {loading && <Preloader />}

        {/* Contenu principal */}
        {!loading && (
          <>
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
                    <MyWorks />
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
                    <Services />
                  </>
                }
              />

              {/* Sous-routes pour chaque galerie sous "Nos Réalisations" */}
<<<<<<< HEAD
              <Route path="/rea/reportage" element={<GalleryR />} />
              <Route path="/rea/portrait" element={<GalleryP />} />
              <Route path="/rea/evenement" element={<GalleryE />} />
              <Route path="/rea/insert" element={<GalleryI />} />
              <Route path="/rea/packshot" element={<GalleryP2 />} />
=======
              <Route path="/photo/reportage" element={<GalleryR />} />
              <Route path="/photo/portrait" element={<GalleryP />} />
              <Route path="/photo/evenement" element={<GalleryE />} />
              <Route path="/photo/insert" element={<GalleryI />} />
              <Route path="/photo/packshot" element={<GalleryP2 />} />
>>>>>>> afe7857 (Initial commit)

              {/* Page Contact */}
              <Route path="/contact" element={<Contact />} />
            </Routes>

            {/* Footer affiché sur toutes les pages */}
            <Footer />

            {/* Scroll to top */}
            <ScrollToTop />
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
