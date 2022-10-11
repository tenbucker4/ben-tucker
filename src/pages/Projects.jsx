import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import allProjects from '../projects/allProjects'
import Project from '../components/Project'
import Menu from '../components/Menu'
import "../styles/projects.css"

const Projects = ({ menuOpen, setMenuOpen }) => {
    useEffect(() => {
		setMenuOpen(false)
	}, [])

    return (
        <>
            <Menu menuOpen={menuOpen}/>
            <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Link to="/">
                <div className="back-btn">
                    <div className="arrow">
                        <span className="arrow-wing"></span>
                    </div>
                    <p>BACK</p>
                </div>
            </Link>
            <div className='projects'>
                {allProjects.map((project, index) => {
                    return (
                        <Project 
                            key={index}
                            imgSrc={project.imgSrc}
                            title={project.title}
                            type={project.type}
                            description={project.description}
                            stack={project.techStack}
                            codeLink={project.codeLink}
                            liveLink={project.liveLink}
                        />
                    )
                })}
            </div>
        </>
    )
}

export default Projects