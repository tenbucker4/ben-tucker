import React, { useEffect } from 'react'
import resume from "../media/Ben-Tucker-Resume.pdf"

const Menu = ({ menuOpen, setMenuOpen }) => {

    return (
        <div className='menu' style={{ right: menuOpen ? "0" : "-100%" }}>
            <div className="menu-container">
                <ul>
                    <li><button className='menu-btn'>Projects</button></li>
                    <li><button className='menu-btn'>About</button></li>
                    <li><button className='menu-btn'>Contact</button></li>
                    <a href={resume} download><button className='menu-resume-btn'>Resume</button></a>
                </ul>
            </div>
         </div>
    )
}

export default Menu