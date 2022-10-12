import React from 'react'
import { Link } from 'react-router-dom';
import Icon from '@mdi/react'
import { mdiGithub, mdiLinkedin, mdiFileAccount } from '@mdi/js';
import resume from "../media/Ben-Tucker-Resume.pdf";
import "../styles/header.css"

const Header = ({ menuOpen, setMenuOpen }) => {

	return (
		<header>
			<Link to="/ben-tucker">
				<div className='me'>Ben Tucker</div>
			</Link>
			<div className='header-nav'>
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
				<div className='hamburger' onClick={() => setMenuOpen(prev => !prev)}>
					<span className={menuOpen ? "hamburger-bun top-bun active" : "hamburger-bun top-bun"}></span>
					<span className={menuOpen ? "hamburger-bun bottom-bun active" : "hamburger-bun bottom-bun"}></span>
				</div>
			</div>
		</header>
	)
}

export default Header