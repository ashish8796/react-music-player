import React, { useState, useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import PlayingNow from './Components/PlayingNow';
import Dashboard from './Components/Dashboard';

function App() {

  return (
    <Router>
      <div className="App">
        <Switch>
          {/* <Route exact path="/">
            <PlayingNow />
          </Route> */}

          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
