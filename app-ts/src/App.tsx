import React from 'react';
import { Settings } from './features/settings/Settings';
import { Game } from './features/game/Game';
import './App.css';

function App() {
  return (
    <div className="App">
      <Settings></Settings>
      <Game></Game>
    </div>
  );
}

export default App;
