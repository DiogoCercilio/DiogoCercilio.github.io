import React from 'react';
import PortfolioPrivateItem from './PortfolioPrivateItem'
import Loading from '../../loading/Loading'

import './PortfolioPrivate.scss';

export default function PortfolioPrivate({ portfolio }) {

    return (
        <>
            <h5>Company Experiences:</h5>
            <div className="PortfolioPrivate container">
                {!portfolio ? 
                    <Loading/> : 
                    portfolio.map(item=> <PortfolioPrivateItem key={item.id} item={item} />)
                }
            </div>
        </>
    )
}