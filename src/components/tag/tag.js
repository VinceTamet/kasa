import React from 'react';
import './tag.scss';

function Tag({ tags }) {
    return React.createElement(
        'div',
        { className: 'tags-container' },
        tags.map((tag, index) => 
            React.createElement(
                'span',
                { key: index, className: 'tag' },
                tag
            )
        )
    );
}

export default Tag;
