<<<<<<< HEAD
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
=======
// Component/GalleryI.js
import React, { useState } from 'react';
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";

const GalleryI = () => {
    const images = [
        { src: "/img/insert/1.jpg", alt: "work-img", title: "Photography Title 1" },
        { src: "/img/insert/2.jpg", alt: "work-img", title: "Photography Title 2" },
        { src: "/img/insert/3.jpg", alt: "work-img", title: "Photography Title 3" },
        { src: "/img/insert/4.jpg", alt: "work-img", title: "Photography Title 4" },
    ];

    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    return (
        <>
            {/* Section Header */}
            <section
                className="banner-header banner-img banner-img-top section-padding valign bg-img bg-fixed banner-overlay"
                data-overlay-darkgray="1"
>>>>>>> afe7857 (Initial commit)
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

<<<<<<< HEAD

=======
            {/* Section Portfolio */}
>>>>>>> afe7857 (Initial commit)
            <section className="section-padding bg-blck">
                <div className="container">
                    <div className="row">
                        {images.map((image, index) => (
                            <div key={index} className="col-md-6 gallery-item">
<<<<<<< HEAD
                                <a href={image.src} title={image.title} className="img-zoom">
=======
                                <div
                                    className="img-zoom"
                                    onClick={() => { setPhotoIndex(index); setIsOpen(true); }}
                                >
>>>>>>> afe7857 (Initial commit)
                                    <div className="gallery-box">
                                        <div className="gallery-img">
                                            <img
                                                src={image.src}
                                                className="img-fluid mx-auto d-block"
                                                alt={image.alt}
                                            />
                                        </div>
                                    </div>
<<<<<<< HEAD
                                </a>
=======
                                </div>
>>>>>>> afe7857 (Initial commit)
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

export default GalleryI;
