import React from 'react';
import MenuSidebarItem  from './MenuSidebarItem';
import Loading from 'components/loading/Loading'

import './MenuSidebar.scss'

export default function MenuSidebar({ menu }) {
        
    return (
        <menu className="MenuSidebar">
            <ul>
                {!menu.length ? <Loading zoom=".4" color="#fff" /> : 
                    menu.map(i=> <MenuSidebarItem key={i.id} item={i} />)
                }
            </ul>
        </menu>
    )
}