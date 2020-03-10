import React from 'react'
import './About.scss'
import AboutBoxInfo from './AboutBoxInfo'
import Loading from '../loading/Loading'

export default function About({ onGetScroll, onClickSkill, aboutInfo, loading }) {

    const getYears = ()=> {
        return (new Date()).getFullYear() - 2012;
    }

    return (
        <section className="About" ref={e=> onGetScroll(e)}>
            <div className="container">
                <h1>Diogo Cercílio</h1>
                <h2>🧠 Brazilian Fullstack developer. <br className="show-tablet"/> +{getYears()} years of Experience / Javascript Certified 💻</h2>

                <div className="about-boxes">
                    {loading ? <Loading zoom=".3" color="#333"/> : aboutInfo.map(item=> <AboutBoxInfo key={item.id} item={item} onClickSkill={onClickSkill} />)}
                </div>
            </div>
        </section>
    );
}