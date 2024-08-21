import './Header.css';

import React from 'react';
import { Link } from 'react-router-dom';

import { BiLogoFacebookSquare } from 'react-icons/bi';
import { FaTwitter } from 'react-icons/fa';
import GameLogo from '../../images/GameLogo.png';

const Header = () => {
  return (
    <header className='main-header'>
      <nav>
        <Link to={'/'} className='game-logo link'>
          <img src={GameLogo} alt='' />
        </Link>
        <ul>
          <li>
            <Link to={'/'} className='link'>
              About
            </Link>
          </li>
          <li>
            <Link to={'/Leaderboard'} className='link'>
              Leaderboard
            </Link>
          </li>
          <li>
            <Link to={'/PatchNotes'} className='link'>
              Patch notes
            </Link>
          </li>
          <li>
            <Link to={'/Blog'} className='link'>
              Blog
            </Link>
          </li>
          <li>
            <a
              href='https://motiontwin.com/presskit/81'
              target='_blank'
              rel='noreferrer'
              className='link'
            >
              Press
            </a>
          </li>
          <li>
            <a
              href='https://deadcells.wiki.gg/wiki/Dead_Cells_Wiki'
              target='_blank'
              rel='noreferrer'
              className='link'
            >
              Wiki
            </a>
          </li>
          <li className='social-media-icon facebook'>
            <a
              href='https://www.facebook.com/dead.cells.game'
              target='_blank'
              rel='noreferrer'
              className='link'
            >
              <BiLogoFacebookSquare />
            </a>
          </li>
          <li className='social-media-icon'>
            <a
              href='https://x.com/motiontwin'
              target='_blank'
              rel='noreferrer'
              className='link'
            >
              <FaTwitter />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
