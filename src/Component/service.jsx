import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
    const services = [
        {
            title: 'Reportage',
            background: 'img/services/1.jpg',
            description: 'Nous mettons en lumière vos séminaires et la vie de votre entreprise, en capturant les moments essentiels et les échanges significatifs.',
            link: '/rea/reportage',
        },
        {
            title: 'Portrait',
            background: 'img/services/3.jpg',
            description: 'Nous créons des portraits qui révèlent la personnalité et le rôle unique de chaque collaborateur, renforçant ainsi la cohésion de votre équipe et votre image. Ces portraits établissent un lien de proximité avec vos clients',
            link: '/rea/portrait',
        },
        {
            title: 'Evenement',
            background: 'img/services/2.jpg',
            description: 'Nous mettons en lumière vos evenement et la vie de votre entreprise, en capturant les moments essentiels et les échanges significatifs.',
            link: '/rea/evenement',
        },
        {
            title: 'Insert',
            background: 'img/services/4.jpg',
            description: 'Lorem nisl miss nestibulum nec odio duru the aucan ula orci varius natoque enatau dis arturient monte miss morbine.',
            link: '/rea/insert',
        },
        {
            title: 'Packshots',
            background: 'img/services/5.jpg',
            description: 'Nous réalisons des packshots précis et soignés pour mettre en valeur vos produits. Chaque image est conçue pour attirer l’attention de vos clients, en révélant les détails et la qualité qui distinguent vos offres.',
            link: '/rea/packshot',
        },
        {
            title: 'Interior Photography',
            background: 'img/services/6.jpg',
            description: 'Lorem nisl miss nestibulum nec odio duru the aucan ula orci varius natoque enatau dis arturient monte miss morbine.',
            link: '/services-page',
        },
    ];

    return (
        <section className="services2 not section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div data-aos="fade-up" className="col-md-12 mb-30 text-center">
                        <h2 className="section-title2 background-text"> <span>Nos Album Photos</span></h2>
                        <hr className="border-1" />
                        <p className="section-title2  ">Quverra tristique justo duis vitae diam neque nivamus aestan ateuene artinaelition finibus viverra nec lacus setlie suscipe tristique.</p>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-delay="300" className="row">
                    {services.map((service, index) => (
                        <div className="col-md-4" key={index}>
                            <div className="square-flip">
                                <div className="square bg-img" style={{ backgroundImage: `url(${service.background})` }}>
                                    <div className="square-container d-flex align-items-end justify-content-end">
                                        <div className="box-title">
                                            <h4>{service.title}</h4>
                                        </div>
                                    </div>
                                    <div className="flip-overlay"></div>
                                </div>
                                <div className="square2">
                                    <div className="square-container2">
                                        <h4>{service.title}</h4>
                                        <p><i>{service.description}</i></p>
                                        <Link to={service.link} className="button-fourth">Voir Plus</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
