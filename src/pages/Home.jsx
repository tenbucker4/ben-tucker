import React, { useEffect, useRef, useState } from 'react'
import { useInView } from "react-intersection-observer";
import Title from '../components/Title'
import Header from '../components/Header'
import ProjectHero from '../components/ProjectHero'
import AboutHero from '../components/AboutHero'
import ContactHero from '../components/ContactHero'
import LeftLinks from '../components/LeftLinks';
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

	useEffect(() => {
		setMenuOpen(false)
	}, [])

	const scroll = (section) => {
		console.log(section)
		section.current?.scrollIntoView();
	}


	return (
		<>
			<Header scroll={scroll} projectSection={projectSection} aboutSection={aboutSection} contactSection={contactSection} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			<main style={{ filter: menuOpen? "blur(4px)" : "none", pointerEvents: menuOpen? "none" : "inherit" }}>
				<Title scroll={scroll} titleSection={titleSection} titleRef={titleRef} projectSection={projectSection}/>
				<ProjectHero projectSection={projectSection} projectRef={projectRef} />
				<AboutHero aboutSection={aboutSection} aboutRef={aboutRef}/>
				<ContactHero contactSection={contactSection} contactRef={contactRef}/>
			</main>
			<LeftLinks />
		</>
		
	)
}

export default Home