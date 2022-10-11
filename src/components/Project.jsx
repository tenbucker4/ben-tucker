import React from 'react'

const Project = ({ imgSrc, title, type, description, stack }) => {

    return (
        <div className="project-container">
            <img src={imgSrc} className="project-image"></img>
            <h1 className="title">{title}</h1>
            <h3 className="project-type">{type}</h3>
            <div className="project-description">
                <p>{description}</p>
                <h3>Technologies Used</h3>
                <p>{stack}</p>
                <div className='project-links-container'>
                    <button>Live Site</button>
                    <button>See Code</button>
                </div>
            </div>
        </div>
    )
}

export default Project