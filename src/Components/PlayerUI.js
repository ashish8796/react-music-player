import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function PlayerUI() {
  const [songControl, setSongControl] = useState(true);
  const { currentSong: songId, songsUrl } = useSelector(state => state)
  const currentSong = songsUrl.filter(url => songId == url.id)[0].url;
  const songElement = document.createElement("audio");

  const handleClick = (e) => {
    console.log(currentSong)
    songElement.setAttribute("src", currentSong);
    if (songElement.paused) {
      songElement.play()
    }
    !songControl && songElement.pause();
    setSongControl(!songControl);
  }
  // console.log(songsUrl)
  // useEffect(() => {

  // }, [])

  return (
    <>
      <div className="player-wrapper">
        <article className="control-button">
          <div className="back-button-cover">
            <button className="back-button">
              <p>
                &#x2190;
            </p>
            </button>
          </div>
          <p className="text">Playing Now</p>
          <div className="option-lines-cover">
            <button className="option-lines">
              <div className="lines"></div>
              <div className="lines"></div>
              <div className="lines"></div>
            </button>
          </div>
        </article>

        <article className="song-pic">
          <div className="circle">
          </div>
        </article>

        <article className="song-name">
          <p>Low Life</p>
          <p className="description">
            Future ft. The weeknd
          </p>
        </article>

        <article className="song-progress">
          <div className="dis-time">
            <p className="increasing-time">1:05</p>
            <p className="decreasing-time">2:40</p>
          </div>
          <div className="indicator">
            <div className="inside"></div>
          </div>
          <div className="progress-bar"></div>
        </article>

        <article className="player-controls">
          <div className="previous button-cover">
            <button className="previous-song">
              <p>
                <FontAwesomeIcon icon={faCaretLeft} />
                <FontAwesomeIcon icon={faCaretLeft} />
              </p>
            </button>
          </div>
          <div className={`button-cover ${!songControl && "play"}`}>
            <button className="play-pause" onClick={handleClick}>
              {songControl ? <p><FontAwesomeIcon icon={faPlay} /></p> : <p><FontAwesomeIcon icon={faPause} /></p>}
            </button>
          </div>
          <div className="next button-cover">
            <button className="next-song">
              <p>
                <FontAwesomeIcon icon={faCaretRight} />
                <FontAwesomeIcon icon={faCaretRight} />
              </p>
            </button>
          </div>
        </article>
      </div>
    </>
  )
}

