import React, {useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './collapseLogement.scss'

function CollapseLogement({title, children}) {

    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="collapse-container-logement">
          <button className="collapse-button-logement" onClick={toggle}>
            {title}
            <FontAwesomeIcon
              icon={isOpen ? faChevronDown : faChevronUp}
              className="collapse-icon"
            />
          </button>
          
          {isOpen && <div className="collapse-content-logement">{children}</div>}
        </div>
      );
}

export default CollapseLogement;






