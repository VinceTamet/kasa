import React from 'react';
import { Link } from 'react-router-dom';

function Card({ logement }) {
    return React.createElement(
        'div',
        { className: 'card' },
        React.createElement(
            Link,
            { to: `/logements/${logement.id}` },
            // React.createElement('img', { src: logement.cover, alt: logement.title }),
            React.createElement('h2', null, logement.title)
        )
    );
}

export default Card;
