import React from 'react';
import './App.css';
import Lectures from './Components/Lectures';
import Assignments from './Components/Assignments';
import YesNo from './Components/YesNo';
import Map from './Components/Map'

const App = () => {

  const fineAdjektiv = [
    "magiske",
    "fantastiske",
    "flotte",
    "kule",
    "snasne"
  ];

  let randomAdjektiv = fineAdjektiv[Math.floor(Math.random()*fineAdjektiv.length)]

  return (
    <div>
      <h1 className="header">
        🦦 ✨ Elena sitt {randomAdjektiv} dashboard! ✨ 🦥
      </h1>
      <div className="dashboardRow">
        <Lectures />
        <Assignments />
        <YesNo />
        <Map />
      </div>
    </div>
  );
};

export default App;
