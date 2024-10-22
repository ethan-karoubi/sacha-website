import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; // Importation des icônes

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [formMessage, setFormMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logique pour soumettre le formulaire
        setFormMessage('Your message was sent successfully.');
        // Réinitialiser le formulaire
        setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
        });
    };

    return (
        <section className="contact section-padding bg-cross">
            <div className="container">
                <div className="row mb-120">
                    <div className="col-md-5 mb-60 animate-box" data-animate-effect="fadeInUp">
                        <h5>Information</h5>
                        <p className="mb-30">
                            Praesent sed nisl ullamcorper the drana duru metus utah phare mavna busnini viventa the ornare ipsum.
                        </p>
                        <div className="contact-link">
                            <div className="contact-link-icon">
                                <FaPhoneAlt size={30} /> {/* Icône React pour le téléphone */}
                            </div>
                            <div className="contact-link-content">
                                <div className="contact-link-title">Call us</div>
                                <div className="contact-link-text">+1 203-123-0606</div>
                            </div>
                        </div>
                        <div className="contact-link">
                            <div className="contact-link-icon">
                                <FaEnvelope size={30} /> {/* Icône React pour l'email */}
                            </div>
                            <div className="contact-link-content">
                                <div className="contact-link-title">Send us an email</div>
                                <div className="contact-link-text">info@phoxel.com</div>
                            </div>
                        </div>
                        <div className="contact-link">
                            <div className="contact-link-icon">
                                <FaMapMarkerAlt size={30} /> {/* Icône React pour l'adresse */}
                            </div>
                            <div className="contact-link-content">
                                <div className="contact-link-title">Visit our office</div>
                                <div className="contact-link-text">24 King St, Charleston, 29401 USA</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 offset-md-2 animate-box" data-animate-effect="fadeInUp">
                        <div className="form-box">
                            <h5>Get in touch</h5>
                            <form className="contact__form" onSubmit={handleSubmit}>
                                {formMessage && (
                                    <div className="alert alert-success contact__msg" role="alert">
                                        {formMessage}
                                    </div>
                                )}
                                <div className="row">
                                    <div className="col-md-12 form-group">
                                        <input
                                            name="name"
                                            type="text"
                                            placeholder="Your Name *"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <input
                                            name="email"
                                            type="email"
                                            placeholder="Your Email *"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <input
                                            name="phone"
                                            type="text"
                                            placeholder="Your Number *"
                                            required
                                            value={formData.phone}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-md-12 form-group">
                                        <input
                                            name="subject"
                                            type="text"
                                            placeholder="Subject *"
                                            required
                                            value={formData.subject}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-md-12 form-group">
                                        <textarea
                                            name="message"
                                            id="message"
                                            cols="30"
                                            rows="4"
                                            placeholder="Message *"
                                            required
                                            value={formData.message}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-md-12">
                                        <input name="submit" type="submit" value="Send Message" />
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

export default Contact;
