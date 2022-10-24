import React from 'react'
import { Link } from 'react-router-dom';

const AboutHero = ({ aboutRef, aboutSection }) => {
	return (
		<section ref={aboutSection}>
			<div className='title-text'>
				<div className='text-name' ref={aboutRef}>About</div>
				<div className='blocks'>
					<div className='block left-block'></div>
					<div className='block right-block'></div>
				</div>
				<div className='bio'>I love learning, solving problems,<br></br> and building visually-appealing products</div>
				<Link to="/ben-tucker/about">
					<button className='learn-more-btn'>Learn More</button>
				</Link>
			</div>
		</section>
	)
}

export default AboutHero