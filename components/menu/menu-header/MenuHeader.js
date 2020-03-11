import React from 'react';

export default function MenuHeader({ itemActive }) {
    return (
        <menu className='MenuHeader'>
            {itemActive &&
            <ul>
                <li className="MenuHeaderItem active">
                    {itemActive.name}
                </li>
            </ul>
            }
        </menu>
    )
}