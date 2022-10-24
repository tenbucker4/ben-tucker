import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import Menu from './Menu';
import Icon from '@mdi/react'
import { mdiGithub, mdiLinkedin, mdiFileAccount } from '@mdi/js';
import resume from "../media/Ben-Tucker-Resume.pdf";
import "../styles/header.css"

const Header = ({ menuOpen, setMenuOpen }) => {
	const scrollTop = () => {
		window.scrollTo(0, 0);
	}

	useEffect(() => {
		document.body.classList.toggle("scroll-restrict");
	}, [menuOpen])


	return (
		<header style={{ backgroundColor: menuOpen? "transparent" : "#03030290" }}>
			<button onClick={() => scrollTop()} style={{ filter: menuOpen? "blur(4px)" : "none", cursor: menuOpen? "default" : "pointer" }} className='home-link main-accent serif'>Ben Tucker</button>
			<div className='header-nav'>
				<button className='header-btn'>Projects</button>
				<button className='header-btn'>About</button>
				<button className='header-btn'>Contact</button>
				<button className='resume-btn'>Resume</button>
				<div style={{ zIndex: menuOpen? "99" : "10" }} className='hamburger' onClick={() => setMenuOpen(prev => !prev)}>
					<span className={menuOpen ? "hamburger-bun top-bun active" : "hamburger-bun top-bun"}></span>
					<span className={menuOpen ? "hamburger-bun bottom-bun active" : "hamburger-bun bottom-bun"}></span>
				</div>
			</div>
			<Menu menuOpen={menuOpen}/>
		</header>
	)
}

export default Header