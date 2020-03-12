import React from 'react'

import MenuSidebar from 'components/menu/menu-sidebar'
import ErrorBoundary from 'ErrorBoundary'
import '../Sidebar.scss'

export default function Sidebar({ menu, showSidebar, itemActive, onChangeMenu, loading }) {
    return (
        <aside className={`Sidebar${showSidebar ? " active" : '' }`}>
            <ErrorBoundary fallback={"Something went wrong..."}>
                <MenuSidebar menu={menu} itemActive={itemActive} onChangeMenu={onChangeMenu} loading={loading} />
            </ErrorBoundary>
        </aside>
    )
}