import React from 'react'
import './AboutInfo.scss'

export default function AboutBoxInfo({ item, onClickSkill }) {
    return (
        <div className="AboutInfo">
            <h3>{item.title}</h3>
            <div className="about-wrapper-info">
                <p>{item.content}</p>
            </div>
            <a className="btn" href={item.linkUrl} onClick={e=> onClickSkill(e, item.linkUrl)}>
                {item.linkLabel}
            </a>
        </div> 
    )
}
