import React, { useState, useEffect } from 'react'
import SkillsService from '../../services/SkillsService'
import SkillsTabs from './tabs/SkillsTabs'
import SkillsItem from './SkillItem'
import Loading from '../loading/Loading'
import { LazyLoadComponent } from 'react-lazy-load-image-component';

import './Skills.scss'

const skillsService = new SkillsService();

export default function Skills({ onGetScroll, activeCategory, onChangeCategory }) { 

    const [ categories, setCategories ] = useState([])
    const [ skills, setSkills ] = useState([])
    const [ loading, setLoading ] = useState(true)
    
    useEffect(()=> {
        (async function() {
            setCategories(await skillsService.getCategories())
            setSkills(await skillsService.getSkills(activeCategory))
            setLoading(false)
        })()
    }, [activeCategory])

    return (
        <LazyLoadComponent>
            <section className="Skills" ref={e=> onGetScroll(e)}>
                <div className="container">
                    <SkillsTabs
                        active={activeCategory}
                        categories={categories}
                        onChangeCategory={onChangeCategory}
                        loading={!categories}
                        />
                    {loading ? <Loading/> : 
                        skills[activeCategory].map((category, index)=> <SkillsItem key={`${category.id}_${index}`} category={category}/>
                        )}
                </div>
            </section>
        </LazyLoadComponent>
    )
}