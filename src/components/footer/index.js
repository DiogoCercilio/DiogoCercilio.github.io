import React from 'react'
import FooterLink from './FooterLink'
import Loading from '../loading/Loading'

import './Footer.scss'

export default function Footer({ footerLinks, loading }) {    
    return (
        <footer className="Footer">
            <div className="container">
                <ul className="footer-list">
                    {loading ? <Loading zoom=".3" color="#fff" /> : footerLinks.map(link=> <FooterLink key={link.id} item={link}/>)}
                </ul>
            </div>
        </footer>
    )
}