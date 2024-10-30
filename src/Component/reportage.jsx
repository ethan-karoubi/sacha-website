import React, { useState } from 'react';
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";

const GalleryR = () => {
  const images = [
    { src: "/img/reportage/1.jpg", alt: "Reportage 1", category: "Reportage", title: "Photography Title 1" },
    { src: "/img/reportage/2.jpg", alt: "Reportage 2", category: "Reportage", title: "Photography Title 2" },
    { src: "/img/reportage/3.jpg", alt: "Reportage 3", category: "Reportage", title: "Photography Title 3" },
    { src: "/img/reportage/4.jpg", alt: "Reportage 4", category: "Reportage", title: "Photography Title 4" },
    { src: "/img/reportage/5.jpg", alt: "Reportage 5", category: "Reportage", title: "Photography Title 5" },
    { src: "/img/reportage/6.jpg", alt: "Reportage 6", category: "Reportage", title: "Photography Title 6" },
    { src: "/img/reportage/7.jpg", alt: "Reportage 7", category: "Reportage", title: "Photography Title 7" },
    { src: "/img/reportage/8.jpg", alt: "Reportage 8", category: "Reportage", title: "Photography Title 8" },
    { src: "/img/reportage/9.jpg", alt: "Reportage 9", category: "Reportage", title: "Photography Title 9" },
    { src: "/img/reportage/10.jpg", alt: "Reportage 10", category: "Reportage", title: "Photography Title 10" }
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  return (
    <>
      {/* Section Header */}
      <section
        className="banner-header banner-img banner-img-top section-padding valign bg-img bg-fixed banner-overlay"
        data-overlay-darkgray="1"
        style={{ backgroundImage: "url('/img/banner2.jpg')" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <h1>Reportage Gallery</h1>
              <hr className="border-1" />
              <p>
                Découvrez notre collection de photos de reportage, capturant des moments uniques et authentiques.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Portfolio */}
      <section className="projects2 section-padding bg-blck">
        <div className="container">
          <div className="row">
            {images.map((image, index) => (
              <div key={index} className="col-12 col-md-4 portfolio-masonry-wrapper-padding">
                <div className="portfolio-item-wrapp" onClick={() => { setPhotoIndex(index); setIsOpen(true); }}>
                  <div className="portfolio-item">
                    <div className="portfolio-masonry-wrapper">
                      <img src={image.src} alt={image.alt} className="img-fluid portfolio-masonry-item-img" />
                      <div className="portfolio-masonry-item-content">
                        <div className="portfolio-masonry-item-category">{image.category}</div>
                        <h4 className="portfolio-masonry-item-title">{image.title}</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox */}
        {isOpen && (
          <Lightbox
            images={images.map((img) => ({ url: img.src, title: img.title }))}
            startIndex={photoIndex}
            onClose={() => setIsOpen(false)}
          />
        )}
      </section>
    </>
  );
};

export default GalleryR;
