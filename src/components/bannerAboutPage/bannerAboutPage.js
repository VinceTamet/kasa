import React from 'react';
import './bannerAboutPage.scss';
import bannerAbout from '../../assets/about-background.png';

export function BannerAboutPage() {
    return React.createElement(
        'div',
        {
            className: 'banner about-banner',
            style: { backgroundImage: `url(${bannerAbout})` },
        },
        null
    );
}
