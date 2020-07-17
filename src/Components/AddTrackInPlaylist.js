import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

function AddTrack({ item, currentSongId, currentSong, clickeTime }) {
  const history = useHistory();
  const [play, setPlay] = useState(false);

  useEffect(() => {
    currentSongId == item.id ? setPlay(!play) : setPlay(false);
  }, [currentSongId, clickeTime])

  return (
    <div
      className={`song ${play && "song-playing"}`}
      id={item.id}
    >
      <div className="song-info">
        <p
          onClick={() => { history.push("/playerUi") }}>
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
          currentSong(e)
        }}>
          <audio
            src={item.url}
            type="audio/mp3"
            id={item.id} />
        </div>
        <button className='song-btn btn'>
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