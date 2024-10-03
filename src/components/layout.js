import React from "react";
import { Header } from "./header/header";
import { Footer } from "./footer/footer";
import "./bannerHomePage/bannerHomePage.scss";
import "./header/header.scss";

export function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}