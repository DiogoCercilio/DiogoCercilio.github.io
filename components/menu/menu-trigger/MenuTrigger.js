import React from 'react';

export default function MenuTrigger({ isShowing, onChangeMenuTrigger }) {
    return (
        <div className='MenuTrigger'>
            <div className="toggle">
                <input id="menu-trigger" checked={isShowing} type="checkbox" onChange={e=> {onChangeMenuTrigger(e.target.checked)}} />
                <label htmlFor="menu-trigger"></label>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}