import React from 'react';
import './MenuSidebarItem.scss';

export default function ItemMenuSidebar({ item, itemActive, onChangeMenu }) {
    return (
        <li className={`MenuSidebarItem${itemActive === item.id ? ' active' : ''}`} onClick={()=> { onChangeMenu(item.id) }}>
            <a href={`#${item.alias}`} onClick={e=> e.preventDefault()}>
                {item.name}
            </a>
        </li>
    )
}