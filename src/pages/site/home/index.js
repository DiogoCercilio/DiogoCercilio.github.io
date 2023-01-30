import React, { useState, useEffect, useContext } from 'react';
import { About, Portfolio, Skills } from '../../../components'
import { scrollTo } from '../../../components/scroll/useScroll'
import { SiteContext } from '..';

import '../Site.scss';

export default function Home({ service }) {

    const [ activeCategory, setActiveCategory ] = useState('frontend');
    const [ aboutInfo, setAboutInfo ] = useState();

    const siteContext = useContext(SiteContext)

    useEffect(() => {
        (async ()=> setAboutInfo(await service.getAboutInfo()))()
    }, [service])

    const onClickSkill = (e, alias)=> {
        e.preventDefault();
        setActiveCategory(alias);
        scrollTo(siteContext.offset[2].min);
    }

    return (
        <>
        <About 
            aboutInfo={aboutInfo}
            onGetScroll={e=> { siteContext.onUpdateOffset(0, e)}} 
            onClickSkill={(e,alias)=> onClickSkill(e, alias)} 
            loading={!aboutInfo}
        />
        <Portfolio onGetScroll={e=> siteContext.onUpdateOffset(1, e)} />
        <Skills 
            onGetScroll={e=> siteContext.onUpdateOffset(2, e)} 
            activeCategory={activeCategory}
            onChangeCategory={(e, active)=> setActiveCategory(active)}
        />
        </>
    );
}