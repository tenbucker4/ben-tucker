import React from 'react'
import { Link } from 'react-router-dom';
import { mdiGithub, mdiLinkedin, mdiFileAccount } from '@mdi/js';
import Icon from '@mdi/react'
import resume from "../media/Ben-Tucker-Resume.pdf";

const Menu = ({ menuOpen }) => {

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