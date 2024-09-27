import React, {useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './collapse.scss';

function Collapse({title, children}) {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return React.createElement(
        'div',
        { className: 'collapse-container' },
        React.createElement(
            'button',
            {
                className: 'collapse-button',
                onClick: toggle
            },
            title,
            React.createElement(
                FontAwesomeIcon,
                {
                    icon: isOpen ? faChevronDown : faChevronUp,
                    className: 'collapse-icon',
                }
            )
        ),
        isOpen
            ? React.createElement(
                  'div',
                  { className: 'collapse-content' },
                  children
              )
            : null
    );
}

export default Collapse;






