import React from 'react'

const ProgressBar = ({ titleInView }) => {
  return (
    <div className='progress-bar-container'>
        <div className={titleInView? 'progress-bar bar-1 active' : 'progress-bar bar-1'}></div>
        <div className='progress-bar bar-2'></div>
        <div className='progress-bar bar-3'></div>
        <div className='progress-bar bar-4'></div>
    </div>
  )
}

export default ProgressBar