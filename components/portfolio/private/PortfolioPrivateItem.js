import React from 'react';

export default function PortfolioPrivateItem({ item }) {
    return (
        <div className="PortfolioItem">
            {item.type === 'img' ? 
                <img className={item.alias} src={item.src} title={item.label} alt={item.label} /> : 
                    <svg viewBox="0 0 815.6 142.9" className={item.alias}>
                        <path fill="#fff" d={item.src}></path>
                    </svg>}
        </div>
    )
}