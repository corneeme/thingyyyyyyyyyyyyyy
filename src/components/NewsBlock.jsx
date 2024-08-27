import React from 'react';

const BlogNewsBlock = ({ publisher, title, link, text, comment }) => {
  return (
    <div className='news-block'>
      <div className='news-content'>
        <div className='source'>
          <p className='publisher'>{publisher}</p>
          <a
            href={link}
            target='_blank'
            rel='noreferrer'
            className='news-title'
          >
            {title}
          </a>
          <p>{text}</p>
        </div>
        <p className='comment'>{comment}</p>
      </div>
    </div>
  );
};

export default BlogNewsBlock;
