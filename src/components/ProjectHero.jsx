import React from 'react'
import Project from "./Project"
import allProjects from "../projects/allProjects"
import "../styles/projects.css"

const ProjectHero = ({ projectRef, projectSection }) => {
	return (
		<section ref={projectSection} id="projects">
			<h2 className='section-header bright'>My Projects</h2>
			<ul>
			{allProjects.map((project, index) => {
                    return (
						<li key={index} className='project-list-entry'>
							<Project 
                            imgSrc={project.imgSrc}
                            title={project.title}
                            type={project.type}
                            description={project.description}
                            stack={project.techStack}
                            codeLink={project.codeLink}
                            liveLink={project.liveLink}
                        	/>
						</li> 
                    )
                })}
			</ul>
		</section>
	)
}

export default ProjectHero