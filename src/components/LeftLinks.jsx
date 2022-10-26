import React from 'react'
import Icon from '@mdi/react'
import { mdiGithub, mdiLinkedin } from '@mdi/js';

const LeftLinks = () => {
    return (
        <div className='side-link-nav'>
			<div className="side-links">
				<a href="mailto:bwtucker4@gmail.com"><div className="contact-email serif">bwtucker4@gmail.com</div></a>
				<div className="socials-links">
					<a href="https://github.com/tenbucker4" target="_blank" rel='noreferrer'>
						<Icon path={mdiGithub}
						className='social-link'
						size={1.2}
						color="#e4e7f6"/>
					</a>
					<a href="https://www.linkedin.com/in/ben-tucker-6a520911a/" target="_blank" rel='noreferrer'>
						<Icon path={mdiLinkedin}
						className='social-link'
						size={1.2}
						color="#e4e7f6"/>
					</a>
				</div>
			</div>
			<div className='block'></div>
		</div>
    )
}

export default LeftLinks