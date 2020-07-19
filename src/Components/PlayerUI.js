import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

export default function PlayerUI() {
  const [songControl, setSongControl] = useState(true);
  const [currentSongID, setCurrentSongID] = useState("");
  const [songSrc, setSongSrc] = useState("")
  const {
    currentSong: songId,
    songsUrl: songsArr
  } = useSelector(state => state);
  const playing = useRef();

  useEffect(() => {
    const currentSongUrl = songsArr.length > 0 && songsArr.filter(url => songId == url.id)[0].url;
    setSongSrc(currentSongUrl);
    setCurrentSongID(songId);
  }, [])

  useEffect(() => {
    if (playing.current) {
      playing.current.play();
    }
  }, [currentSongID])

  const handlePlayPause = (e) => {
    const song = e.target.children[0];
    song.paused ? song.play() : song.pause();
    playing.current = song;
    setSongControl(!songControl);
  }

  const handleNextSong = (e) => {
    const index = songsArr.findIndex(item => item.id == currentSongID);
    const nextSongId = songsArr[index + 1].id;
    const songUrl = songsArr[index + 1].url;
    console.log({ index, nextSongId, songUrl })
    playing.current.pause();
    setCurrentSongID(nextSongId);
    setSongSrc(songUrl);
    setSongControl(false);
  }

  const handlePreviousSong = (e) => {
    const index = songsArr.findIndex(item => item.id == currentSongID);
    const previousSongId = songsArr[index - 1].id;
    const songUrl = songsArr[index - 1].url;
    console.log({ index, previousSongId, songUrl })
    playing.current.pause();
    setCurrentSongID(previousSongId);
    setSongSrc(songUrl);
    setSongControl(false);
  }

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
            <button className="previous-song" onClick={handlePreviousSong}>
              <p>
                <FontAwesomeIcon icon={faCaretLeft} />
                <FontAwesomeIcon icon={faCaretLeft} />
              </p>
            </button>
          </div>
          <div className={`button-cover ${!songControl && "play"}`}>
            <div className="proxy-btn" id={currentSongID} onClick={handlePlayPause}>
              <audio src={songSrc} type="audio/mp3" />
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
      </div>
    </>
  )
}