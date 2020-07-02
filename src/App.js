import React, { useState, useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import PlayingNow from './Components/PlayingNow';


const OAuthComponent = (props) => {
  const [accessToken, setAccessToken] = useState("");
  console.log(window.location.hash)

  // useEffect(() => {

  //   const query = new URLSearchParams(window.location.search);
  //   setAccessToken(query.get("access_token"));
  //   console.log(accessToken);
  // }, [])
  // const data = fetch(window.location)
  //   .then(response => response.json())
  //   .then(data => console.log(data))
  return (
    <></>
  )
}


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/__auth_spotify_callback__">
            <OAuthComponent />
          </Route>
          <Route path="/">
            <PlayingNow />
          </Route>
        </Switch>
      </div>

    </Router>
  );
}

export default App;
