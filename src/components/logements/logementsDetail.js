import React from "react";
import "./logementsDetail.scss";

function LogementsDetail({ logement }) {
  return (
    <div className="logement-detail">
      <h1>{logement.title}</h1>
      <img src={logement.cover} alt={logement.title} />
      <p>{logement.description}</p>
    </div>
  );
}

export default LogementsDetail;
