import React, { useContext } from 'react';
import './MenuTrigger.scss';
import { SiteContext } from '../../../pages/site';

export default function MenuTrigger() {
    
    const siteContext = useContext(SiteContext)
    
    return (
        <div className='MenuTrigger'>
            <div className="toggle">
                <input id="menu-trigger" checked={siteContext.isShowingSidebar} type="checkbox" onChange={e=> {siteContext.setIsShowingSidebar(e.target.checked)}} />
                <label htmlFor="menu-trigger"></label>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}