/* eslint-disable no-lone-blocks */
/* eslint-disable default-case */
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../store/actionTypes";

function CreatePlayerControls(props) {
  const [songControl, setSongControl] = useState(true);
  const dispatch = useDispatch();
  const { songStatus, songsUrl, isSongCompleted } = useSelector(state => state);
  const proxyPlayer = document.getElementById("proxy-player");

  useEffect(() => {
    setSongControl(!songStatus.playSong);
  }, [])

  useEffect(() => {
    isSongCompleted && setSongControl(true);
  }, [isSongCompleted])

  const handlePlayPause = (e) => {
    const playSong = proxyPlayer.paused;
    const currentTime = proxyPlayer.currentTime;
    dispatch(actions.changeCurrentSong(songStatus.currentSong, currentTime, playSong));
    songControl ? setSongControl(false) : setSongControl(true);
  };

  const handleNextSong = (e) => {
    const playSong = proxyPlayer.paused;
    const index = songsUrl.findIndex(item => item.id == songStatus.currentSong);
    const songId = songsUrl[(index < songsUrl.length - 1) ? (index + 1) : (songsUrl.length - (index + 1))].id;
    dispatch(actions.changeCurrentSong(songId, "", !playSong));
  }

  const handlePreviousSong = (e) => {
    const playSong = proxyPlayer.paused;
    const index = songsUrl.findIndex(item => item.id == songStatus.currentSong);
    const songId = songsUrl[(index < 1) ? ((songsUrl.length - 1) - index) : (index - 1)].id;
    dispatch(actions.changeCurrentSong(songId, "", !playSong));
  }

  return (
    <article className="player-controls">
      <div className="previous button-cover">
        <button className="previous-song" onClick={handlePreviousSong}>
          <p>
            <FontAwesomeIcon icon={faCaretLeft} />
            <FontAwesomeIcon icon={faCaretLeft} />
          </p>
        </button>
      </div>
      <div className={`button-cover ${!songControl && "play"}`}>
        <div className="proxy-btn" id={songStatus.currentSong} onClick={handlePlayPause}>
        </div>
        <button className="play-pause" >
          {songControl ? <p><FontAwesomeIcon icon={faPlay} /></p> : <p><FontAwesomeIcon icon={faPause} /></p>}
        </button>
      </div>
      <div className="next button-cover" >
        <button className="next-song" onClick={handleNextSong}>
          <p>
            <FontAwesomeIcon icon={faCaretRight} />
            <FontAwesomeIcon icon={faCaretRight} />
          </p>
        </button>
      </div>
    </article>
  )
}

export default CreatePlayerControls;