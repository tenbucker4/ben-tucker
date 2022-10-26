import React, { useState, useEffect } from 'react'
import Menu from './Menu';
import resume from "../media/Ben-Tucker-Resume.pdf";
import Logo from './Logo';
import "../styles/header.css"

const Header = ({ scroll, projectSection, aboutSection, contactSection, menuOpen, setMenuOpen }) => {
	const [shadow, setShadow] = useState("none");

	const listenScrollEvent = () => {
        if (window.scrollY > 75) {
			setShadow("0 0 10px 0 rgb(0 0 0 / 6%)")
        } else {
			setShadow("none")
        }
    }

	useEffect(() => {
		window.addEventListener('scroll', listenScrollEvent)

		return () => (
			window.removeEventListener('scroll', listenScrollEvent)
		)
	}, []);

	const scrollTop = () => {
		window.scrollTo(0, 0);
	}


	return (
		<header style={{ backgroundColor: menuOpen? "transparent" : "#343a4990", boxShadow: shadow }}>
			<button onClick={() => scrollTop()} style={{ filter: menuOpen? "blur(4px)" : "none", cursor: menuOpen? "default" : "pointer" }} className='home-link main-accent serif'>
				<Logo />
			</button>
			<div className='header-nav'>
				<button className='header-btn' onClick={() => scroll(projectSection)}>Projects</button>
				<button className='header-btn' onClick={() => scroll(aboutSection)}>About</button>
				<button className='header-btn' onClick={() => scroll(contactSection)}>Contact</button>
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