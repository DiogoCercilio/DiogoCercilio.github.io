import React, { useContext } from 'react'
import MenuTrigger from 'components/menu/menu-trigger/MenuTrigger'
import MenuHeader from 'components/menu/menu-header/MenuHeader'
import './Header.scss'

export default function Header({ menu }) {
    
    return (
        <section className="Header">
            <div className="container">
                <MenuHeader menu={menu} />
                <MenuTrigger />
            </div>
        </section>
    )
}
