import React, { useState } from 'react';
import './values.scss';
import { aboutList } from '../../data/aboutList';

export function Values() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleValues = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    
    return React.createElement(
        'div',
        { className: 'values-toggle' },
        aboutList.map((item, index) => 
            React.createElement(
                'div',
                {
                    key: index,
                    className: `values-item ${activeIndex === index ? 'active' : ''}`,
                    onClick: () => toggleValues(index),
                },
                React.createElement(
                    'div',
                    { className: 'values-header' },
                    React.createElement('h2', null, item.title),
                    React.createElement('span', {
                        className: `arrow ${activeIndex === index ? 'down' : 'right'}`,
                    })
                ),
                activeIndex === index
                    ? React.createElement(
                        'div',
                        { className: 'values-content' },
                        React.createElement('p', null, item.content)
                    )
                    : null
            )
        )
    );
}
