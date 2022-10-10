import React, { useState } from 'react'

const Project = ({ imgSrc, title, type, description, stack }) => {
    const [projectDisplay, setProjectDisplay] = useState(false)
    const [opacity, setOpacity] = useState(0);

    const toggleOpen = () => {
        setProjectDisplay(true)
        setTimeout(() => {
            setOpacity(1);
        }, 200)
    }

    const toggleClosed = () => {
        setProjectDisplay(false)
        setOpacity(0);
    }

    return (
        <div className={projectDisplay? "project-container active" : "project-container"}>
            <img src={imgSrc} className={projectDisplay? "project-image active" : "project-image"} style={{ cursor: projectDisplay? "initial" : "pointer" }} onClick={toggleOpen}></img>
            <h1 className={projectDisplay? "project-title active" : "title"}>{title}</h1>
            <h3 className={projectDisplay? "project-type active" : "project-type"}>{type}</h3>
            {projectDisplay? (<div className={projectDisplay? "project-description active" : "project-description"} style={{ opacity: opacity }}>
                <p>{description}</p>
                <h3>Technologies Used</h3>
                <p>{stack}</p>
                <div className='project-links-container'>
                    <button>Live Site</button>
                    <button>See Code</button>
                </div>
            </div>) : null}
            {projectDisplay? (<button className='hide-project' onClick={toggleClosed} style={{ opacity: opacity }}>Back</button>) : null }
        </div>
    )
}

export default Project