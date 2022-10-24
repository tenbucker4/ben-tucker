import React from 'react'

const Title = ({ titleRef, titleSection }) => {

	return (
		<section className='title-div' ref={titleSection}>
			<div className='title-text'>
				<p className='serif main-accent p-smaller-text'>Hi, my name is</p>
				<h1 className='text-name' ref={titleRef}>Ben Tucker</h1>
				<h1 className='grey-text'>I make things on the web</h1>
				<div className='blocks'>
					<div className='block left-block'></div>
					<div className='block right-block'></div>
				</div>
				<p className='grey-text p-truncate'>I'm a frontend developer and chemist excited by tackling problems, learning, and building functional and intuitive digital products.</p>
			</div>
		</section>
	)
}

export default Title