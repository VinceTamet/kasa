import React from 'react';
import { Link } from 'react-router-dom';
import './card.scss';

function Card({ logement }) {
  return (
    <div className="card">
      <Link to={`/logements/${logement.id}`}>
        {/* <img src={logement.cover} alt={logement.title} /> */}
        <h2>{logement.title}</h2>
      </Link>
    </div>
  );
}

export default Card;
