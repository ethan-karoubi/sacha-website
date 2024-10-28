import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaDribbble, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer clearfix" data-overlay-darkgray="8">
            <div className="container">
                {/* Premier pied de page */}
                <div className="first-footer">
                    <div className="row">
                        <div className="col-md-6 widget-area">
                            <h3>Inscrivez-vous pour recevoir les dernières mises à jour</h3>
                            <p>Inscrivez-vous à notre newsletter mensuelle pour les dernières nouvelles et articles</p>
                        </div>
                        <div className="col-md-6 widget-area newsletter-form">
                            <form>
                                <input 
                                    type="email" 
                                    name="email" 
                                    placeholder="Entrez votre adresse e-mail" 
                                    required 
                                />
                                <button>S'abonner maintenant</button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Deuxième pied de page */}
                <div className="second-footer">
                    <div className="row">
                        <div className="col-md-4 widget-area">
                            <div className="widget clearfix">
                                <div className="widget-text">
                                    <p>La photographie inila miss uman saten eliten finus vivera alacus miss le drudean seneice miss notumane tonec a fermen.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 widget-area">
                            <div className="widget clearfix usful-links">
                                <h3 className="widget-title">Liens rapides</h3>
                                <ul>
                                    <li><a href="/about">À propos</a></li>
                                    <li><a href="/services">Services</a></li>
                                    <li><a href="/works">Travaux</a></li>
                                    <li><a href="/blog">Blog</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4 widget-area">
                            <div className="widget clearfix">
                                <h3 className="widget-title">Contact</h3>
                                <div className="featured-icon-box icon-align-before-content icon-ver_align-top style1">
                                    <div className="featured-icon">
                                        <FaPhone className="icon" style={{ color: '#fff' }} />
                                    </div>
                                    <div className="featured-content">
                                        <div className="featured-desc">
                                            <p>+1 123-456-0606</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="featured-icon-box icon-align-before-content icon-ver_align-top style1">
                                    <div className="featured-icon">
                                        <FaEnvelope className="icon" style={{ color: '#fff' }} />
                                    </div>
                                    <div className="featured-content">
                                        <div className="featured-desc">
                                            <p>info@phoxel.com</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="featured-icon-box icon-align-before-content icon-ver_align-top style1">
                                    <div className="featured-icon">
                                        <FaMapMarkerAlt className="icon" style={{ color: '#fff' }} />
                                    </div>
                                    <div className="featured-content">
                                        <div className="featured-desc">
                                            <p>120 King St, Charleston SC 29401, États-Unis</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bas de page */}
                <div className="bottom-footer-text">
                    <div className="row copyright">
                        <div className="col-md-8">
                            <p className="mb-0">Copyright © 2024 par <a href="#">DuruThemes</a>. Tous droits réservés.</p>
                        </div>
                        <div className="col-md-4">
                            <div className="social-icons">
                                <ul className="list-inline">
                                    <li><a href="#"><FaFacebookF style={{ color: '#fff' }} /></a></li>
                                    <li><a href="#"><FaTwitter style={{ color: '#fff' }} /></a></li>
                                    <li><a href="#"><FaLinkedinIn style={{ color: '#fff' }} /></a></li>
                                    <li><a href="#"><FaDribbble style={{ color: '#fff' }} /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
