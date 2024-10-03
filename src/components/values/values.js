import React, { useState } from "react";
import "./values.scss";
import { aboutList } from "../../data/aboutList";

export function Values() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleValues = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="values-toggle">
      {aboutList.map((item, index) => (
        <div
          key={index}
          className={`values-item ${activeIndex === index ? "active" : ""}`}
          onClick={() => toggleValues(index)}
        >
          <div className="values-header">
            <h2>{item.title}</h2>
            <span
              className={`arrow ${activeIndex === index ? "down" : "right"}`}
            ></span>
          </div>
          {activeIndex === index && (
            <div className="values-content">
              <p>{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
