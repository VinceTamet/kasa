import React from 'react';
import { Layout } from '../components/layout';
import { BannerHomePage } from '../components/bannerHomePage/bannerHomePage';
import { Gallery } from '../components/gallery/gallery';
import logements from '../data/logements.json';

export function HomePage() {
    return React.createElement(
        Layout,
        null,
        React.createElement(BannerHomePage, null),
        React.createElement(Gallery, { logements: logements })
    );
}
