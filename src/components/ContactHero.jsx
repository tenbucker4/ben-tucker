import React from 'react'

const ContactHero = ({ contactRef, contactSection }) => {
	return (
		<section ref={contactSection}>
			<div className='title-text'>
				<div className='text-name' ref={contactRef}>Contact Me</div>
				<div className='blocks'>
					<div className='block left-block'></div>
					<div className='block right-block'></div>
				</div>
				<div className='bio'>
					<p>bwtucker4@gmail.com</p>
				</div>
			</div>
		</section>
	)
}

export default ContactHero