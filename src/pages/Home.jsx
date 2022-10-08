import React from 'react'
import Title from '../components/Title'
import Header from '../components/Header'
import Icon from '@mdi/react'
import { mdiGithub, mdiLinkedin, mdiFileAccount } from '@mdi/js';
import "../styles/home.css"

const Home = ({ menuOpen, setMenuOpen }) => {
	return (
		<main>
			<div className='main-bg'></div>
			<div className='menu' style={{ top: menuOpen ? "0vh" : "-100vh" }}>
				<div className="menu-container">
					<ul>
						<li>Home</li>
						<li>Projects</li>
						<li>About</li>
						<li>Contact</li>
					</ul>
					<div className='menu-links'>
						<Icon path={mdiGithub}
						size={1.5}
						color="white"/>
						<Icon path={mdiLinkedin}
						size={1.5}
						color="white"/>
						<Icon path={mdiFileAccount}
						size={1.5}
						color="white"/>
					</div>
				</div>
			</div>
			<Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			<Title />
		</main>
	)
}

export default Home