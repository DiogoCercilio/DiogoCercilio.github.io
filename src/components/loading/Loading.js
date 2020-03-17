import React from 'react'
import './Loading.scss'

export default function Loading({ zoom, color }) {
    return (
        <div className="Loading" style={zoom ? {zoom} : {zoom: '.3'}}>
            <div style={{borderTopColor: color||'#f00' }}></div>
            <div style={{borderTopColor: color||'#f00' }}></div>
            <div style={{borderTopColor: color||'#f00' }}></div>
            <div style={{borderTopColor: color||'#f00' }}></div>
        </div>        
    )
}
