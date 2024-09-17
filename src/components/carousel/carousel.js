import React from 'react';
import './carousel.scss';

function Carousel({ prevImg, nextImg, logement }) {
    return React.createElement(
        'div',
        { className: 'carousel-container' },
        React.createElement(
            'button',
            { className: 'carousel-button prev-button', onClick: prevImg },
            React.createElement('i', { className: 'fa-solid fa-chevron-left' })
        ),
        React.createElement('img', {
            src: logement.cover,
            alt: logement.title,
            className: 'carousel-image',
        }),
        React.createElement(
            'button',
            { className: 'carousel-button next-button', onClick: nextImg },
            React.createElement('i', { className: 'fa-solid fa-chevron-right' })
        )
    );
}

export default Carousel;
