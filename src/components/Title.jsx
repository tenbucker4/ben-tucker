import React from 'react'

const Title = () => {
  return (
    <section className='title-div'>
        <div className='title-text'>
            <div className='text-name'>Ben<br></br>Tucker</div>
            <div className='blocks'>
                <div className='block left-block'></div>
                <div className='block right-block'></div>
            </div>
            <div className='bio'>frontend developer / chemist</div>
        </div>
		<div className='molecule'>
			<div className='benzene-outer'></div>
			<div className='benzine-inner'></div>
		</div>
    </section>
  )
}

export default Title