import React from 'react';

export default function SkillsItem({ category }) {
    return (
        <div className='SkillsItem' style={{backgroundImage: 'url(bg.jpg)'}}>
            <h3>{category.name}</h3>
            <div className="skills">
                {category.tags.map(item=> <span key={`${category.name}_${item}`}>{item}</span>)}
            </div>
        </div>
    )
}