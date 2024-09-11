import React from 'react';
import './tag.scss';

function Tag({ tags }) {
    return (
        <div className="tags-container">
            {tags.map((tag, index) => (
                <span key={index} className="tag">
                    {tag}
                </span>
            ))}
        </div>
    );
}

export default Tag;
