import React from 'react';
import Card from '../card/card';
import './gallery.scss';

export function Gallery({ logements }) {
    return React.createElement(
        'div',
        { className: 'gallery-container' },
        React.createElement(
            'section',
            { className: 'gallery' },
            logements.map(logement =>
                React.createElement(Card, { key: logement.id, logement: logement })
            )
        )
    );
}
