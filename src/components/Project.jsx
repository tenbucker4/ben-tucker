import React from 'react'

const Project = ({ imgSrc, title, type, description, stack }) => {

    return (
        <div className="project-container">
            <div className="project-text">
                <div className="project-heading">
                    <h1>{title}</h1>
                    <h3>{type}</h3>
                </div>
                <div className="project-description">
                    <p>{description}</p>
                </div>
                <div className="project-stack">
                    <h3>Technologies Used</h3>
                    <p>{stack}</p>
                </div>
                <div className='project-links-container'>
                    <button>Live Site</button>
                    <button>See Code</button>
                </div>
                </div>
            <div className='project-media'>
                <img src={imgSrc} className="project-image"></img>
            </div>
        </div>
    )
}

export default Project