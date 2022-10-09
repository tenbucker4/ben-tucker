import React from 'react'

const AboutHero = ({ aboutRef, aboutSection }) => {
	return (
		<section ref={aboutSection}>
			<div className='title-text'>
				<div className='text-name' ref={aboutRef}>About Me</div>
				<div className='blocks'>
					<div className='block left-block'></div>
					<div className='block right-block'></div>
				</div>
				<div className='bio'>I love learning, solving problems,<br></br> and building visually-appealing products</div>
				<button className='learn-more-btn'>Learn More</button>
			</div>
		</section>
	)
}

export default AboutHero