import React from 'react'

const Project = ({ imgSrc, title, description, stack, codeLink, liveLink }) => {

    return (
        <div className="project-container">
            <div className='project-media'>
                <img src={imgSrc} className="project-image" href={title}></img>
            </div>
            <div className="project-text">
                <p className='serif main-accent p-smaller-text'>Featured project</p>
                <h2 className='bright'>{title}</h2>
                <div className="project-description">
                    <p>{description}</p>
                </div>
                <p className='serif p-smaller-text'>{stack}</p>
                <div className='project-links-container'>
                    <a href={liveLink} target="_blank" rel="noreferrer"><button className="live-site">Live Site</button></a>
                    <a href={codeLink} target="_blank" rel="noreferrer"><button className="see-code">View Code</button></a>
                </div>
            </div>
        </div>
    )
}

export default Project