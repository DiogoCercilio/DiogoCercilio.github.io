import React from 'react';
import PortfolioPersonalItem from './PortfolioPersonalItem';
import Loading from 'components/loading/Loading'
import { LazyLoadComponent } from 'react-lazy-load-image-component';

import './PortfolioPersonal.scss';

export default function PortfolioPersonal({ portfolio }) {

    return (
        <LazyLoadComponent>
            <h5>Some Personal projects:</h5>
            <div className="PortfolioPersonal">
                <div className="container">
                    {!portfolio ? <Loading zoom=".3" color="#333" /> : portfolio.map(item=> <PortfolioPersonalItem key={item.id} item={item} />)}
                </div>

                <a className="see-all" href="https://github.com/DiogoCercilio" target="_blank" rel="noopener noreferrer">
                    See all projects on Github
                </a>
            </div>
        </LazyLoadComponent>
    )
}