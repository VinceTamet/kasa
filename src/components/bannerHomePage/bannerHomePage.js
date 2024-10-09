import React from "react";
import "./bannerHomePage.scss";
import bannerImage from "../../assets/banner-kasa.png";

export function BannerHomePage() {
  return (
    <div className="banner" style={{backgroundImage: `url(${bannerImage})`}}>
      <h1>Chez vous, partout et ailleurs</h1>
    </div>
  );
}
