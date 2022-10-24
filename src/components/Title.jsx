import React from 'react'

const Title = ({ titleRef, titleSection }) => {

	return (
		<section className='title-div' ref={titleSection}>
			<div className='title-text'>
				<div className='text-name' ref={titleRef}>Ben<br></br>Tucker</div>
				<div className='blocks'>
					<div className='block left-block'></div>
					<div className='block right-block'></div>
				</div>
				<div className='bio'>Frontend developer / chemist</div>
			</div>
		</section>
	)
}

export default Title