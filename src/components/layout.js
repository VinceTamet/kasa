import React from 'react';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import './bannerHomePage/bannerHomePage.scss';
import './header/header.scss';

export function Layout({ children }) {
    return React.createElement(
        React.Fragment,
        null,
        React.createElement(Header, null),
        React.createElement(
            'main',
            null,
            children
        ),
        React.createElement(Footer, null)
    );
}
