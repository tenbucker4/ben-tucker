import React from 'react'

const Title = ({ scroll, titleRef, titleSection, projectSection }) => {

	return (
		<section className='title-div' ref={titleSection}>
			<div className='title-text'>
				<p className='serif main-accent p-smaller-text'>Hi, my name is</p>
				<h1 className='text-name bright' ref={titleRef}>Ben Tucker.</h1>
				<h1 className='grey-text'>I build digital products.</h1>
				<div className='blocks'>
					<div className='block left-block'></div>
					<div className='block right-block'></div>
				</div>
				<p className='grey-text p-truncate'>I'm a frontend developer and analytical chemist excited by challenging problems, learning, and building functional and intuitive products for the web.</p>
				<button className='title-call-to-action' onClick={() => scroll(projectSection)}>See my work</button>
			</div>
		</section>
	)
}

export default Title