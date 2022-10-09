import React from 'react'

const ProjectHero = ({ projectRef }) => {
	return (
		<section>
			<div className='title-text'>
				<div className='text-name' ref={projectRef}>Click</div>
				<div className='blocks'>
					<div className='block left-block'></div>
					<div className='block right-block'></div>
				</div>
				<div className='bio'>projects</div>
			</div>
		</section>
	)
}

export default ProjectHero