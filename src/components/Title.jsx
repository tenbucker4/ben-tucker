import React, { useEffect, useState } from 'react'

const Title = ({ titleRef, titleSection }) => {

	return (
		<section className='title-div' ref={titleSection}>
			<div className='title-text'>
				<div className='text-name' ref={titleRef}>Ben<br></br>Tucker</div>
				<div className='blocks'>
					<div className='block left-block'></div>
					<div className='block right-block'></div>
				</div>
				<div className='bio'>frontend developer / chemist</div>
			</div>
			<div className='molecule-container'>
				<div className='molecule-bg bg-first-layer'></div>
				<div className='molecule-bg bg-second-layer'></div>
				<div className='molecule-bg bg-third-layer'></div>
				<div className='molecule-bg bg-fourth-layer'></div>
			</div>
			<div className="benzene-overlay">
				<h1>PORTFOLIO</h1>
				<div className='benzene-outer'>
					<div className='benzene-bond top-bond'></div>
					<div className='benzene-bond bottom-left-bond'></div>
					<div className='benzene-bond bottom-right-bond'></div>
				</div>
			</div>
		</section>
	)
}

export default Title