import React from 'react'
import Menu from './Menu';
import resume from "../media/Ben-Tucker-Resume.pdf";
import "../styles/header.css"

const Header = ({ menuOpen, setMenuOpen }) => {
	const scrollTop = () => {
		window.scrollTo(0, 0);
	}


	return (
		<header style={{ backgroundColor: menuOpen? "transparent" : "#03030290" }}>
			<button onClick={() => scrollTop()} style={{ filter: menuOpen? "blur(4px)" : "none", cursor: menuOpen? "default" : "pointer" }} className='home-link main-accent serif'>Ben Tucker</button>
			<div className='header-nav'>
				<button className='header-btn'>Projects</button>
				<button className='header-btn'>About</button>
				<button className='header-btn'>Contact</button>
				<a href={resume} download><button className='resume-btn'>Resume</button></a>
				<div className='hamburger' onClick={() => setMenuOpen(prev => !prev)}>
					<span className={menuOpen ? "hamburger-bun top-bun active" : "hamburger-bun top-bun"}></span>
					<span className={menuOpen ? "hamburger-bun bottom-bun active" : "hamburger-bun bottom-bun"}></span>
				</div>
			</div>
			<Menu setMenuOpen={setMenuOpen} menuOpen={menuOpen}/>
		</header>
	)
}

export default Header