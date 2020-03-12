import React, { useState, useEffect } from 'react';
import { About, Portfolio, Skills } from 'components'
import { scrollTo } from 'components/scroll/useScroll'

import '../Site.scss';

export default function Home({ offset, onUpdateOffset, service }) {

    const [ activeCategory, setActiveCategory ] = useState('frontend');
    const [ aboutInfo, setAboutInfo ] = useState();

    useEffect(() => {
        (async ()=> setAboutInfo(await service.getAboutInfo()))()
    }, [])

    const onClickSkill = (e, alias)=> {
        e.preventDefault();
        setActiveCategory(alias);
        scrollTo(offset[2].min);
    }

    return (
        <>
        <About 
            aboutInfo={aboutInfo}
            onGetScroll={e=> { onUpdateOffset(0, e)}} 
            onClickSkill={(e,alias)=> onClickSkill(e, alias)} 
            loading={!aboutInfo}
        />
        <Portfolio onGetScroll={e=> onUpdateOffset(1, e)} />
        <Skills 
            onGetScroll={e=> onUpdateOffset(2, e)} 
            activeCategory={activeCategory}
            onChangeCategory={(e, active)=> setActiveCategory(active)}
        />
        </>
    );
}