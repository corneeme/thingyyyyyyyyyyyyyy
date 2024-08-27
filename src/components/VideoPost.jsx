import React from 'react';

const VideoPost = ({ link }) => {
  return (
    <div className='video-post'>
      <div className='video-container'>
        <iframe
          src={link}
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          referrerPolicy='strict-origin-when-cross-origin'
          // sandbox='allow-same-origin'
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoPost;
