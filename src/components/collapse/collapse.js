import { useState } from 'react'
import './collapse.scss'

function Collapse({title, children}) {

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
        { className: 'collapse-container' },
        React.createElement(
            'button',
            {
                className: 'collapse-button',
                // Au clic : toggle est appemé et inverse l'état de isOpen 
                onClick: toggle
            },
            title,
            React.createElement('span', { className: `arrow ${isOpen ? 'arrow-up' : 'arrow-down'}` }, '▼')
        ),
        // Si isOpen === true alors on créé la div si non rien ne se passe
        isOpen && React.createElement(
            'div',
            { className: 'collapse-content' },
            children
        )
    );
}

export default Collapse;






