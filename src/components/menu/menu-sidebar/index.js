import React from 'react';
import MenuSidebarItem  from './MenuSidebarItem';
import Loading from 'components/loading/Loading'

import './MenuSidebar.scss'

export default function MenuSidebar({ menu, itemActive, onChangeMenu, loading }) {
        
    return (
        <menu className="MenuSidebar">
            <ul>
                {loading ? <Loading zoom=".4" color="#fff" /> : 
                    menu.map(item=> {
                        if(item.alias === "blog") return;
                        return <MenuSidebarItem key={item.id} item={item} itemActive={itemActive} onChangeMenu={onChangeMenu} />
                    })
                }
            </ul>
        </menu>
    )
}