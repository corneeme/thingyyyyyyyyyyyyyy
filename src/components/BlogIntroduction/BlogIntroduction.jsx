import './BlogIntroduction.css';

import React from 'react';
import NewsBlock from '../NewsBlock';

const BlogIntroduction = () => {
  return (
    <section className='blog-introduction'>
      <h2 className='title'>Blog</h2>
      <div className='content'>
        <NewsBlock />
      </div>
      <a href='#' className='read-blog-btn'>
        READ MORE POSTS
      </a>
    </section>
  );
};

export default BlogIntroduction;
