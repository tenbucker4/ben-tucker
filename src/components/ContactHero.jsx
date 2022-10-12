import React from 'react'
import Icon from '@mdi/react'
import { mdiGithub, mdiLinkedin, mdiFileAccount, mdiMessageReplyText } from '@mdi/js';
import resume from "../media/Ben-Tucker-Resume.pdf";

const ContactHero = ({ contactRef, contactSection }) => {
	return (
		<section ref={contactSection}>
			<div className='title-text'>
				<div className='text-name' ref={contactRef}>Contact</div>
				<div className='blocks'>
					<div className='block left-block'></div>
					<div className='block right-block'></div>
				</div>
				<div className='bio contact-bio'>
					<a href="mailto:bwtucker4@gmail.com"><p>bwtucker4@gmail.com</p></a>
					<div className='contact-links'>
						<a href="https://github.com/tenbucker4" target="_blank" rel='noreferrer'>
							<Icon path={mdiGithub}
							className='social-link'
							size={1.5}
							color="white"/>
						</a>
						<a href="https://www.linkedin.com/in/ben-tucker-6a520911a/" target="_blank" rel='noreferrer'>
							<Icon path={mdiLinkedin}
							className='social-link'
							size={1.5}
							color="white"/>
						</a>
						<a href={resume} download>
							<Icon path={mdiFileAccount}
							className='social-link'
							size={1.5}
							color="white"/>	
						</a>
					</div>
				</div>
			</div>
			<div className="hero-image-container">
				<div className='hero-image'>
					<Icon path={mdiMessageReplyText}
					className='avatar'
					color="#ff4d5a"/>
				</div>
			</div>
		</section>
	)
}

export default ContactHero