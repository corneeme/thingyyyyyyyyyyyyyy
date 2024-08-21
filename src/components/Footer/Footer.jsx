import './Footer.css';

import React from 'react';

import MotionTwinLogo from '../../images/MotionTwinLogo.png';

const Footer = () => {
  return (
    <footer className='main-footer'>
      <div className='content'>
        <div className='motion-twin-description'>
          <img src={MotionTwinLogo} alt='' className='studio-logo' />
          <p>
            <a
              href='https://motiontwin.com/'
              target='_blank'
              rel='noreferrer'
              className='studio-website-link'
            >
              Motion Twin
            </a>{' '}
            is a French workers cooperative based in Bordeaux.
          </p>
          <p>
            We've been making games since 2001 and we're going to keep on doing
            that until senility kicks in! Currently working on our first
            PC/Console title.
          </p>
        </div>
        <ul className='links'>
          <li>Available on Steam</li>
          <li>Follow us on Twitter</li>
          <li>Follow us on Facebook</li>
          <li>Presskit</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
