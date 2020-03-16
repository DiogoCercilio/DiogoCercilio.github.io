import React from 'react';
import './PortfolioPrivateItem.scss';

export default function PortfolioPrivateItem({ item }) {
    return (
        <div className="PortfolioItem">
            <img loading="lazy" className={item.alias} src={`logos/${item.src}`} title={item.label} alt={item.label} />
        </div>
    )
}