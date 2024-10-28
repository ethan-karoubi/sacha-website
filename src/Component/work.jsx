import React from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa'; // Utilisation des icônes React Icons

const PricingSection = () => {
    return (
        <section className="section-padding bg-blck">
            <div className="container">
                <div className="row">
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
                                </ul>
                                <a href="#" className="button-tersiyer">Contact me</a>
                            </div>
                        </div>
                    </div>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
