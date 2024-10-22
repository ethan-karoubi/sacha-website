import React from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";

const ClientsCarousel = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <OwlCarousel
            className="owl-theme"
            loop
            margin={30}
            nav={false}
            dots={false} 
            autoplay={true}
            autoplayTimeout={3000}
            responsive={{
              0: { items: 1 },
              600: { items: 3 },
              1000: { items: 5 },
            }}
          >
            <div className="clients-logo">
              <a href="#0">
                <img src="./img/logo/avene.png" alt="Avene Logo" className="logo-image" />
              </a>
            </div>
            <div className="clients-logo">
              <a href="#0">
                <img src="./img/logo/backmarket.png" alt="Back Market Logo" className="logo-image" />
              </a>
            </div>
            <div className="clients-logo">
              <a href="#0">
                <img src="./img/logo/edenred.png" alt="Edenred Logo" className="logo-image" />
              </a>
            </div>
            <div className="clients-logo">
              <a href="#0">
                <img src="./img/logo/microsoft.jpg" alt="Microsoft Logo" className="logo-image" />
              </a>
            </div>
            <div className="clients-logo">
              <a href="#0">
                <img src="./img/logo/pepsi.png" alt="Pepsi Logo" className="logo-image" />
              </a>
            </div>
            <div className="clients-logo">
              <a href="#0">
                <img src="./img/logo/clarins.png" alt="Clarins Logo" className="logo-image" />
              </a>
            </div>
            <div className="clients-logo">
              <a href="#0">
                <img src="./img/logo/universal.png" alt="Universal Logo" className="logo-image" />
              </a>
            </div>
            <div className="clients-logo">
              <a href="#0">
                <img src="./img/logo/sonymusic.png" alt="Sony Music Logo" className="logo-image" />
              </a>
            </div>
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
};

export default ClientsCarousel;
