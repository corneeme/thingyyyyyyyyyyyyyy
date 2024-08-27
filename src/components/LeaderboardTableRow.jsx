import React from 'react';

const LeaderboardTableRow = ({ name, score, icon, time, run, index }) => {
  return (
    <tr>
      <td className='right place-number'>{index + 1}</td>
      <td>{name}</td>
      <td className='right'>{score}</td>
      <td>
        {icon === 'star' && (
          <img src='https://dead-cells.com/img/leaderboardVictory.png' alt='' />
        )}
        {icon === 'time' && (
          <img src='https://dead-cells.com/img/leaderboardVictory.png' alt='' />
        )}
      </td>
      <td className='right'>{time}</td>
      <td className='right'>{run}</td>
    </tr>
  );
};

export default LeaderboardTableRow;
