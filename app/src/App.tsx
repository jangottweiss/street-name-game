import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import RegionSelection from './components/RegionSelection';
import GameModeSelection from './components/GameModeSelection';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/regions">
              <RegionSelection></RegionSelection>
            </Route>
            <Route path="/gamemode">
              <GameModeSelection></GameModeSelection>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
