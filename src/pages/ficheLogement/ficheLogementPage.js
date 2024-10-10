import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import logements from "../../data/logements.json";
import Carousel from "../../components/carousel/carousel";
import { Layout } from "../../components/layout/layout";
import { useNavigate } from "react-router-dom";
import Tag from "../../components/tag/tag";
import Rating from "../../components/rating/rating";
import "./ficheLogement.scss";
import "../../components/collapse/collapse.scss";
import CollapseLogement from "../../components/collapseLogement/collapseLogement";


function FicheLogement() {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const selectedLogement = logements.find((logement) => logement.id === id);
    if (selectedLogement) {
      setLogement(selectedLogement);
    } else {
      navigate("/404"); 
    }
  }, [id, navigate]);

  if (!logement) {
    return <div>Loading...</div>; 
  }

  return (
    <Layout>
  
      <Carousel pictures={logement.pictures} />
 
      <div className="logement-info-container">
        <div className="logement-info-left">
          <h1>{logement.title}</h1>
          <p className="location">{logement.location}</p>
          <Tag tags={logement.tags} />
        </div>
        <div className="logement-info-right">
          <div className="host-info">
            <p className="host-name">{logement.host.name}</p>
            <img
              src={logement.host.picture}
              alt={logement.host.name}
              className="host-picture"
            />
          </div>
          <Rating rating={logement.rating} />
        </div>
      </div>
      
      <div className="fiche-logement-collapse">
        <CollapseLogement title="Description">
          <p>{logement.description}</p>
        </CollapseLogement>
        <CollapseLogement title="Équipements">
          <ul>
            {logement.equipments.map((equip, index) => (
              <li key={index}>{equip}</li>
            ))}
          </ul>
        </CollapseLogement>
      </div>
    </Layout>
  );
}

export default FicheLogement;
