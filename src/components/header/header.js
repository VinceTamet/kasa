import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/kasa-logo.png';

export function Header() {
    return React.createElement(
        'header',
        { className: 'header' },
        React.createElement(
            'div',
            { className: 'logo' },
            React.createElement('img', { src: logo, alt: 'Kasa Logo' })
        ),
        React.createElement(
            'nav',
            { className: 'navigation' },
            React.createElement(
                'ul',
                null,
                React.createElement(
                    'li',
                    null,
                    React.createElement(Link, { to: '/', className: 'nav-link' }, 'Accueil')
                ),
                React.createElement(
                    'li',
                    null,
                    React.createElement(Link, { to: '/about', className: 'nav-link' }, 'À Propos')
                )
            )
        )
    );
}
