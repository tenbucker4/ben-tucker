import React from 'react'
import Icon from '@mdi/react'
import { mdiGithub, mdiLinkedin } from '@mdi/js';

const LeftLinks = () => {
    return (
        <div className='side-link-nav'>
			<div className="side-links">
				<div className="contact-email serif">bwtucker4@gmail.com</div>
				<div className="socials-links">
					<Icon path={mdiGithub}
					size={1.2}
					color="#bdbcb1"/>
					<Icon path={mdiLinkedin}
					size={1.2}
					color="#bdbcb1"/>
				</div>
			</div>
			<div className='block'></div>
		</div>
    )
}

export default LeftLinks