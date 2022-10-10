import React from 'react'
import { Link } from 'react-router-dom'

const ProjectHero = ({ projectRef, projectSection }) => {
	return (
		<section>
			<div className='title-text' ref={projectSection}>
				<div className='text-name' ref={projectRef}>Click</div>
				<div className='blocks'>
					<div className='block left-block'></div>
					<div className='block right-block'></div>
				</div>
				<div className='bio'>Featured project</div>
				<Link to="/projects">
					<button className='view-projects-btn'>See More</button>
				</Link>
			</div>
			<div className="hero-image-container">
				<img className='landscape' src={require("../media/click-landscape.jpg")} alt="click" />
			</div>
		</section>
	)
}

export default ProjectHero