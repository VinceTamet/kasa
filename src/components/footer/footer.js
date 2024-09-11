import React from 'react';
import logoFooter from '../../assets/kasa-logo-footer.png';
import './footer.scss';

export function Footer() {
    return React.createElement(
        'footer',
        { className: 'footer' },
        React.createElement(
            'div',
            { className: 'footer-content' },
            React.createElement('img', { src: logoFooter, alt: 'Kasa Logo' }),
            React.createElement('p', null, '© 2020 Kasa. All rights reserved')
        )
    );
}
