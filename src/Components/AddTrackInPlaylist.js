import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { actions } from "../store/actionTypes";
import { useRef } from "react";

function AddTrack({ item, currentSongId, currentSong, clickeTime }) {
  const history = useHistory();
  const [play, setPlay] = useState(false);
  const dispatch = useDispatch();
  const playlistAudio = useRef()

  useEffect(() => {
    currentSongId.split("-")[1] == item.id ? setPlay(!play) : setPlay(false);
  }, [currentSongId, clickeTime]);

  const handleSongSelect = (e) => {
    const currentTime = playlistAudio.current.currentTime;
    const playSong = !playlistAudio.current.paused;

    playlistAudio.current.pause();

    dispatch(actions.changeCurrentSong(e.target.id, currentTime, playSong));

    const proxyPlayer = document.getElementById('proxy-player');

    proxyPlayer.currentTime = playlistAudio.current.currentTime;
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
        <div className="raw-btn" onClick={(e) => {
          const currentTime = playlistAudio.current.currentTime;
          const playSong = !playlistAudio.current.paused;
          dispatch(actions.changeCurrentSong(e.target.id, currentTime, playSong))
          currentSong(e);
        }}>
          <audio
            src={item.url}
            type="audio/mp3"
            id={`audio-${item.id}`}
            ref={playlistAudio} />
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