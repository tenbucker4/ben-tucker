import React from 'react'
import { mdiGithub, mdiLinkedin, mdiFileAccount } from '@mdi/js';
import Icon from '@mdi/react'
import resume from "../media/Ben-Tucker-Resume.pdf";

const Menu = ({ menuOpen }) => {
    return (
        <div className='menu' style={{ top: menuOpen ? "0vh" : "-100%" }}>
            <div className="menu-container">
                <ul>
                    <li>Home</li>
                    <li>Projects</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <div className='menu-links'>
                    <a href="https://github.com/tenbucker4" target="_blank" rel='noreferrer'>
                        <Icon path={mdiGithub}
                        className='social-link'
                        size={1.5}
                        color="white"/>
                    </a>
                    <a href="https://www.linkedin.com/in/ben-tucker-6a520911a/" target="_blank" rel='noreferrer'>
                        <Icon path={mdiLinkedin}
                        className='social-link'
                        size={1.5}
                        color="white"/>
                    </a>
                    <a href={resume} download>
                        <Icon path={mdiFileAccount}
                        className='social-link'
                        size={1.5}
                        color="white"/>	
                    </a>
                </div>
            </div>
         </div>
    )
}

export default Menu