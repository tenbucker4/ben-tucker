import React from 'react'
import resume from "../media/Ben-Tucker-Resume.pdf"

const Menu = ({ projectSection, aboutSection, contactSection, menuOpen, setMenuOpen }) => {
    const handleClick = (section) => {
        setMenuOpen(false)
        section.current?.scrollIntoView();
    }

    return (
        <div className='menu' style={{ right: menuOpen ? "0" : "-100%" }}>
            <div className="menu-container">
                <ul>
                    <li><button className='menu-btn' onClick={() => handleClick(projectSection)}>Projects</button></li>
                    <li><button className='menu-btn' onClick={() => handleClick(aboutSection)}>About</button></li>
                    <li><button className='menu-btn' onClick={() => handleClick(contactSection)}>Contact</button></li>
                    <a href={resume} download><button className='menu-resume-btn'>Resume</button></a>
                </ul>
            </div>
         </div>
    )
}

export default Menu