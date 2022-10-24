import React, { useEffect } from 'react'

const Menu = ({ menuOpen, setMenuOpen }) => {

    return (
        <div className='menu' style={{ right: menuOpen ? "0" : "-100%" }}>
            <div className="menu-container">
                <ul>
                    <li><button className='menu-btn'>Projects</button></li>
                    <li><button className='menu-btn'>About</button></li>
                    <li><button className='menu-btn'>Contact</button></li>
                    <li><button className='menu-resume-btn'>Resume</button></li>
                </ul>
            </div>
         </div>
    )
}

export default Menu