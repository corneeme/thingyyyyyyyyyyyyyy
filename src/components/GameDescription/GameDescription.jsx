import './GameDescription.css';

import React from 'react';
import ReactPlayer from 'react-player';

import video1 from '../../videos/GameSummary1.mp4';
import video2 from '../../videos/GameSummary2.mp4';

const GameDescription = () => {
  return (
    <section className='game-description'>
      <h2 className='title'>What is Dead Cells?</h2>
      <div className='content'>
        <p className='summary'>
          Dead Cells is a rogue-lite, Castlevania-inspired action-platformer,
          allowing you to explore a sprawling, ever-changing castle… assuming
          you're able to fight your way past its keepers.
        </p>
        <p className='summary'>
          To beat the game, you'll have to master 2D "souls-lite combat" with
          the ever-present threat of permadeath looming. No checkpoints. Kill,
          die, learn, repeat.
        </p>
        <ul className='features-list'>
          <li className='feature-description'>
            <strong>RogueVania:</strong> Intense 2D action with the adrenaline
            pumping threat of permadeath in a castle full of cuddly creatures.
          </li>
          <li className='feature-description'>
            <strong>Souls-lite combat:</strong> Pattern-based bosses and
            minions, weapons and spells with unique gameplay. Roll roll roll
            your boat gently down the stream...
          </li>
          <li className='feature-description'>
            <strong>Nonlinear progression:</strong> Unlock new levels with every
            death, take a new path. Tired of the stinking sewers? Why not take
            the ramparts?
          </li>
          <li className='feature-description'>
            <strong>Exploration:</strong> Secret rooms, hidden passages,
            charming landscapes. A fine place for a holiday.
          </li>
        </ul>
        <ul className='videos'>
          <li>
            <ReactPlayer
              url={video1}
              loop={true}
              muted={true}
              playing={true}
              width='100%'
              height='100%'
              className='video'
            />
          </li>
          <li>
            <ReactPlayer
              url={video2}
              loop={true}
              muted={true}
              playing={true}
              width='100%'
              height='100%'
              className='video'
            />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default GameDescription;
