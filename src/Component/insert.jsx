import React from 'react';

const GalleryI = () => {
    const images = [
        { src: "/img/insert/1.jpg", alt: "work-img", title: "Photography Title" },
        { src: "/img/insert/2.jpg", alt: "work-img", title: "Photography Title" },
        { src: "/img/insert/3.jpg", alt: "work-img", title: "Photography Title" },
        { src: "/img/insert/4.jpg", alt: "work-img", title: "Photography Title" },
    ];

    return (
        <>
         <section
                className="banner-header banner-img banner-img-top section-padding valign bg-img bg-fixed banner-overlay"
                data-overlay-darkgray="1"
                data-background="/img/banner/7.jpg"
                style={{ backgroundImage: "url('/img/banner/7.jpg')" }} 
            >
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <h1>Insert Gallery</h1>
                            <hr className="border-1 " />
                            <p>
                                Fusceler mollis augue sit amet hendrerit vestibulum uisteyer the miss duru viventa enenatis lacus.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            <section className="section-padding bg-blck">
                <div className="container">
                    <div className="row">
                        {images.map((image, index) => (
                            <div key={index} className="col-md-6 gallery-item">
                                <a href={image.src} title={image.title} className="img-zoom">
                                    <div className="gallery-box">
                                        <div className="gallery-img">
                                            <img
                                                src={image.src}
                                                className="img-fluid mx-auto d-block"
                                                alt={image.alt}
                                            />
                                        </div>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default GalleryI;
