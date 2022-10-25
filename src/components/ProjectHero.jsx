import React from 'react'
import Project from "./Project"
import allProjects from "../projects/allProjects"
import "../styles/projects.css"

const ProjectHero = ({ projectRef, projectSection }) => {
	return (
		<section id="projects">
			<h2 className='section-header bright'>My Projects</h2>
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
		</section>
	)
}

export default ProjectHero