import React from 'react'
import MenuTrigger from '../menu/menu-trigger/MenuTrigger'
import MenuHeader from '../menu/menu-header/MenuHeader'
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
