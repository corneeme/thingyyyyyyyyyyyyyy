import React from 'react';

const BlogNewsBlock = () => {
  return (
    <div className='news-block'>
      <div className='news-content'>
        <p className='publisher'>gamecrate.com</p>
        <a href='https://www.gamecrate.com/' target='_blank' rel='noreferrer' className='news-title'>
          Interview: Motion Twin talks about developing Dead Cells
        </a>
        <p>
          Motion Twin is a small, French game development company located in
          Bordeaux, France. From there, the 10-man team has created a multitude
          of mobile games. But what happens when they shift over into making a
          game for PC/console? That result is Dead Cells, a roguelike,
          Castlevania-inspired, action-platformer. The game combines all of the
          fun of platformers, without the hassle of trick edges, with the fun of
          quick and visceral combat in a non-hardware intensive package.
        </p>
      </div>
    </div>
  );
};

export default BlogNewsBlock;
