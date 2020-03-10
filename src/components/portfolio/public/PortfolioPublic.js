import React from 'react'
import './PortfolioPublic.scss'
import PortfolioPublicItem from './PortfolioPublicItem'
import Loading from '../../loading/Loading'

export default function PortfolioPublic({ portfolio }) {

    return (
        <>
            <h5>Some public Projects:</h5>
            <section className="PortfolioPublic flex">
                <div className="container container-small">
                    {!portfolio ? <Loading zoom=".3" color="#333" /> : portfolio.map(banner=> <PortfolioPublicItem key={banner.id} banner={banner} />)}
                </div>
            </section>
        </>
    );
}