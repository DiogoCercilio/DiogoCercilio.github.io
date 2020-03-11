import React from 'react';
import PortfolioPrivateItem from './PortfolioPrivateItem'
import Loading from '../../loading/Loading'

export default function PortfolioPrivate({ portfolio }) {

    return (
        <>
            <h5>Company Experiences:</h5>
            <div className="PortfolioPrivate container">
                {!portfolio ? <Loading zoom=".3" color="#333" /> : portfolio.map(item=> <PortfolioPrivateItem key={item.id} item={item} />)}
            </div>
        </>
    )
}