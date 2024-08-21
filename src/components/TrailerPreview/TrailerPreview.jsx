import './TrailerPreview.css';

import React from 'react';

const TrailerPreview = () => {
  return (
    <section className='trailer'>
      <iframe
        src='https://www.youtube-nocookie.com/embed/02G3GUt6Nzo?rel=0&showinfo=0'
        frameBorder='0'
        className='youtube-trailer'
        title='youtube-trailer'
      ></iframe>
    </section>
  );
};

export default TrailerPreview;
