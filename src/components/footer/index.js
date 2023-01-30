import React from 'react'
import FooterLink from './FooterLink'
import Loading from 'components/loading/Loading'

import './Footer.scss'

export default function Footer({ menu }) {    
    return (
        <footer className="Footer">
            <div className="container">
                <ul className="footer-list">
                    {!menu ? <Loading color="#fff" /> : menu.map(link=> <FooterLink key={link.id} item={link}/>)}
                </ul>
            </div>
        </footer>
    )
}