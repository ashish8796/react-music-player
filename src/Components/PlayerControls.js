/* eslint-disable no-lone-blocks */
/* eslint-disable default-case */
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import convertSecToMin from "../utils/changeTime";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../store/actionTypes";

function CreatePlayerControls(props) {
  const { currentSongID, playing, songSrc, increasingTime, decreasingTime, changeSong } = props;
  const [songControl, setSongControl] = useState(true);
  const dispatch = useDispatch();
  const { songStatus, songsArr } = useSelector(state => state);
  const proxyPlayer = document.getElementById("proxy-player");

  useEffect(() => {
    setSongControl(!songStatus.playSong);
  }, [])

  const handlePlayPause = (e) => {
    const playSong = proxyPlayer.paused;
    const currentTime = proxyPlayer.currentTime;
    // const song = e.target.children[0];
    // song.paused ? song.play() : song.pause();
    // playing.current = song;
    dispatch(actions.changeCurrentSong(currentSongID, currentTime, playSong));
    songControl ? setSongControl(false) : setSongControl(true);
  };

  const handleNextSong = (e) => {
    // changeSong("nextSong");
    const index = songsArr.findIndex(item => item.id == currentSongID);
    const songId = songsArr[(index < songsArr.length - 1) ? (index + 1) : (songsArr.length - (index + 1))].id;
    const songUrl = songsArr[(index < songsArr.length - 1) ? (index + 1) : (songsArr.length - (index + 1))].url;
    dispatch(actions.changeCurrentSong(songId, "", true));
  }

  const handlePreviousSong = (e) => {
    // changeSong("previousSong");
    const index = songsArr.findIndex(item => item.id == currentSongID);
    const songId = songsArr[(index < 1) ? ((songsArr.length - 1) - index) : (index - 1)].id;
    const songUrl = songsArr[(index < 1) ? ((songsArr.length - 1) - index) : (index - 1)].url;
    dispatch(actions.changeCurrentSong(songId, "", true));
  }

  // const handleAudioEnded = () => {
  //   setSongControl(true);
  // };

  const handleMetaData = (e) => {
    const songDuration = e.target.duration;

  }

  const handleTimeUpdate = (e) => {
    const duration = e.target.duration;
    increasingTime.current.innerText = convertSecToMin(e.target.currentTime)
    decreasingTime.current.innerText = convertSecToMin(duration - e.target.currentTime)

    if (duration > 0) {
      const songProgress = document.querySelector("input[type='range']");
      songProgress.max = duration + "";
      songProgress.value = (e.target.currentTime) + "";
    }
  };

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
        <div className="proxy-btn" id={currentSongID} onClick={handlePlayPause}>
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