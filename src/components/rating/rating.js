import React from 'react';
import './rating.scss';

function Rating({ rating }) {
    const totalStars = 5;
    
    const stars = Array.from({ length: totalStars }, (_, index) => {
        return React.createElement(
            'i',
            {
                key: index,
                className: index < rating ? 'fa-solid fa-star' : 'fa-regular fa-star',
            }
        );
    });

    return React.createElement(
        'div',
        { className: 'rating' },
        stars
    );
}

export default Rating;
