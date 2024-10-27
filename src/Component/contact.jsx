import React from 'react';

const ContactSection = () => {
    return (
        <section
            className="contact section-padding"
            style={{
                backgroundImage: `url('img/contact.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh',
                // Supprimer marginTop ici
            }}
        >
            <div className="container">
                <div className="row justify-content-center"
                    style={{
                    // Supprimer marginTop ici
                }}>
                    <div className="col-md-5 mb-60 animate-box" data-animate-effect="fadeInUp">
                        <h5>Informations</h5>
                        <p className="mb-30">Présentez-vous en utilisant des informations détaillées afin de susciter l'intérêt de vos clients potentiels.</p>
                        
                        <div className="contact-link">
                            <div className="contact-link-icon">
                                <img src="img/icons/c1.svg" alt="Icône téléphone" />
                            </div>
                            <div className="contact-link-content">
                                <div className="contact-link-title">Appelez-nous</div>
                                <div className="contact-link-text">+1 203-123-0606</div>
                            </div>
                        </div>

                        <div className="contact-link">
                            <div className="contact-link-icon">
                                <img src="img/icons/c2.svg" alt="Icône email" />
                            </div>
                            <div className="contact-link-content">
                                <div className="contact-link-title">Envoyez-nous un email</div>
                                <div className="contact-link-text">info@phoxel.com</div>
                            </div>
                        </div>

                        <div className="contact-link">
                            <div className="contact-link-icon">
                                <img src="img/icons/c3.svg" alt="Icône localisation" />
                            </div>
                            <div className="contact-link-content">
                                <div className="contact-link-title">Visitez notre bureau</div>
                                <div className="contact-link-text">24 King St, Charleston, 29401 USA</div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-5 offset-md-2 animate-box" data-animate-effect="fadeInUp">
                        <div className="form-box">
                            <h5>Contactez-nous</h5>
                            <form
                                method="post"
                                className="contact__form"
                                action="https://duruthemes.com/demo/html/phoxel/main/mail.php"
                            >
                                <div className="row">
                                    <div className="col-12">
                                        <div
                                            className="alert alert-success contact__msg"
                                            style={{ display: 'none' }}
                                            role="alert"
                                        >
                                            Votre message a été envoyé avec succès.
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-12 form-group">
                                        <input name="name" type="text" placeholder="Votre Nom *" required />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <input name="email" type="email" placeholder="Votre Email *" required />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <input name="phone" type="text" placeholder="Votre Numéro *" required />
                                    </div>
                                    <div className="col-md-12 form-group">
                                        <input name="subject" type="text" placeholder="Sujet *" required />
                                    </div>
                                    <div className="col-md-12 form-group">
                                        <textarea
                                            name="message"
                                            id="message"
                                            cols="30"
                                            rows="4"
                                            placeholder="Message *"
                                            required
                                        ></textarea>
                                    </div>
                                    <div className="col-md-12" style={{ marginTop: '20px' }}>
                                        <input name="submit" type="submit" value="Envoyer le message" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
