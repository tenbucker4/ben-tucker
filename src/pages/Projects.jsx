import React, { useEffect } from 'react'
import Header from '../components/Header'
import allProjects from '../projects/allProjects'
import Project from '../components/Project'
import Menu from '../components/Menu'
import BackBtn from '../components/BackBtn'
import "../styles/projects.css"

const Projects = ({ menuOpen, setMenuOpen }) => {
    useEffect(() => {
		setMenuOpen(false)
	}, [])

    return (
        <>
            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <BackBtn />
            <div className='projects'>
                {allProjects.map((project, index) => {
                    return (
                        <Project 
                            key={index}
                            imgSrc={project.imgSrc}
                            number={project.number}
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