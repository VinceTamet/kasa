import React from 'react';
import ToggleList from '../descriptionEquip/descriptionEquip';
import './carousel.scss';

function Carousel({ currentIndex, nextImg, prevImg, logement }) {
    return (
        <div className="carousel-container">
            <button onClick={prevImg}>&lt;</button>
            <img src={logement.cover} alt={logement.title} className="cover-image"/>
            <button onClick={nextImg}>&gt;</button>
            <div className="details-container">
                <div className="title-location">
                    <h2 className="title">{logement.title}</h2>
                    <p className="location">{logement.location}</p>
                    <div className="tags-container">
                        {logement.tags.map((tag, index) => (
                            <span key={index} className="tag">{tag}</span>
                        ))}
                    </div>
                </div>
                
                <div className="host-info">
                    <p className="host-name">{logement.host.name}</p>
                    <div className="profile-image" style={{backgroundImage: `url(${logement.host.picture})`}}></div>
                    {/* <div className="rating">
                        {[1, 2, 3, 4, 5].map(star => (
                            <div key={star} className={`star ${star <= 3 ? 'active' : 'inactive'}`}></div>
                        ))}
                    </div> */}
                </div>
            </div>
            {/* <ToggleList title="Description">
                <p>{logement.description}</p>
            </ToggleList>
            <ToggleList title="Équipements">
                <ul>
                    {logement.equipments.map((equip, index) => (
                        <li key={index}>{equip}</li>
                    ))}
                </ul>
            </ToggleList> */}
        </div>
    );
}

export default Carousel;
