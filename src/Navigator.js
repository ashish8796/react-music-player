import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { useSelector } from 'react-redux';
import CreatePlayList from './Components/CreatePlaylist';
import Queue from './Components/Queue';
import PlayerUI from './Components/Player/PlayerUI';

const Navigator = () => {
  const { songsUrl: songs } = useSelector(state => state);

  return (
    <Router>
      <div className="App" style={{ height: window.innerHeight }}>
        <Switch>
          <Route path="/player">
            <PlayerUI />
          </Route>
          <Route exact path="/">
            {songs.length > 0 ? <Queue /> : <CreatePlayList />}
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default Navigator