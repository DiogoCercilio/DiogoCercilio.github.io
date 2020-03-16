import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import './PortfolioPublicItem.scss';
import 'react-lazy-load-image-component/src/effects/opacity.css';

export default function PortfolioPublicItem({ banner }) {
    return (
        <div className="PortfolioPublicItem">
            <div className="banner-wrapper">
                <a href={banner.link} className="banner-face" title={banner.title}>
                    <LazyLoadImage
                        alt="Banner"
                        src={`screenshots/${banner.img}`} 
                        loading="lazy"
                        effect="opacity"
                    />
                </a>
            </div>
        </div>        
    )
}