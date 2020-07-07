import React, { useState, useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";
import PlayingNow from './Components/PlayingNow';
import Dashboard from './Components/Dashboard';
import OAuthComponent from './Components/RedirectComponent';

function App() {
  const [reload, setReload] = useState(true);
  // const [accessToken, setAccessToken] = useState(("accessToken" in localStorage) ? localStorage.getItem("accessToken") : "");
  // const location = useLocation();
  // console.log(accessToken);
  const channel = new BroadcastChannel("message-channel");

  channel.addEventListener("message", e => {
    console.log("Hii")
    window.location.reload();
  })

  channel.postMessage("I m working");

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            {/* {
              accessToken ? <Redirect to="/dashboard" /> : <PlayingNow />
            } */}

            <PlayingNow />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/__auth_spotify_callback__">
            {/* <OAuthComponent setAccessToken={setAccessToken} channel={channel} /> */}
            <OAuthComponent />
          </Route>

        </Switch>
      </div>

    </Router>
  );
}

export default App;
