import React from 'react';
<<<<<<< HEAD
import { FaCheck, FaTimes } from 'react-icons/fa'; // Utilisation des icônes React Icons
=======
import { FaCheck, FaTimes } from 'react-icons/fa';
>>>>>>> afe7857 (Initial commit)

const PricingSection = () => {
    return (
        <section className="section-padding bg-blck">
            <div className="container">
                <div className="row">
<<<<<<< HEAD
                    <div className="col-md-4">
                        <div className="pricing2 w-100">
                            <div className="con text-center"> 
                                <span className="price"><sup>$</sup> <span className="number">350</span> <sub>USD</sub></span> 
                                <span className="title d-block">Basic</span>
                                <ul className="pricing-text mb-30">
                                    <li><FaCheck className="mr-2" /> 60 minutes session</li>
                                    <li><FaCheck className="mr-2" /> Photo Editing</li>
                                    <li><FaCheck className="mr-2" /> 20 Digital Images</li>
                                    <li><FaTimes className="mr-2" /> Online Gallery</li>
                                    <li><FaTimes className="mr-2" /> Photo Print</li>
                                </ul>
                                {/* Ajout du style inline pour le bouton de la section Basic */}
                                <a href="#" className="button-primary" style={{ backgroundColor: '#1d678f', color: 'white' }}>Contact me</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="pricing2 w-100">
                            <div className="con text-center"> 
                                <span className="price"><sup>$</sup> <span className="number">450</span> <sub>USD</sub></span> 
                                <span className="title d-block">Standard</span>
                                <ul className="pricing-text mb-30">
                                    <li><FaCheck className="mr-2" /> 60 minutes session</li>
                                    <li><FaCheck className="mr-2" /> Photo Editing</li>
                                    <li><FaCheck className="mr-2" /> 20 Digital Images</li>
                                    <li><FaCheck className="mr-2" /> Online Gallery</li>
                                    <li><FaTimes className="mr-2" /> Photo Print</li>
=======
                    {/* Première carte */}
                    <div className="col-md-4 d-flex align-items-stretch">
                        <div className="pricing2 w-100" style={{ height: '530px', backgroundColor: '#202020' }}>
                            <div className="con text-center"> 
                                <span className="price"><sup>€</sup> <span className="number">350</span> <sub>EUR</sub></span> 
                                <span className="title d-block">Pack Photo - Base</span>
                                <ul className="pricing-text mb-30">
                                    <li><FaCheck className="mr-2" /> 2 heures de séance photo</li>
                                    <li><FaCheck className="mr-2" /> Retouches incluses</li>
                                    <li><FaTimes className="mr-2" /> 2 révisions possibles</li>
>>>>>>> afe7857 (Initial commit)
                                </ul>
                                <a href="#" className="button-tersiyer">Contact me</a>
                            </div>
                        </div>
                    </div>
<<<<<<< HEAD
                    <div className="col-md-4">
                        <div className="pricing2 w-100">
                            <div className="con text-center"> 
                                <span className="price"><sup>$</sup> <span className="number">600</span> <sub>USD</sub></span> 
                                <span className="title d-block">Premium</span>
                                <ul className="pricing-text mb-30">
                                    <li><FaCheck className="mr-2" /> 60 minutes session</li>
                                    <li><FaCheck className="mr-2" /> Photo Editing</li>
                                    <li><FaCheck className="mr-2" /> 20 Digital Images</li>
                                    <li><FaCheck className="mr-2" /> Online Gallery</li>
                                    <li><FaCheck className="mr-2" /> 3 Photo Print</li>
                                </ul>
                                {/* Ajout du style inline pour le bouton de la section Premium */}
                                <a href="#" className="button-primary" style={{ backgroundColor: '#1d678f', color: 'white' }}>Contact me</a>
=======
                    {/* Troisième carte */}
                     <div className="col-md-4 d-flex align-items-stretch">
                        <div className="pricing2 w-100" style={{ height: '530px', backgroundColor: '#202020' }}>
                            <div className="con text-center"> 
                                <span className="price"><sup>€</sup> <span className="number">450</span> <sub>EUR</sub></span> 
                                <span className="title d-block">Pack Vidéo - Base</span>
                                <ul className="pricing-text mb-30">
                                    <li><FaCheck className="mr-2" /> 2 heures de tournage vidéo</li>
                                    <li><FaCheck className="mr-2" /> Montage vidéo inclus</li>
                                    <li><FaCheck className="mr-2" /> 3 révisions possibles</li>
                                </ul>
                                <a href="#" className="button-tersiyer">Contact me</a>
                            </div>
                        </div>
                    </div>
                     <div className="col-md-4 d-flex align-items-stretch">
                        <div className="pricing2 w-100" style={{ height: '530px', backgroundColor: '#202020' }}>
                            <div className="con text-center"> 
                                <span className="price"><sup>€</sup> <span className="number">750</span> <sub>EUR</sub></span> 
                                <span className="title d-block">Pack Combiné - Photo & Vidéo</span>
                                <ul className="pricing-text mb-30">
                                    <li><FaCheck className="mr-2" /> Comprend les services des Packs Photo et Vidéo</li>
                                    <li><FaCheck className="mr-2" /> 2 heures de séance photo</li>
                                    <li><FaCheck className="mr-2" /> 2 heures de tournage vidéo</li>
                                    <li><FaCheck className="mr-2" /> Retouches photo (2 révisions)</li>
                                    <li><FaCheck className="mr-2" /> Montage vidéo (3 révisions)</li>
                                </ul>
                                <a href="#" className="button-tersiyer">Contact me</a>
>>>>>>> afe7857 (Initial commit)
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
