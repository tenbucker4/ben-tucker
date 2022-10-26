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
	const mainBody = useRef();
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
			<Header mainBody={mainBody} scroll={scroll} projectSection={projectSection} aboutSection={aboutSection} contactSection={contactSection} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			<main ref={mainBody} style={{ filter: menuOpen? "blur(4px)" : "none", pointerEvents: menuOpen? "none" : "inherit" }}>
				<Title scroll={scroll} titleSection={titleSection} projectSection={projectSection}/>
				<ProjectHero projectSection={projectSection} />
				<AboutHero aboutSection={aboutSection} />
				<ContactHero contactSection={contactSection} />
			</main>
			<LeftLinks />
		</>
		
	)
}

export default Home