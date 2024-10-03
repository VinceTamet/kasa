import React from "react";
import Card from "../card/card";
import "./gallery.scss";

export function Gallery({ logements }) {
  return (
    <div className="gallery-container">
      <section className="gallery">
        {logements.map((logement) => (
          <Card key={logement.id} logement={logement} />
        ))}
      </section>
    </div>
  );
}
