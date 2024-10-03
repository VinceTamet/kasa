import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./collapse.scss";

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse-container">
      <button className="collapse-button" onClick={toggle}>
        {title}
        <FontAwesomeIcon
          icon={isOpen ? faChevronDown : faChevronUp}
          className="collapse-icon"
        />
      </button>

      {isOpen && <div className="collapse-content">{children}</div>}
    </div>
  );
}

export default Collapse;
