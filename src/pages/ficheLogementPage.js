import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import logements from '../data/logements.json';
import Carousel from '../components/carousel/carousel';
import { Layout } from '../components/layout';
import Collapse from "../components/collapse/collapse";
import Tag from '../components/tag/tag';
import './ficheLogement.scss'

function FicheLogement() {
console.log(logements)
  const { id } = useParams();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [logement, setLogement] = useState(null);

  useEffect(() => {
    const index = logements.findIndex(logement => logement.id === id);
    setCurrentIndex(index);
    setLogement(logements[index]);
  }, [id]);


  if (!logement) {
    return <div>ECRAN A FAIRE</div>;  
  }


  const prevImg = () => {
    const newIndex = currentIndex === 0 ? logements.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setLogement(logements[newIndex]);
    
  };

  const nextImg = () => {
    const newIndex = currentIndex === logements.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setLogement(logements[newIndex]);
    
  };

  return (
    <Layout>
      <Carousel
        currentIndex={currentIndex}
        nextImg={nextImg}
        prevImg={prevImg}
        logement={logement}
      />
      <div className="fiche-logement-container">
        {/* <Tag tags={logement.tags} /> */}

        <Collapse title="Description">
          <p>{logement.description}</p>
        </Collapse>
        <Collapse title="Équipements">
          <ul>
            {logement.equipments.map((equip, index) => (
              <li key={index}>{equip}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </Layout>
  );
}

export default FicheLogement;
