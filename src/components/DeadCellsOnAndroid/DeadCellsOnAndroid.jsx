import './DeadCellsOnAndroid.css';

import React, { useState } from 'react';

const DeadCellsOnAndroid = () => {
  const [emailValue, setEmailValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('You will be notified');
  };

  return (
    <section className='on-android'>
      <h2 className='title'>Dead Cells on Android</h2>
      <div className='content'>
        <p className='get-alert-text'>
          Get an alert when Dead Cells is available on Android:
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type='email'
            name='email'
            id='email'
            className='email'
            placeholder='Email address here'
            onChange={(e) => setEmailValue(e.target.value)}
            value={emailValue}
          />
          <input
            type='submit'
            className='be-notified'
            value={'BE NOTIFIED !'}
          />
        </form>
      </div>
    </section>
  );
};

export default DeadCellsOnAndroid;
