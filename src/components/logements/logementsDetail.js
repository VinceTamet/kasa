import React from 'react';
import './logementsDetail.scss';

function LogementsDetail({ logement }) {
    return React.createElement(
        'div',
        { className: 'logement-detail' },
        React.createElement('h1', null, logement.title),
        React.createElement('img', { src: logement.cover, alt: logement.title }),
        React.createElement('p', null, logement.description)
    );
}

export default LogementsDetail;
