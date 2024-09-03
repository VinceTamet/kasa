import React, { useState } from 'react';
import './descriptionEquip.scss'

function ToggleList({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleIsOpen = () => setIsOpen(!isOpen);

    return (
        <div className="toggle-list">
            <button className="toggle-button" onClick={toggleIsOpen}>
                {title}
                <span className={`arrow ${isOpen ? 'up' : 'down'}`}>▼</span>
            </button>
            {isOpen && (
                <div className="content" style={{ backgroundColor: '#F6F6F673' }}>
                    {children}
                </div>
            )}
        </div>
    );
}

export default ToggleList;
