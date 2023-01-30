import React from 'react'
import { LazyLoadComponent } from 'react-lazy-load-image-component';

import './AboutInfo.scss'
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function AboutBoxInfo({ item, onClickSkill }) {
    return (
        <LazyLoadComponent effetc="blur">
            <div className="AboutInfo">
                <h3>{item.title}</h3>
                <div className="about-wrapper-info">
                    <p>{item.content}</p>
                </div>
                <a className="btn" href={item.linkUrl} onClick={e=> onClickSkill(e, item.linkUrl)}>
                    {item.linkLabel}
                </a>
            </div> 
        </LazyLoadComponent>
    )
}
