import React, { useContext, useState, useEffect } from 'react';
import './MenuHeaderItem.scss';
import './MenuHeader.scss';
import { SiteContext } from '../../../pages/site';

export default function MenuHeader({ menu }) {
    
    const siteContext = useContext(SiteContext)
    const [itemActive, setItemActive] = useState()

    useEffect(()=> {
        setItemActive(menu.find(item=> item.id === siteContext.activeMenuItem))
    }, [siteContext.activeMenuItem, menu]) 

    return (
        <menu className='MenuHeader'>
            {itemActive &&
            <ul>
                <li className="MenuHeaderItem active">
                    {itemActive.name}
                </li>
            </ul>
            }
        </menu>
    )
}