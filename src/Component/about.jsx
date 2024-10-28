import React from 'react';
import { FaCheck } from 'react-icons/fa';
import ClientsCarousel from './bannerlogo';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";





const About = () => {
   


    return (
        <section className="about section-padding"> {/* Ajout de color: white */}
            <div className="container">
                <div   className="row">
                    {/* Texte à gauche */}
                    <div   className="col-md-6 mb-30 animate-box" >
                        <h2 data-aos="fade-up" className="section-title">Bienvenue, je suis <span className='color-blue'>Sacha Taieb</span> , <span className='color-blue underline-blue'>réalisateur</span> et <span className='color-blue underline-blue'>photographe</span> basé entre Paris et Marseille.</h2>
                        <p data-aos="fade-up" data-aos-delay="300">Après avoir collaboré avec des marques internationales (Microsoft, Pepsi et Avène) ainsi que des labels musicaux prestigieux (Universal, Sony et Epic Records) nous avons choisi de mettre cette expertise unique au service de nouveaux secteurs. 

                        Nous nous tournons désormais vers des domaines souvent moins valorisés dans la production audiovisuelle, tels que la formation, le conseil, ou la santé, pour leur offrir une qualité de service habituellement réservée aux grandes productions.</p>
                        <ul data-aos="fade-up" data-aos-delay="600" className="list-unstyled about-list mb-30">
                            <li>
                                <div className="about-list-icon-wrapper">
                                    <FaCheck className="about-list-icon" />
                                </div>
                                <div className="about-list-text">
                                    <p>Over 15 years of experience</p>
                                </div>
                            </li>
                            <li>
                                <div className="about-list-icon-wrapper">
                                    <FaCheck className="about-list-icon" />
                                </div>
                                <div className="about-list-text">
                                    <p>200+ successfully executed projects</p>
                                </div>
                            </li>
                            <li>
                                <div className="about-list-icon-wrapper">
                                    <FaCheck className="about-list-icon" />
                                </div>
                                <div className="about-list-text">
                                    <p>Exceptional work quality</p>
                                </div>
                            </li>
                        </ul>
                        <hr className="border-2" />
                        <div data-aos="fade-up" data-aos-delay="900" className="about-bottom ">
                            <img src="img/signature-dark.svg" alt="" className="image about-signature img-about" />
                            <div className="about-name-wrapper">
                                <div className="about-name-dark">Sacha Taieb</div>
                                <div className="about-rol">Fondateur de Jacob Production</div>
                            </div>
                        </div>
                    </div>

                    {/* Image à droite */}
                    <div  className="col-md-5 offset-md-1 animate-box" data-animate-effect="fadeInUp">
                        <div data-aos="fade-up" className="about-img">
                            <div className="img">
                                <img src="img/about.jpg" className="img-fluid" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
             <ClientsCarousel/>
        </section>
        
    );
};


export default About;
