import React from 'react';
import './bannerHomePage.scss';
import bannerImage from '../../assets/banner-kasa.png';

export function BannerHomePage() {
    return React.createElement(
        'div',
        {
            className: 'banner',
            style: { backgroundImage: `url(${bannerImage})` },
        },
        React.createElement('h1', null, 'Chez vous, partout et ailleurs')
    );
}
