import React from 'react'
import Title from '../components/Title'
import Header from '../components/Header'
import "../styles/home.css"

const Home = () => {
  return (
    <main>
        <div className='main-bg'></div>
        <Header />
        <Title />
    </main>
  )
}

export default Home