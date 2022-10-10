import React, { useState } from 'react'
import Header from '../components/Header'
import "../styles/projects.css"

const Projects = () => {
    const [projectDisplay, setProjectDisplay] = useState(false)

    const toggleDisplay = () => {
        setProjectDisplay(prev => !prev)
    }

    return (
        <>
            <Header />
            <div className='projects'>
                <div className={projectDisplay? "project-container active" : "project-container"} onClick={toggleDisplay}>
                    <div className={projectDisplay? "project-image active" : "project-image"}></div>
                    <h1 className={projectDisplay? "project-title active" : "title"}>Click</h1>
                    <h3 className={projectDisplay? "project-type active" : "project-type"}>Instant Messaging App</h3>
                    <p className={projectDisplay? "project-description active" : "project-description"}>This is a test description.</p>
                </div>
            </div>
        </>
    )
}

export default Projects