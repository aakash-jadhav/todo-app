import React from 'react'

export default function Header() {
    return (
        <header style={headerStyle}>
            <h3>TODO LIST</h3>
        </header>
    )
}
const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}