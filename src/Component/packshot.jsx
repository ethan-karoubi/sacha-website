// Component/GalleryP2.js
import React, { useState } from 'react';
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";

const GalleryP2 = () => {
  const images = [
    { src: "/img/packshot/1.jpg", alt: "Packshot 1", title: "Photography Title 1" },
    { src: "/img/packshot/14.jpg", alt: "Packshot 14", title: "Photography Title 14" },
    { src: "/img/packshot/3.jpg", alt: "Packshot 3", title: "Photography Title 3" },
    { src: "/img/packshot/5.jpg", alt: "Packshot 5", title: "Photography Title 5" },
    { src: "/img/packshot/6.jpg", alt: "Packshot 6", title: "Photography Title 6" },
    { src: "/img/packshot/7.jpg", alt: "Packshot 7", title: "Photography Title 7" },
    { src: "/img/packshot/8.jpg", alt: "Packshot 8", title: "Photography Title 8" },
    { src: "/img/packshot/9.jpg", alt: "Packshot 9", title: "Photography Title 9" },
    { src: "/img/packshot/11.jpg", alt: "Packshot 11", title: "Photography Title 11" },
    { src: "/img/packshot/12.jpg", alt: "Packshot 12", title: "Photography Title 12" },
    { src: "/img/packshot/13.jpg", alt: "Packshot 13", title: "Photography Title 13" },
    { src: "/img/packshot/2.jpg", alt: "Packshot 2", title: "Photography Title 2" }
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
              <h1>Packshot Gallery</h1>
              <hr className="border-1" />
              <p>
                Découvrez notre collection de photos packshot, capturant la beauté et la précision de vos produits.
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
                <div
                  className="gallery-item img-zoom"
                  onClick={() => { setPhotoIndex(index); setIsOpen(true); }}
                >
                  <div className="gallery-box">
                    <div className="gallery-img">
                      <img src={image.src} alt={image.alt} className="img-fluid mx-auto d-block" />
                    </div>
                    <div className="portfolio-masonry-item-content">
                      <div className="portfolio-masonry-item-category">{image.category}</div>
                      <h4 className="portfolio-masonry-item-title">{image.title}</h4>
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

export default GalleryP2;
