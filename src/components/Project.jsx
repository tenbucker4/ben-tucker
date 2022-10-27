import React from 'react'
import Icon from '@mdi/react'
import { mdiGithub, mdiOpenInNew } from '@mdi/js';

const Project = ({ imgSrc, title, description, stack, codeLink, liveLink }) => {

    return (
        <>
            <div className='project-media'>
                <a className='project-image-link' href={liveLink} target="_blank" rel='noreferrer'>
                    <img src={imgSrc} alt={title} className="project-image" href={title}></img>
                </a>
            </div>
            <div className="project-text">
                <p className='serif main-accent p-smaller-text'>Featured project</p>
                <h2 className='bright'>{title}</h2>
                <div className="project-card">
                    <p>{description}</p>
                    <p className='serif p-smaller-text'>{stack}</p>
                </div>
                <div className='project-links'>
                    <a href={codeLink} target="_blank" rel='noreferrer'>
						<Icon path={mdiGithub}
						className='project-link'
						size={1.2}
						color="#e4e7f6"/>
					</a>
					<a href={liveLink} target="_blank" rel='noreferrer'>
						<Icon path={mdiOpenInNew}
						className='project-link'
						size={1.2}
						color="#e4e7f6"/>
					</a>
                </div>
            </div>
        </>
    )
}

export default Project