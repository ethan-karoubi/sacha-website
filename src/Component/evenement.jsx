import React from 'react';

const GalleryE = () => {
  const images = [
    { src: "/img/evenement/1.jpg", alt: "Event 1", category: "Event", title: "Photography Title 1" },
    { src: "/img/evenement/2.jpg", alt: "Event 2", category: "Event", title: "Photography Title 2" },
    { src: "/img/evenement/3.jpg", alt: "Event 3", category: "Event", title: "Photography Title 3" },
    { src: "/img/evenement/4.jpg", alt: "Event 4", category: "Event", title: "Photography Title 4" },
    { src: "/img/evenement/5.jpg", alt: "Event 5", category: "Event", title: "Photography Title 5" },
    { src: "/img/evenement/6.jpg", alt: "Event 6", category: "Event", title: "Photography Title 6" },
    { src: "/img/evenement/7.jpg", alt: "Event 7", category: "Event", title: "Photography Title 7" },
    { src: "/img/evenement/8.jpg", alt: "Event 8", category: "Event", title: "Photography Title 8" },
    { src: "/img/evenement/9.jpg", alt: "Event 9", category: "Event", title: "Photography Title 9" },
    { src: "/img/evenement/10.jpg", alt: "Event 10", category: "Event", title: "Photography Title 10" },
    { src: "/img/evenement/11.jpg", alt: "Event 11", category: "Event", title: "Photography Title 11" },
    { src: "/img/evenement/12.jpg", alt: "Event 12", category: "Event", title: "Photography Title 12" },
    { src: "/img/evenement/13.jpg", alt: "Event 13", category: "Event", title: "Photography Title 13" },
    { src: "/img/evenement/14.jpg", alt: "Event 14", category: "Event", title: "Photography Title 14" }
  ];

  return (
    <>
      {/* Section Header */}
        <section
                className="banner-header banner-img banner-img-top section-padding valign bg-img bg-fixed banner-overlay"
                data-overlay-darkgray="1"
                // data-background="/img/banner/7.jpg"
                style={{ backgroundImage: "url('/img/banner2.jpg')" }} 
            >
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <h1>Evenement Gallery</h1>
                            <hr className="border-1 " />
                            <p>
                                Fusceler mollis augue sit amet hendrerit vestibulum uisteyer the miss duru viventa enenatis lacus.
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
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default GalleryE;
