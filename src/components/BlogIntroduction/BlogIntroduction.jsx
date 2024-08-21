import './BlogIntroduction.css';

import React from 'react';
import NewsBlock from '../NewsBlock';
import { Link } from 'react-router-dom';

const BlogIntroduction = () => {
  return (
    <section className='blog-introduction'>
      <h2 className='title'>Blog</h2>
      <div className='content'>
        <NewsBlock />
      </div>
      <Link to={'/Blog'} className='read-blog-btn'>
        READ MORE POSTS
      </Link>
    </section>
  );
};

export default BlogIntroduction;
