import React from 'react'

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
				<button className='view-projects-btn'>See More</button>
			</div>
		</section>
	)
}

export default ProjectHero