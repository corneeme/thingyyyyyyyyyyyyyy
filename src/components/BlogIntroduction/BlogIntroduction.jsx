import './BlogIntroduction.css';

import React from 'react';
import NewsBlock from '../NewsBlock';
import { Link } from 'react-router-dom';

const BlogIntroduction = () => {
  const post = {
    publisher: 'gamecrate.com',
    title: 'Interview: Motion Twin talks about developing Dead Cells',
    link: 'https://www.gamecrate.com/',
    text: 'Motion Twin is a small, French game development company located in Bordeaux, France. From there, the 10-man team has created a multitude of mobile games. But what happens when they shift over into making a game for PC/console? That result is Dead Cells, a roguelike, Castlevania-inspired, action-platformer. The game combines all of the fun of platformers, without the hassle of trick edges, with the fun of quick and visceral combat in a non-hardware intensive package.',
    comment: '',
  };

  return (
    <section className='blog-introduction'>
      <h2 className='title'>Blog</h2>
      <div className='content'>
        <NewsBlock
          publisher={post.publisher}
          title={post.title}
          link={post.link}
          text={post.text}
          comment={post.comment}
        />
      </div>
      <Link to={'/Blog'} className='read-blog-btn'>
        READ MORE POSTS
      </Link>
    </section>
  );
};

export default BlogIntroduction;
