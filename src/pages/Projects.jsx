import React, { useState } from 'react'
import Header from '../components/Header'
import allProjects from '../projects/allProjects'
import Project from '../components/Project'
import Menu from '../components/Menu'
import "../styles/projects.css"

const Projects = ({ menuOpen, setMenuOpen }) => {

    return (
        <>
            <Menu menuOpen={menuOpen}/>
            <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
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
                        />
                    )
                })}
            </div>
        </>
    )
}

export default Projects