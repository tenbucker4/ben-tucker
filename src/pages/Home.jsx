import React, { useEffect, useRef, useState } from 'react'
import { useInView } from "react-intersection-observer";
import Title from '../components/Title'
import Header from '../components/Header'
import Icon from '@mdi/react'
import ProjectHero from '../components/ProjectHero'
import AboutHero from '../components/AboutHero'
import ContactHero from '../components/ContactHero'
import ProgressBar from '../components/ProgressBar'
import { mdiGithub, mdiLinkedin, mdiFileAccount } from '@mdi/js';
import resume from "../media/Ben-Tucker-Resume.pdf";
import "../styles/home.css"

const Home = ({ menuOpen, setMenuOpen }) => {
	const [titleRef, titleInView] = useInView();
	const [projectRef, projectInView] = useInView();
	const [aboutRef, aboutInView] = useInView();
	const [contactRef, contactInView] = useInView();

	const titleSection = useRef();
	const projectSection = useRef();
	const aboutSection = useRef();
	const contactSection = useRef();


	return (
		<main>
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
			<Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			<ProgressBar titleSection={titleSection} projectSection={projectSection} aboutSection={aboutSection} contactSection={contactSection} titleInView={titleInView} projectInView={projectInView} aboutInView={aboutInView} contactInView={contactInView}/>
			<Title titleSection={titleSection} titleRef={titleRef} />
			<ProjectHero projectSection={projectSection} projectRef={projectRef} />
			<AboutHero aboutSection={aboutSection} aboutRef={aboutRef}/>
			<ContactHero contactSection={contactSection} contactRef={contactRef}/>
		</main>
	)
}

export default Home