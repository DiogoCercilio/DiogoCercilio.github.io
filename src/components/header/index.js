import React from 'react'
import MenuTrigger from '../menu/menu-trigger/MenuTrigger'
import MenuHeader from '../menu/menu-header/MenuHeader'
import './Header.scss'

export default function Header({ isMenuOpen, onChangeMenuTrigger, itemActive }) {
    
    return (
        <section className="Header">
            <div className="container">
                <MenuHeader itemActive={itemActive} />
                <MenuTrigger isShowing={isMenuOpen} onChangeMenuTrigger={(isMenuOpen)=> { onChangeMenuTrigger(isMenuOpen) }} />
            </div>
        </section>
    )
}