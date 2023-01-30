import React from 'react';
import './PortfolioPersonalItem.scss';

export default function PortfolioPersonalItem({ item }) {
    return (
        <div className="PortfolioPersonalItem" style={{backgroundImage: 'url(bg.jpg)'}}>
            <div className="box-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
            </div>
            <a className="btn" href={item.link}>
                {item.linkLabel}
            </a>
        </div>
    )
}