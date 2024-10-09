import React from 'react';
import './bannerAboutPage.scss';
import bannerAbout from '../../assets/about-background.png';

export function BannerAboutPage() {

    return (
        <div className='about-banner' style={{backgroundImage: `url(${bannerAbout})`}}>
            {/* <img
                src={bannerAbout}
                alt={"Vallée de montagne"}
                className="img-banner"
            /> */}
        </div>
    )
}
