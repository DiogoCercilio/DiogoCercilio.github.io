import React from 'react'
import './SkillsTab.scss'

export default function SkillTab({ category, active, onChangeCategory }) {

    function getActive() {
        return active === category.alias ? " active" : "";
    }

    return (
        <li className={`SkillsTab${getActive()}`} onClick={e=> { onChangeCategory(e, category.alias) }}>
            {category.name}
        </li>
    )
}