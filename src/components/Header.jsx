import React, { useState } from 'react'
import Icon from '@mdi/react'
import { mdiGithub, mdiLinkedin, mdiFileAccount } from '@mdi/js';
import "../styles/header.css"

const Header = ({ menuOpen, setMenuOpen }) => {

	return (
		<header>
			<div className='me'>Ben Tucker</div>
			<div className='header-nav'>
				<Icon path={mdiGithub}
				size={1.5}
				color="white"/>
				<Icon path={mdiLinkedin}
				size={1.5}
				color="white"/>
				<Icon path={mdiFileAccount}
				size={1.5}
				color="white"/>
				<div className='hamburger' onClick={() => setMenuOpen(prev => !prev)}>
					<span className={menuOpen ? "hamburger-bun top-bun active" : "hamburger-bun top-bun"}></span>
					<span className={menuOpen ? "hamburger-bun bottom-bun active" : "hamburger-bun bottom-bun"}></span>
				</div>
			</div>
		</header>
	)
}

export default Header