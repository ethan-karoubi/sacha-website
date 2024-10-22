import React from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';

// Section des témoignages
const TestimonialsSection = () => {
  return (
    <section className="testimonials">
      <div
        className="background bg-img bg-fixed"
        style={{
          backgroundImage: `url('/img/2.jpg')`,
          height: '50vh', // Ajuste la hauteur
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',           // Flexbox pour centrer
          justifyContent: 'center',  // Centre horizontalement
          alignItems: 'center',      // Centre verticalement
          textAlign: 'center',       // Centre le texte
          padding: 0,                // Supprime tout padding ajouté par section-padding
        }}
        data-overlay-dark="3"
      >
        <div className="container">
          <div className="row" style={{ margin: 0 }}> {/* Enlève la marge */}
            <div className="col-md-8 mb-0"> {/* Retire la marge du bas */}
              <h2 data-aos="fade-up">Découvrez nos vidéos exclusives et laissez-vous inspirer par nos services</h2>
            </div>
            <div className="col-md-4 mb-0"> {/* Retire la marge du bas */}
              <a data-aos="fade-up" href="/service" className="button-tersiyer2 mt-3">
                Cliquez ici pour en savoir plus !
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


// Section des logos des clients
const ClientsSection = () => {
  return (
    <section className="clients">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
           <h1 data-aos="fade-up" className='spin-text'>JACOB PRODUCTION</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

// Composant principal qui combine les deux sections
const BannerVideo = () => {
  return (
    <div>
         <ClientsSection />
      <TestimonialsSection />
     
    </div>
  );
};

export default BannerVideo;
