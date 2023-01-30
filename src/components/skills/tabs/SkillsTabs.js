import React from 'react'
import SkillsTab from './SkillsTab'
import Loading from '../../loading/Loading'

import './SkillsTabs.scss'

export default function SkillsTabs({ active, onChangeCategory, categories, loading }) {

    return (
        <div className='SkillsTabs'>
            <ul>
                {loading ? <Loading/> : categories.map(category=> {
                    return <SkillsTab 
                                key={category.id} 
                                category={category} 
                                active={active}
                                onChangeCategory={onChangeCategory}
                           />
                })}
            </ul>
        </div>
    )
}