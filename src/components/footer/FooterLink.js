import React from 'react';
import './FooterLink.scss';

export default function FooterLink({ item }) {
    return (
        <li className="FooterLink">
            <a href={item.link}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox={item.icon.viewbox}>
                    <path fill="#fff" d={item.icon.path}>
                    </path>
                </svg>
            </a>
        </li>
    )
}