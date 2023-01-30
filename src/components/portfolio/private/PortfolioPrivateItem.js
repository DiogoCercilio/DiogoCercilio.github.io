import React from 'react';

import './PortfolioPrivateItem.scss';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function PortfolioPrivateItem({ item }) {
  return (
    <div className="PortfolioItem">
      <img
        className={item.alias}
        src={`logos/${item.src}`}
        title={item.label}
        width="70"
        alt={item.label}
        loading="lazy"
        effect="blur"
      />
    </div>
  );
}
