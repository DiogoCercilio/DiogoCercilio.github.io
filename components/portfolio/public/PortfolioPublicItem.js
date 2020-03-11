import React from 'react';

export default function PortfolioPublicItem({ banner }) {
    return (

        <div className="PortfolioPublicItem">
            <div className="banner-wrapper">
                <a href={banner.link} className="banner-face" title={banner.title}>
                    <img src={banner.img} alt="Banner"/>
                </a>
            </div>
        </div>        
    )
}