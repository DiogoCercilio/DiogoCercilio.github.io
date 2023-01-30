import React, { useContext } from 'react'

import MenuSidebar from '../../menu/menu-sidebar'
import ErrorBoundary from '../../../ErrorBoundary'
import { SiteContext } from '../../../pages/site'

import '../Sidebar.scss'

export default function Sidebar({ menu }) {
    
    const siteContext = useContext(SiteContext)
        
    return (
        <aside className={`Sidebar${siteContext.isShowingSidebar ? " active" : '' }`}>
            <ErrorBoundary fallback={"Something went wrong..."}>
                <MenuSidebar menu={menu} />
            </ErrorBoundary>
        </aside>
    )
}