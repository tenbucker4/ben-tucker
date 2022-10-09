import React from 'react'

const ProgressBar = ({ titleInView, projectInView, aboutInView, contactInView }) => {
  return (
    <div className='progress-bar-container'>
        <div className={titleInView? 'progress-bar bar-1 active' : 'progress-bar bar-1'}></div>
        <div className={projectInView? 'progress-bar bar-2 active' : 'progress-bar bar-2'}></div>
        <div className={aboutInView? 'progress-bar bar-3 active' : 'progress-bar bar-3'}></div>
        <div className={contactInView? 'progress-bar bar-4 active' : 'progress-bar bar-4'}></div>
    </div>
  )
}

export default ProgressBar