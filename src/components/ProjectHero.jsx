import React from 'react'
import { Link } from 'react-router-dom'

const ProjectHero = ({ projectRef, projectSection }) => {
	return (
		<section id="projects">
			<div className='title-text' ref={projectSection}>
				<div className='text-name' ref={projectRef}>Click</div>
				<div className='blocks'>
					<div className='block left-block'></div>
					<div className='block right-block'></div>
				</div>
				<div className='bio'>Featured project</div>
			</div>
		</section>
	)
}

export default ProjectHero