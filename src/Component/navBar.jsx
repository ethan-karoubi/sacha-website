import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                {/* Logo */}
                <div className="logo-wrapper">
                    <Link className="logo" to="/">
                        <img src="img/logo.png" className="logo-img" alt="Logo" />
                    </Link>
                </div>
                
                {/* Button */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"><i className="ti-menu"></i></span>
                </button>

                {/* Menu */}
                <div className="collapse navbar-collapse" id="navbar">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item dropdown">
                            <Link className="nav-link active dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Home
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/about">A propos de nous </Link>
                        </li>

                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="/service" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Nos services 
                            </Link>
                        </li>

                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Nos Réalisations
                            </Link>
                            <ul className="dropdown-menu">
                                <li>
                                    <Link className="dropdown-item" to="/rea/reportage">Reportage</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/rea/portrait">Portrait</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/rea/evenement">Evenement</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/rea/insert">Insert</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/rea/packshot">Packshot</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/rea/product">Autres</Link>
                                </li>
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
