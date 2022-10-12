import React from 'react'
import BackBtn from './BackBtn'
import Icon from '@mdi/react'
import { mdiAccount } from '@mdi/js';
import { mdiLanguageHtml5 } from '@mdi/js';
import { mdiLanguageCss3 } from '@mdi/js';
import { mdiLanguageJavascript } from '@mdi/js';
import { mdiReact } from '@mdi/js';
import { mdiSass } from '@mdi/js';
import { mdiFirebase } from '@mdi/js';
import { mdiGit } from '@mdi/js';

const Bio = () => {
    return (
		<>
			<BackBtn />
			<div className="bio-section">
				<div className='bio-container'>
					<div className='bio-bg'>
						<Icon path={mdiAccount}
						className='bio-bg-icon'
						color="#ff4d5a"/>
					</div>
					<div className="bio-left">
						<h1>About Me</h1>
						<p>I'm a formally educated chemist (M.Sc.) and a self-taught frontend developer. I love
							learning, solving complex problems, and building intuitive, visually-appealing products.
							Since discovering web development, I've become fascinated with the combination of
							logic, creativity, and constant new technologies that promote a mentality of lifelong learning. 
							When I'm away from my computer, I love playing basketball, golf, video games, and spending time
							with family and friends.</p>
						<p>I'm open to job oppportunities where I can contribute to ambitious projects and grow as a developer.
							If you have an opportunity that matches my skillset, please don't hesitate to contact me.</p>
					</div>
					<div className="bio-right">
						<div className="skill-row">
							<div className="skill">
								<Icon path={mdiLanguageHtml5}
								className='skill-icon'
								size={2}
								color="rgb(255, 85, 0)"/>
								<p>HTML</p>
							</div>
							<div className="skill">
								<Icon path={mdiLanguageCss3}
								className='skill-icon'
								size={2}
								color="blue"/>
								<p>CSS</p>
							</div>
							<div className="skill">
								<Icon path={mdiLanguageJavascript}
								className='skill-icon'
								size={2}
								color="yellow"/>
								<p>JavaScript</p>
							</div>
							<div className="skill">
								<Icon path={mdiReact}
								className='skill-icon'
								size={2}
								color="rgb(0, 225, 255)"/>
								<p>React</p>
							</div>
						</div>
						<div className="skill-row">
							<div className="skill">
								<Icon path={mdiSass}
								className='skill-icon'
								size={2}
								color="rgb(252, 122, 180)"/>
								<p>SASS</p>
							</div>
							<div className="skill">
								<Icon path={mdiFirebase}
								className='skill-icon'
								size={2}
								color="orange"/>
								<p>Firebase</p>
							</div>
							<div className="skill">
								<Icon path={mdiGit}
								className='skill-icon'
								size={2}
								color="rgb(255, 85, 0)"/>
								<p>Git</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
        
    )
}

export default Bio