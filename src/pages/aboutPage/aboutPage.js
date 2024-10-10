import React from 'react';
import { Layout } from "../../components/layout/layout";
import { BannerAboutPage } from "../../components/bannerAboutPage/bannerAboutPage";
import Collapse from "../../components/collapse/collapse";
import { aboutList } from "../../data/aboutList";

export function About() {
    return (
        <Layout>
          <BannerAboutPage />
          <section className="values-section">
            {aboutList.map((item, index) => (
              <Collapse key={index} title={item.title}>
                <p>{item.content}</p>
              </Collapse>
            ))}
          </section>
        </Layout>
      );
}