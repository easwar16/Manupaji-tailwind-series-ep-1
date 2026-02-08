import React from 'react'

const NavBar = () => {
    const links = [{ title: 'Guide', href: '#' },
    { title: 'Pricing', href: '#' },
    { title: 'Login', href: '#' }];
    return (
        <div className='navbar-root'>
            <div className='logo'>Fintech</div>
            <div className='links'>{links.map((link) => { return <a className='link-items' key={link.title} href={link.href}>{link.title}</a> })}</div>
            <button className='btn'>Start free trial</button>
        </div>
    )
}

export default NavBar