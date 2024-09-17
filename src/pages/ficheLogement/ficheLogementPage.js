import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import logements from "../../data/logements.json";
import Carousel from "../../components/carousel/carousel";
import { Layout } from "../../components/layout";
import Collapse from "../../components/collapse/collapse";
import { useNavigate } from "react-router-dom";
import Tag from "../../components/tag/tag";
import Rating from "../../components/rating/rating";
import "../../components/collapse/collapse.scss";
import "./ficheLogement.scss";
import CollapseLogement from "../../components/collapseLogement/collapseLogement";

function FicheLogement() {
  const { id } = useParams();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [logement, setLogement] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const index = logements.findIndex((logement) => logement.id === id);
    setCurrentIndex(index);
    setLogement(logements[index]);
  }, [id]);

  if (!logement) {
    navigate("/404");
  } else {
    const prevImg = () => {
      const newIndex =
        currentIndex === 0 ? logements.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
      setLogement(logements[newIndex]);
    };

    const nextImg = () => {
      const newIndex =
        currentIndex === logements.length - 1 ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
      setLogement(logements[newIndex]);
    };

    return React.createElement(
      Layout,
      null,
      logement &&
        React.createElement(Carousel, {
          prevImg: prevImg,
          nextImg: nextImg,
          logement: logement,
        }),

      // INFO LOGEMENT
      React.createElement(
        "div",
        { className: "logement-info-container" },
        React.createElement(
          "div",
          { className: "logement-info-left" },
          React.createElement("h1", null, logement.title),
          React.createElement(
            "p",
            { className: "location" },
            logement.location
          ),
          React.createElement(Tag, { tags: logement.tags })
        ),
        React.createElement(
          "div",
          { className: "logement-info-right" },
          React.createElement(
            "div",
            { className: "host-info" },
            React.createElement(
              "p",
              { className: "host-name" },
              logement.host.name
            ),
            React.createElement("img", {
              src: logement.host.picture,
              alt: logement.host.name,
              className: "host-picture",
            })
          ),
          React.createElement(Rating, { rating: logement.rating })
        )
      ),

      React.createElement(
        "div",
        { className: 'fiche-logement-collapse'},
        React.createElement(
          CollapseLogement,
          { title: "Description"},
          React.createElement("p", null, logement.description)
        ),
        React.createElement(
            CollapseLogement,
          {title: "Équipements"},
          React.createElement(
            "ul",
            null,
            logement.equipments.map((equip, index) =>
              React.createElement("li", { key: index }, equip)
            )
          )
        )
      )
    );
  }
}

export default FicheLogement;
