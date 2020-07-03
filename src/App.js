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
  const [userData, setUserData] = useState({});
  const [tracks, setTracks] = useState("");

  useEffect(() => {
    const data = window.location.hash.substr(1).split("&");
    console.log(data[0].split("=")[1]);
    setAccessToken(data[0].split("=")[1]);
  }, []);

  useEffect(() => {
    const getUser = () => {
      fetch("https://api.spotify.com/v1/me", {
        method: "GET",
        headers: { 'Authorization': `Bearer ${accessToken}` }
      })
        .then(response => response.json())
        .then(data => {
          // setUserData(data);
        })
    }
    getUser();

    const getTracks = () => {
      fetch("https://api.spotify.com/v1/browse/categories/toplists/playlists/", {
        method: "GET",
        headers: { 'Authorization': `Bearer ${accessToken}` }
      })
        .then(response => response.json())
        .then(data => {

          !tracks && fetch(data.playlists.items[0].tracks.href, {
            method: "GET",
            headers: { 'Authorization': `Bearer ${accessToken}` }
          })
            .then(response => response.json())
            .then(data => {
              const trackArr = data && (data.items.map(item => item.track.external_urls.spotify))
              console.log(trackArr)
              setTracks(trackArr);
            })

        })
    }

    getTracks();

  }, [accessToken])


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
