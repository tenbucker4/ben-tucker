import React from 'react'
import Icon from '@mdi/react'
import { mdiGithub, mdiLink } from '@mdi/js';
import { mdiLinkedin } from '@mdi/js';
import { mdiFileAccount } from '@mdi/js';

const Header = () => {
  return (
    <header>
        <div className='me'>Ben Tucker</div>
        <div className='header-nav'>
            <Icon path={mdiGithub}
            size={1.5}
            color="white"/>
            <Icon path={mdiLinkedin}
            size={1.5}
            color="white"/>
            <Icon path={mdiFileAccount}
            size={1.5}
            color="white"/>
            <div className='hamburger'>
                <div className='hamburger-bun top-bun'></div>
                <div className='hamburger-bun bottom-bun'></div>
            </div>
        </div>
    </header>
  )
}

export default Header