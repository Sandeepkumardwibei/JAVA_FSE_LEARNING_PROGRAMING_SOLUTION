import React from 'react';

function IndianPlayers() {
  const allPlayers = [
    'Sachin1',
    'Dhoni2',
    'Virat3',
    'Rohit4',
    'Yuvaraj5',
    'Raina6',
  ];

  // Split based on index for Odd and Even
  const oddPlayers = allPlayers.filter((_, index) => index % 2 === 0);
  const evenPlayers = allPlayers.filter((_, index) => index % 2 !== 0);

  // Merged Players List
  const T20players = [
    'Mr. First Player',
    'Mr. Second Player',
    'Mr. Third Player',
  ];
  const RanjiTrophy = [
    'Mr. Fourth Player',
    'Mr. Fifth Player',
    'Mr. Sixth Player',
  ];
  const mergedPlayers = [...T20players, ...RanjiTrophy];

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Odd Players</h2>
      <ul>
        <li>First : {oddPlayers[0]}</li>
        <li>Third : {oddPlayers[1]}</li>
        <li>Fifth : {oddPlayers[2]}</li>
      </ul>

      <hr />

      <h2>Even Players</h2>
      <ul>
        <li>Second : {evenPlayers[0]}</li>
        <li>Fourth : {evenPlayers[1]}</li>
        <li>Sixth : {evenPlayers[2]}</li>
      </ul>

      <hr />

      <h2>List of Indian Players Merged:</h2>
      <ul>
        {mergedPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
}

export default IndianPlayers;
