import React from 'react';
import './PortfolioPublicItem.scss';

export default function PortfolioPublicItem({ banner }) {
    return (

        <div className="PortfolioPublicItem">
            <div className="banner-wrapper">
                <a href={banner.link} className="banner-face" title={banner.title}>
                    <img loading="lazy" src={`screenshots/${banner.img}`} alt="Banner" />
                </a>
            </div>
        </div>        
    )
}