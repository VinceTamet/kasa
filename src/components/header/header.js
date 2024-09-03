import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/kasa-logo.png'

export function Header() {
    return (
        <header className="header">
            <div className="logo">
                <img src={logo} alt="Kasa Logo" />
            </div>
            <nav className="navigation">
                <ul>
                    <li>
                        <Link to="/" className="nav-link">Accueil</Link>
                    </li>
                    <li>
                        <Link to="/about" className="nav-link">À propos</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
