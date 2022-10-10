import React from 'react'
import Icon from '@mdi/react'
import { mdiAccount } from '@mdi/js';

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
				<button className='learn-more-btn'>Learn More</button>
			</div>
			<div className="hero-image-container">
				<div className='hero-image'>
					<Icon path={mdiAccount}
					className='avatar'
					color="#ff4d5a"/>
				</div>
			</div>
		</section>
	)
}

export default AboutHero