import React from 'react'
import './Loading.scss'

export default function Loading({ zoom, color }) {
    return (
        <div className="Loading" style={{zoom}}>
            <div style={{borderTopColor: color}}></div>
            <div style={{borderTopColor: color}}></div>
            <div style={{borderTopColor: color}}></div>
            <div style={{borderTopColor: color}}></div>
        </div>        
    )
}
