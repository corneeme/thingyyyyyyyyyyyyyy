import './Header.css';

import React from 'react';

import { BiLogoFacebookSquare } from 'react-icons/bi';
import { FaTwitter } from 'react-icons/fa';
import GameLogo from '../../images/GameLogo.png';

const Header = () => {
  return (
    <header className='main-header'>
      <nav>
        <div className='game-logo'>
          <img src={GameLogo} alt='' />
        </div>
        <ul>
          <li>About</li>
          <li>Leaderboard</li>
          <li>Patch notes</li>
          <li>Blog</li>
          <li>Press</li>
          <li>Wiki</li>
          <li className='social-media-icon facebook'>
            <BiLogoFacebookSquare />
          </li>
          <li className='social-media-icon'>
            <FaTwitter />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
