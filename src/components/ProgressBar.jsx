import React from 'react'

const ProgressBar = ({ titleSection, projectSection, aboutSection, contactSection, titleInView, projectInView, aboutInView, contactInView }) => {
	const scroll = (section) => {
		console.log("click")
		section.current?.scrollIntoView({ behavior: "smooth" });
	}

	return (
		<div className='progress-bar-container'>
			<div className={titleInView? 'progress-bar bar-1 active' : 'progress-bar bar-1'} onClick={() => scroll(titleSection)}></div>
			<div className={projectInView? 'progress-bar bar-2 active' : 'progress-bar bar-2'} onClick={() => scroll(projectSection)}></div>
			<div className={aboutInView? 'progress-bar bar-3 active' : 'progress-bar bar-3'} onClick={() => scroll(aboutSection)}></div>
			<div className={contactInView? 'progress-bar bar-4 active' : 'progress-bar bar-4'} onClick={() => scroll(contactSection)}></div>
		</div>
	)
}

export default ProgressBar