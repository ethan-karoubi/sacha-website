<<<<<<< HEAD
import React from 'react';
=======
// Component/GalleryP.js
import React, { useState } from 'react';
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";
>>>>>>> afe7857 (Initial commit)

const GalleryP = () => {
  const images = [
    { src: "/img/portraits/1.jpg", alt: "Portrait 1", category: "Portrait", title: "Photography Title 1" },
    { src: "/img/portraits/2.jpg", alt: "Portrait 2", category: "Portrait", title: "Photography Title 2" },
    { src: "/img/portraits/3.jpg", alt: "Portrait 3", category: "Portrait", title: "Photography Title 3" },
    { src: "/img/portraits/4.jpg", alt: "Portrait 4", category: "Portrait", title: "Photography Title 4" },
    { src: "/img/portraits/7.jpg", alt: "Portrait 7", category: "Portrait", title: "Photography Title 7" },
    { src: "/img/portraits/6.jpg", alt: "Portrait 6", category: "Portrait", title: "Photography Title 6" },
    { src: "/img/portraits/5.jpg", alt: "Portrait 5", category: "Portrait", title: "Photography Title 5" },
    { src: "/img/portraits/8.jpg", alt: "Portrait 8", category: "Portrait", title: "Photography Title 8" },
    { src: "/img/portraits/9.jpg", alt: "Portrait 9", category: "Portrait", title: "Photography Title 9" },
    { src: "/img/portraits/10.jpg", alt: "Portrait 10", category: "Portrait", title: "Photography Title 10" },
    { src: "/img/portraits/11.jpg", alt: "Portrait 11", category: "Portrait", title: "Photography Title 11" },
    { src: "/img/portraits/12.jpg", alt: "Portrait 12", category: "Portrait", title: "Photography Title 12" },
  ];

<<<<<<< HEAD
=======
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

>>>>>>> afe7857 (Initial commit)
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
              <h1>Portrait Gallery</h1>
              <hr className="border-1" />
              <p>
                Explorez notre collection de portraits capturant des moments uniques et des expressions authentiques.
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
                <div className="portfolio-item-wrapp">
<<<<<<< HEAD
                  <div className="portfolio-item">
                    <div className="portfolio-masonry-wrapper">
                      <a href={image.src} className="portfolio-masonry-item-img-link">
                        <img src={image.src} alt={image.alt} className="img-fluid" />
                        <div className="portfolio-masonry-item-img"></div>
                        <div className="portfolio-masonry-item-content">
                          <div className="portfolio-masonry-item-category">{image.category}</div>
                          <h4 className="portfolio-masonry-item-title">{image.title}</h4>
                        </div>
                      </a>
=======
                  <div
                    className="portfolio-item"
                    onClick={() => { setPhotoIndex(index); setIsOpen(true); }}
                  >
                    <div className="portfolio-masonry-wrapper">
                      <img src={image.src} alt={image.alt} className="img-fluid portfolio-masonry-item-img" />
                      <div className="portfolio-masonry-item-content">
                        <div className="portfolio-masonry-item-category">{image.category}</div>
                        <h4 className="portfolio-masonry-item-title">{image.title}</h4>
                      </div>
>>>>>>> afe7857 (Initial commit)
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
<<<<<<< HEAD
=======

        {/* Lightbox */}
        {isOpen && (
          <Lightbox
            images={images.map((img) => ({ url: img.src, title: img.title }))}
            startIndex={photoIndex}
            onClose={() => setIsOpen(false)}
          />
        )}
>>>>>>> afe7857 (Initial commit)
      </section>
    </>
  );
};

export default GalleryP;
