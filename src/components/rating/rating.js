import React from "react";
import "./rating.scss";

function Rating({ rating }) {
  const totalStars = 5;
  const stars = Array.from({ length: totalStars }, (_, index) => (
    <i
      key={index}
      className={index < rating ? "fa-solid fa-star" : "fa-regular fa-star"}
    ></i>
  ));

  return <div className="rating">{stars}</div>;
}

export default Rating;
