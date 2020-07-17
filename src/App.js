import React, { useState, useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import CreatePlayList from './Components/WelcomePage';
import Dashboard from './Components/Dashboard';
import { store } from './store/Store';
import { Provider } from 'react-redux';


function App() {

  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <CreatePlayList />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
