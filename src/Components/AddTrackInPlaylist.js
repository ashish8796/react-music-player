import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../store/actionTypes";
import { useRef } from "react";

function AddTrack({ item, currentSongId, currentSong, clickeTime }) {
  const history = useHistory();
  const isSongCompleted = useSelector(state => state.isSongCompleted);
  const [play, setPlay] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    currentSongId == item.id ? setPlay(!play) : setPlay(false);
  }, [currentSongId, clickeTime]);

  useEffect(() => {
    isSongCompleted && setPlay(false);
    dispatch(actions.isSongCompleted(false))
  }, [isSongCompleted])

  const handleSongSelect = (e) => {
    const proxyPlayer = document.getElementById("proxy-player");
    const playSong = !proxyPlayer.paused;
    dispatch(actions.changeCurrentSong(e.target.id, proxyPlayer.currentTime, playSong));
    proxyPlayer.play();
    history.replace("/player");
  };

  return (
    <div
      className={`song ${play && "song-playing"}`}
      id={item.id}
    >
      <div className="song-info">
        <p
          id={item.id}
          onClick={handleSongSelect}>
          {item.name.slice(0, 20)}...
        </p>
      </div>
      <div
        className={`btn-shell ${play && "playing"}`}
        style={
          {
            boxShadow: !(play) ?
              "-4px -4px 5px 4px #3c4348"
              :
              "-4px -4px 5px 4px #23272a"
          }
        }
      >
        <div
          id={item.id}
          className="raw-btn"
          onClick={(e) => {
            const proxyPlayer = document.getElementById("proxy-player");
            const playSong = e.target.id == currentSongId ? proxyPlayer.paused : true;
            const currentTime = proxyPlayer.currentTime;
            dispatch(actions.changeCurrentSong(e.target.id, currentTime, playSong));
            currentSong(e);
          }}>
        </div>
        <button className='song-btn btn' >
          {
            !(play) ?
              <p style={{ marginLeft: "4px" }}>
                <FontAwesomeIcon icon={faPlay} />
              </p>
              :
              <p >
                <FontAwesomeIcon icon={faPause} />
              </p>
          }
        </button>
      </div>
    </div>
  )
}

export default AddTrack;