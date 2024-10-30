import React from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';

const PricingSection = () => {
    return (
        <section className="section-padding bg-blck">
            <div className="container">
                <div className="row">
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
                                </ul>
                                <a href="#" className="button-tersiyer">Contact me</a>
                            </div>
                        </div>
                    </div>

                    {/* Deuxième carte */}
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

                    {/* Troisième carte */}
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
