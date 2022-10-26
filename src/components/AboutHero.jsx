import React from 'react'
import Icon from '@mdi/react'
import { mdiArrowRightThin } from '@mdi/js';
import profilePic from "../media/profilepic.jpg"
import resume from "../media/Ben-Tucker-Resume.pdf"
import "../styles/about.css"

const AboutHero = ({ aboutRef, aboutSection }) => {
	return (
		<section ref={aboutSection}>
			<h2 className='section-header bright'>About Me</h2>
			<div className='bio'>
				<div className="bio-left">
					<p>Hi, I'm Ben. I'm a formally educated analytical chemist and self-taught frontend developer. Since discovering web development, I've become fascinated with the combination of logic, creativity, and endless new technologies that promote a mentality of lifelong learning.</p>
					<p>Some of the technologies I'm comfortable working with include:</p>
					<ul className='skills-list serif p-smaller-text'>
						<li className='skill-entry'>
							<Icon path={mdiArrowRightThin}
							size={1}
							color="#5cd783"/>
							HTML</li>
						<li className='skill-entry'>
							<Icon path={mdiArrowRightThin}
							size={1}
							color="#5cd783"/>
							React.js
						</li>
						<li className='skill-entry'>
							<Icon path={mdiArrowRightThin}
							size={1}
							color="#5cd783"/>
							CSS
						</li>
						<li className='skill-entry'>
							<Icon path={mdiArrowRightThin}
							size={1}
							color="#5cd783"/>
							Sass
						</li>
						<li className='skill-entry'>
							<Icon path={mdiArrowRightThin}
							size={1}
							color="#5cd783"/>
							JavaScript
						</li>
						<li className='skill-entry'>
							<Icon path={mdiArrowRightThin}
							size={1}
							color="#5cd783"/>
							Git
						</li>
					</ul>
					<p>Having previously worked in the green energy sector, sustainable practices are a real passion of mine. I'd love to combine my skillsets of chemistry and software development and build products that will have a positive impact on our planet.</p>
					<p>I'm open to opportunities where I can contribute to ambitious projects and grow as a developer. If you have an opportunity you think I'd be a good fit for, please don't hesitate to <button className='inline-btn'><p className='main-accent'>contact me</p></button>.</p>
					<a href={resume} download><button className='resume-btn'>Resume</button></a>
				</div>
				<div className="bio-right">
					<img src={profilePic} alt="me" />
				</div>
			</div>
		</section>
	)
}

export default AboutHero