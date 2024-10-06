import './Leaderboard.css';

import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import LeaderboardTableRow from '../components/LeaderboardTableRow';

const Leaderboard = () => {
  const leaderboardData = [
    {
      name: '楽',
      score: '1 192',
      icon: 'star',
      time: '04:08',
      run: 8,
    },
    {
      name: 'B站搜爱吃竹子的黑白猫',
      score: '1 159',
      icon: 'star',
      time: '03:57',
      run: 2,
    },
    {
      name: 'Narcoleptic_I',
      score: '1 142',
      icon: 'star',
      time: '04:01',
      run: 4,
    },
    {
      name: 'B站：萌新QQ小冰',
      score: '1 108',
      icon: 'star',
      time: '03:56',
      run: 4,
    },
    {
      name: '1154988086',
      score: '1 089',
      icon: 'star',
      time: '04:15',
      run: 7,
    },
    {
      name: 'workdanwork',
      score: '1 087',
      icon: 'star',
      time: '04:08',
      run: 1,
    },
    {
      name: 'abc1761184066',
      score: '1 084',
      icon: 'star',
      time: '04:08',
      run: 3,
    },
    {
      name: 'raw',
      score: '1 080',
      icon: 'star',
      time: '04:08',
      run: 2,
    },
    {
      name: '墨夜曲',
      score: '1 065',
      icon: 'star',
      time: '04:08',
      run: 4,
    },
    {
      name: 'Mr.5',
      score: '1 049',
      icon: 'star',
      time: '04:08',
      run: 1,
    },
    {
      name: 'bracaariel',
      score: '1 049',
      icon: 'star',
      time: '04:08',
      run: 3,
    },
    {
      name: 'cauchycats',
      score: '1 048',
      icon: 'star',
      time: '04:08',
      run: 2,
    },
    {
      name: '明太宗Judy',
      score: '1 040',
      icon: 'star',
      time: '04:08',
      run: 1,
    },
    {
      name: '霸道总裁帅白儿',
      score: '1 035',
      icon: 'star',
      time: '04:08',
      run: 14,
    },
    {
      name: 'Apelsines',
      score: '1 032',
      icon: 'star',
      time: '03:54',
      run: 1,
    },
    {
      name: 'scpqzrf',
      score: '1 029',
      icon: 'star',
      time: '04:20',
      run: 3,
    },
    {
      name: 'Malkior',
      score: '1 027',
      icon: 'star',
      time: '03:54',
      run: 7,
    },
    {
      name: 'SoudaSelva',
      score: '1 024',
      icon: 'star',
      time: '04:22',
      run: 3,
    },
    {
      name: '戮',
      score: '1 013',
      icon: 'star',
      time: '04:27',
      run: 3,
    },
    {
      name: '星光上岸人',
      score: '989',
      icon: 'star',
      time: '04:19',
      run: 1,
    },
    {
      name: 'Keith.T',
      score: '981',
      icon: 'star',
      time: '04:26',
      run: 3,
    },
    {
      name: 'cherry',
      score: '979',
      icon: 'star',
      time: '04:19',
      run: 9,
    },
    {
      name: 'Ezekaroth',
      score: '957',
      icon: 'star',
      time: '04:18',
      run: 3,
    },
    {
      name: 'Ruuha',
      score: '938',
      icon: 'star',
      time: '04:23',
      run: 2,
    },
    {
      name: '星星☆坠落',
      score: '931',
      icon: 'star',
      time: '04:19',
      run: 18,
    },
    {
      name: 'masdsec',
      score: '926',
      icon: 'star',
      time: '04:28',
      run: 3,
    },
    {
      name: 'bot',
      score: '925',
      icon: 'star',
      time: '04:08',
      run: 1,
    },
    {
      name: 'luyunfeng2000',
      score: '925',
      icon: 'star',
      time: '04:23',
      run: 1,
    },
    {
      name: '睡觉狐狸(¿)',
      score: '918',
      icon: 'star',
      time: '04:19',
      run: 2,
    },
    {
      name: 'sunshinethewerewolf',
      score: '913',
      icon: 'star',
      time: '04:15',
      run: 3,
    },
    {
      name: 'yan100861',
      score: '877',
      icon: 'star',
      time: '04:20',
      run: 2,
    },
    {
      name: '3351028386',
      score: '877',
      icon: 'star',
      time: '04:04',
      run: 3,
    },
    {
      name: 'Karsa Orlong',
      score: '872',
      icon: 'star',
      time: '04:24',
      run: 4,
    },
    {
      name: '特长是特长',
      score: '869',
      icon: 'star',
      time: '03:56',
      run: 1,
    },
    {
      name: 'Mugriento.',
      score: '868',
      icon: 'star',
      time: '04:00',
      run: 2,
    },
    {
      name: '加尔赛力克',
      score: '856',
      icon: 'star',
      time: '04:28',
      run: 2,
    },
    {
      name: 'Scailent',
      score: '852',
      icon: 'star',
      time: '04:28',
      run: 7,
    },
    {
      name: 'upsetbluesheep',
      score: '850',
      icon: 'star',
      time: '04:16',
      run: 1,
    },
    {
      name: '会飞的毒苹果',
      score: '848',
      icon: 'star',
      time: '03:33',
      run: 2,
    },
    {
      name: 'The abyss',
      score: '839',
      icon: 'star',
      time: '04:13',
      run: 2,
    },
    {
      name: 'Banana King',
      score: '839',
      icon: 'star',
      time: '04:17',
      run: 2,
    },
    {
      name: 'maple',
      score: '838',
      icon: 'star',
      time: '03:39',
      run: 5,
    },
    {
      name: 'Yautja',
      score: '833',
      icon: 'star',
      time: '03:58',
      run: 7,
    },
    {
      name: 'Warp-1',
      score: '833',
      icon: 'star',
      time: '03:59',
      run: 5,
    },
    {
      name: '华年',
      score: '833',
      icon: 'star',
      time: '04:09',
      run: 2,
    },
    {
      name: 'Dr. Bidrag',
      score: '829',
      icon: 'star',
      time: '03:54',
      run: 3,
    },
    {
      name: '你我山巅自相逢',
      score: '828',
      icon: 'star',
      time: '00:05',
      run: 3,
    },
    {
      name: 'Denati',
      score: '825',
      icon: 'star',
      time: '04:12',
      run: 1,
    },
    {
      name: '浪',
      score: '823',
      icon: 'star',
      time: '03:18',
      run: 1,
    },
    {
      name: 'razdolbajster',
      score: '820',
      icon: 'star',
      time: '04:22',
      run: 2,
    },
  ];

  const date = new Date();
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  return (
    <section className='leaderboard'>
      <Header />
      <div className='leaderboard-content'>
        <h2 className='title'>Daily run Leaderboard</h2>
        <h3 className='title'>
          {date.getDate()} {monthNames[date.getMonth()]} 2024
        </h3>
        <div className='ranking-type'>
          <div className='active'>Best scores</div>
        </div>
        <table className='results-table'>
          <thead>
            <tr>
              <th className='right'>#</th>
              <th>Player</th>
              <th>Score</th>
              <th>&nbsp;</th>
              <th>Time</th>
              <th>Run #</th>
            </tr>
          </thead>
          <tbody>
            {leaderboardData.map((item, index) => {
              return (
                <LeaderboardTableRow
                  key={index}
                  index={index}
                  name={item.name}
                  score={item.score}
                  icon={item.icon}
                  time={item.time}
                  run={item.run}
                />
              );
            })}
          </tbody>
        </table>
      </div>
      <Footer />
    </section>
  );
};

export default Leaderboard;
