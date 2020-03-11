import React, { useState, useEffect } from 'react'
import PortfolioPrivate from './private/PortfolioPrivate';
import PortfolioPublic from './public/PortfolioPublic';
import PortfolioPersonal from './personal/PortfolioPersonal';

import { WorksService } from '../../services';

const worksService = new WorksService();

export default function Portfolio({ onGetScroll }) {

    const [ privatePortfolio, setPrivatePortfolio ] = useState()
    const [ publicPortfolio, setPublicPortfolio ] = useState()
    const [ personalPortfolio, setPersonalPortfolio ] = useState()

    useEffect(() => {
        (async function() {    
          setPrivatePortfolio(await worksService.getPrivate());
          setPublicPortfolio(await worksService.getPublic());
          setPersonalPortfolio(await worksService.getPersonal());
        })();
    
    }, [])    

    return (
        <section className="Portfolio" ref={e=> onGetScroll(e)}>
            <PortfolioPrivate portfolio={privatePortfolio} />
            <PortfolioPublic portfolio={publicPortfolio} />
            <PortfolioPersonal portfolio={personalPortfolio} />
        </section>
    )
}