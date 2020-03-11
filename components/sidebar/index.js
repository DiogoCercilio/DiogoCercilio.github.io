import React from 'react'
import MenuSidebar from '../menu/menu-sidebar'

export default function Sidebar({ menu, showSidebar, itemActive, onChangeMenu, loading }) {
    return (
        <aside className={`Sidebar${showSidebar ? " active" : '' }`}>
            <MenuSidebar menu={menu} itemActive={itemActive} onChangeMenu={onChangeMenu} loading={loading} />
        </aside>
    )
}
