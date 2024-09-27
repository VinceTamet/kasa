import React from 'react';
import { Layout } from "../components/layout";
import { BannerAboutPage } from "../components/bannerAboutPage/bannerAboutPage";
import Collapse from "../components/collapse/collapse";
import { aboutList } from "../data/aboutList";

export function About() {
    return React.createElement(
        Layout,
        null,
        React.createElement(BannerAboutPage),
        React.createElement(
            'section',
            { className: 'values-section' },
            aboutList.map((item, index) =>
                React.createElement(
                    Collapse,
                    { key: index, title: item.title },
                    React.createElement('p', null, item.content)
                )
            )
        )
    );
}
