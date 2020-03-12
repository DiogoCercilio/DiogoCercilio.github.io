import React from 'react';
import './MenuSidebarItem.scss';
import { Link } from 'react-router-dom' 

export default function ItemMenuSidebar({ item, itemActive, onChangeMenu }) {
    return (
        <li className={`MenuSidebarItem${itemActive === item.id ? ' active' : ''}`}>
            {item.alias !== 'blog' ?
                <Link to={`#${item.alias}`} onClick={e=> {e.preventDefault(); onChangeMenu(item.id) }}>
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