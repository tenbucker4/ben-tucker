import React, { useEffect, useRef, useState } from 'react'
import { useInView } from "react-intersection-observer";
import Title from '../components/Title'
import Header from '../components/Header'
import ProjectHero from '../components/ProjectHero'
import AboutHero from '../components/AboutHero'
import ContactHero from '../components/ContactHero'
import ProgressBar from '../components/ProgressBar'
import Menu from '../components/Menu';
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
			<Menu menuOpen={menuOpen}/>
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