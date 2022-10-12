import React, { useEffect } from 'react'
import Menu from '../components/Menu'
import Header from '../components/Header'
import Bio from '../components/Bio'
import "../styles/about.css"

const About = ({ menuOpen, setMenuOpen }) => {
	useEffect(() => {
		setMenuOpen(false)
	}, [])

    return (
		<>
			<Menu menuOpen={menuOpen}/>
			<Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			<Bio />
		</>
    )
}

export default About