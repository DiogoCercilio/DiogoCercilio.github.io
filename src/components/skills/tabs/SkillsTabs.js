import React from 'react'
import SkillsTab from './SkillsTab'
import Loading from '../../loading/Loading'

import './SkillsTabs.scss'

export default function SkillsTabs({ active, onChangeCategory, categories, loading }) {

    return (
        <div className='SkillsTabs'>
            <ul>
                {loading ? <Loading zoom=".3" color="#333"/> : categories.map(category=> {
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