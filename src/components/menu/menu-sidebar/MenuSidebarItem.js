import React, { useContext } from 'react';
import './MenuSidebarItem.scss';
import { Link } from 'react-router-dom' 

import { SiteContext } from '../../../pages/site'

export default function ItemMenuSidebar({ item }) {

    const siteContext = useContext(SiteContext)

    return (
        <li className={`MenuSidebarItem${siteContext.activeMenuItem === item.id ? ' active' : ''}`}>
            {item.alias !== 'blog' ?
                <Link to={`#${item.alias}`} onClick={e=> {
                    e.preventDefault(); 
                    siteContext.onChangeMenuHandler(item.id)
                }}>
                    {item.alias}
                </Link>
                :
                <a href={item.to}>
                    {item.alias}
                </a>
            }
        </li>
    )
}