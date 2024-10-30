import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
            <nav className="navbar navbar-expand-lg" style={{ position: 'sticky'}}>
            <div className="container">
                {/* Logo */}
                <div className="logo-wrapper">
                    <Link className="logo" to="/">
                        <img src="img/logo.svg" className="logo-img" alt="Logo" />
                    </Link>
                </div>
                
                {/* Bouton pour mobile */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"><i className="ti-menu"></i></span>
                </button>

                {/* Menu */}
                <div className="collapse navbar-collapse" id="navbar">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/">Home</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/about">A propos de nous</Link>
                        </li>

<<<<<<< HEAD
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="/service" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Nos services
                            </Link>
                            <ul className="dropdown-menu" style={{ left: 'auto', right: 'auto' }}>
                                <li><Link className="dropdown-item" to="/services1">Service 1</Link></li>
                                <li><Link className="dropdown-item" to="/services2">Service 2</Link></li>
                                <li><Link className="dropdown-item" to="/services3">Service 3</Link></li>
                            </ul>
=======
                        <li className="nav-item">
                            <Link className="nav-link" to="/rea">Nos Réalisations</Link>
>>>>>>> afe7857 (Initial commit)
                        </li>

                        {/* Dropdown "Nos Réalisations" */}
                        <li className="nav-item dropdown">

                            <Link className="nav-link dropdown-toggle" to="/rea" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Nos Réalisations
                            </Link>
                            <ul className="dropdown-menu dropdown-menu-end" style={{ left: 'auto', right: 'auto' }}>
                                <li><Link className="dropdown-item" to="/rea/reportage">Reportage</Link></li>
                                <li><Link className="dropdown-item" to="/rea/portrait">Portrait</Link></li>
                                <li><Link className="dropdown-item" to="/rea/evenement">Événement</Link></li>
                                <li><Link className="dropdown-item" to="/rea/insert">Insert</Link></li>
                                <li><Link className="dropdown-item" to="/rea/packshot">Packshot</Link></li>
                                <li><Link className="dropdown-item" to="/rea/product">Autres</Link></li>
=======
                            <Link className="nav-link dropdown-toggle" to="/galerie" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Photographie
                            </Link>
                            <ul className="dropdown-menu dropdown-menu-end" style={{ left: 'auto', right: 'auto' }}>
                                <li><Link className="dropdown-item" to="/photo/reportage">Reportage</Link></li>
                                <li><Link className="dropdown-item" to="/photo/portrait">Portrait</Link></li>
                                <li><Link className="dropdown-item" to="/photo/evenement">Événement</Link></li>
                                <li><Link className="dropdown-item" to="/photo/insert">Insert</Link></li>
                                <li><Link className="dropdown-item" to="/photo/packshot">Packshot</Link></li>
                                <li><Link className="dropdown-item" to="/photo/product">Autres</Link></li>
>>>>>>> afe7857 (Initial commit)
                            </ul>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
