import React from 'react';
import ToggleList from '../descriptionEquip/descriptionEquip';
import './carousel.scss';
import Tag from '../tag/tag';
import Rating from '../rating/rating';

function Carousel({ currentIndex, nextImg, prevImg, logement }) {
    return React.createElement(
        'div',
        { className: 'carousel-container' },
        React.createElement(
            'button',
            { onClick: prevImg },
            '<'
        ),
        React.createElement('img', {
            src: logement.cover,
            alt: logement.title,
            className: 'cover-image',
        }),
        React.createElement(
            'button',
            { onClick: nextImg },
            '>'
        ),
        React.createElement(
            'div',
            { className: 'details-container' },
            React.createElement(
                'div',
                { className: 'title-location' },
                React.createElement('h2', { className: 'title' }, logement.title),
                React.createElement('p', { className: 'location' }, logement.location),
                React.createElement(
                    'div',
                    { className: 'tags-container' },
                    React.createElement(Tag, { tags: logement.tags })
                )
            ),
            React.createElement(
                'div',
                null,
                React.createElement(
                    'div',
                    { className: 'host-info' },
                    React.createElement('p', { className: 'host-name' }, logement.host.name),
                    React.createElement('div', {
                        className: 'profile-image',
                        style: { backgroundImage: `url(${logement.host.picture})` },
                    })
                ),
                React.createElement(Rating, { rating: logement.rating })
            )
        )
    );
}

export default Carousel;
