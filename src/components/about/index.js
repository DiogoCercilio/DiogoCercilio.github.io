import React from 'react'
import AboutBoxInfo from './AboutBoxInfo'
import Loading from 'components/loading/Loading'
import { LazyLoadImage } from 'react-lazy-load-image-component';

import './About.scss'
import 'react-lazy-load-image-component/src/effects/opacity.css';

export default function About({ onGetScroll, onClickSkill, aboutInfo, loading }) {

    const getYears = ()=> {
        return (new Date()).getFullYear() - 2012;
    }

    return (
        <section className="About" ref={e=> onGetScroll(e)}>
            <div className="container">
                <LazyLoadImage
                    effect="opacity"
                    className="about-image" 
                    width="116" 
                    height="116" 
                    src="me.jpeg" 
                    alt="Me"                    
                />

                <h1>Diogo Cercílio</h1>
                <h2><span role="img" aria-label="brain">🧠</span> Brazilian Fullstack developer. 
                    <br className="show-tablet"/> +{getYears()} years of Experience / Javascript Certified <span role="img" aria-label="computer">💻</span>
                </h2>
                <div className="about-boxes">
                    {loading ? 
                        <Loading/> : 
                        aboutInfo.map(item=> <AboutBoxInfo key={item.id} item={item} onClickSkill={onClickSkill} />)
                    }
                </div>
            </div>
        </section>
    );
}