/* eslint-disable no-lone-blocks */
/* eslint-disable default-case */
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import convertSecToMin from "../utils/changeTime";
import { useSelector } from "react-redux";

function CreatePlayerControls(props) {
  const { currentSongID, playing, songSrc, increasingTime, decreasingTime, changeSong } = props;
  const [songControl, setSongControl] = useState(true);
  const { songStatus } = useSelector(state => state);

  useEffect(() => {
    const song = document.querySelector("audio");
    song.currentTime = songStatus.currentTime;
    setSongControl(!songStatus.playSong);
  }, [])

  const handlePlayPause = (e) => {
    const song = e.target.children[0];
    song.paused ? song.play() : song.pause();
    playing.current = song;
    songControl ? setSongControl(false) : setSongControl(true);
  };

  const handleNextSong = (e) => {
    changeSong("nextSong");
  }

  const handlePreviousSong = (e) => {
    changeSong("previousSong");
  }

  const handleAudioEnded = () => {
    setSongControl(true);
  };

  const handleMetaData = (e) => {
    const songDuration = e.target.duration;
    decreasingTime.current.innerText = convertSecToMin(songDuration);
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
          <audio
            src={songSrc}
            type="audio/mp3"
            onEnded={handleAudioEnded}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleMetaData}
          // autoPlay={songStatus.playSong} 
          />
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