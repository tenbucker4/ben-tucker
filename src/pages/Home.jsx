import React from 'react'
import { useInView } from "react-intersection-observer";
import Title from '../components/Title'
import Header from '../components/Header'
import Icon from '@mdi/react'
import ProjectHero from '../components/ProjectHero'
import AboutHero from '../components/AboutHero'
import ContactHero from '../components/ContactHero'
import ProgressBar from '../components/ProgressBar'
import { mdiGithub, mdiLinkedin, mdiFileAccount } from '@mdi/js';
import "../styles/home.css"

const Home = ({ menuOpen, setMenuOpen }) => {
	const [titleRef, titleInView] = useInView();
	const [projectRef, projectInView] = useInView();
	const [aboutRef, aboutInView] = useInView();
	const [contactRef, contactInView] = useInView();


	return (
		<main>
			<div className='main-bg'></div>
			<div className='menu' style={{ top: menuOpen ? "0vh" : "-100%" }}>
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
			<ProgressBar titleInView={titleInView} projectInView={projectInView} aboutInView={aboutInView} contactInView={contactInView}/>
			<div className="home-contents">
				<Title titleRef={titleRef}/>
				<ProjectHero projectRef={projectRef} />
				<AboutHero aboutRef={aboutRef}/>
				<ContactHero contactRef={contactRef}/>
			</div>
		</main>
	)
}

export default Home