import './DeadCellsOnAndroid.css';

import React from 'react';

const DeadCellsOnAndroid = () => {
  return (
    <section className='on-android'>
      <h2 className='title'>Dead Cells on Android</h2>
      <div className='content'>
        <p className='get-alert-text'>
          Get an alert when Dead Cells is available on Android:
        </p>
        <form action=''>
          <input
            type='email'
            name='email'
            id='email'
            className='email'
            placeholder='Email address here'
          />
          <input
            type='sumbim'
            name='submit'
            id='submit'
            className='be-notified'
            value={'BE NOTIFIED !'}
          />
        </form>
      </div>
    </section>
  );
};

export default DeadCellsOnAndroid;
