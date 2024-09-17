import React, {useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './collapseLogement.scss'

function CollapseLogement({title, children}) {

    const [isOpen, setIsOpen] = useState(false);
    // Si isOpen est true (contenu visible) => !isOpen deviendra false
    // Si isOpen est false (contenu caché) => !isOpen deviendra true
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    // Chaque fois que la fonction toggle est appelée, elle inverse l'état de isOpen
    // si contenu visible => devient caché et inversement

    return React.createElement(
        'div',
        { className: 'collapse-container-logement' },
        React.createElement(
            'button',
            {
                className: 'collapse-button-logement',
                // Au clic : toggle est appemé et inverse l'état de isOpen 
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
        // Si isOpen === true alors on créé la div si non rien ne se passe
        isOpen
            ? React.createElement(
                  'div',
                  { className: 'collapse-content-logement' },
                  children
              )
            : null
    );
}

export default CollapseLogement;






