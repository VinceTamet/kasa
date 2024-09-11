import React, { useState } from 'react';
import './descriptionEquip.scss';

function ToggleList({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleIsOpen = () => setIsOpen(!isOpen);

    return React.createElement(
        'div',
        { className: 'toggle-list' },
        React.createElement(
            'button',
            { className: 'toggle-button', onClick: toggleIsOpen },
            title,
            React.createElement(
                'span',
                { className: `arrow ${isOpen ? 'up' : 'down'}` },
                '▼'
            )
        ),
        isOpen
            ? React.createElement(
                'div',
                { className: 'content', style: { backgroundColor: '#F6F6F673' } },
                children
            )
            : null
    );
}

export default ToggleList;
