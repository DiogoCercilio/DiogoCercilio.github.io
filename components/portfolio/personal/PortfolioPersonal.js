import React from 'react';
import PortfolioPersonalItem from './PortfolioPersonalItem';
import Loading from '../../loading/Loading'

export default function PortfolioPersonal({ portfolio }) {
    return (
        <>
            <h5>Some Personal projects:</h5>
            <div className="PortfolioPersonal">
                <div className="container">
                    {!portfolio ? <Loading zoom=".3" color="#333" /> : portfolio.map(item=> <PortfolioPersonalItem key={item.id} item={item} />)}
                </div>

                <a className="see-all" href="https://github.com/DiogoCercilio" target="_blank">
                    See all projects on Github
                </a>
            </div>
        </>
    )
}