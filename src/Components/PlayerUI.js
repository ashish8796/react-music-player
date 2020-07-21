/* eslint-disable no-undef */
/* eslint-disable no-lone-blocks */
/* eslint-disable no-fallthrough */
/* eslint-disable default-case */
import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import convertSecToMin from "../utils/changeTime";


export default function PlayerUI() {
  const [songControl, setSongControl] = useState(true);
  const [currentSongID, setCurrentSongID] = useState("");
  const [songSrc, setSongSrc] = useState("");
  const [songName, setSongName] = useState("");
  const { currentSong: songId, songsUrl: songsArr } = useSelector(state => state);
  const playing = useRef();
  const increasingTime = useRef();
  const decreasingTime = useRef();
  const progressBar = useRef();

  const changeSongName = (songId) => {
    const currentSong = songsArr.filter(url => songId == url.id)[0];
    const name = currentSong.name.slice(0, 20);
    setSongName(name);
  }

  useEffect(() => {
    if (songsArr.length > 0) {
      const currentSong = songsArr.filter(url => songId == url.id)[0];
      const url = currentSong.url;
      changeSongName(songId);
      setSongSrc(url);
    }
    setCurrentSongID(songId);

    // progressBar.current.addEventListener("dblclick", (e) => {
    //   console.log(e.target);
    // })
  }, [])

  useEffect(() => {
    if (playing.current) {
      playing.current.play();
    }
  }, [currentSongID]);

  const handleProgressBar = () => {
  };


  const handlePlayPause = (e) => {
    const song = e.target.children[0];
    song.paused ? song.play() : song.pause();
    playing.current = song;
    songControl ? setSongControl(false) : setSongControl(true);
  };

  const changeSong = (type) => {
    const index = songsArr.findIndex(item => item.id == currentSongID);
    console.log(index);
    let songId, songUrl;

    switch (type) {

      case "nextSong": {
        songId = songsArr[(index < songsArr.length - 1) ? (index + 1) : (songsArr.length - (index + 1))].id;
        songUrl = songsArr[(index < songsArr.length - 1) ? (index + 1) : (songsArr.length - (index + 1))].url;

      };
        break;
      case "previousSong": {
        songId = songsArr[(index < 1) ? ((songsArr.length - 1) - index) : (index - 1)].id;
        songUrl = songsArr[(index < 1) ? ((songsArr.length - 1) - index) : (index - 1)].url;
      }
    }
    if (playing.current) playing.current.pause();
    setCurrentSongID(songId);
    changeSongName(songId);
    setSongSrc(songUrl);
  }

  const handleNextSong = (e) => {
    changeSong("nextSong");
  }

  const handlePreviousSong = (e) => {
    changeSong("previousSong");
  }

  const handleAudioEnded = () => {
    setSongControl(true);
  };

  const handleTimeUpdate = (e) => {
    const duration = e.target.duration;
    increasingTime.current.innerText = convertSecToMin(e.target.currentTime)
    decreasingTime.current.innerText = convertSecToMin(duration - e.target.currentTime)

    if (duration > 0) {
      document.querySelector(".indicator").style.left = ((e.target.currentTime / duration) * 100) + "%";
    }
  };

  const handleMetaData = (e) => {
    const songDuration = e.target.duration;
    decreasingTime.current.innerText = convertSecToMin(songDuration);
  }

  const handleDrag = (e) => {
    console.log(e.target);
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
          <p>{songName}...</p>
        </article>

        <article className="song-progress">
          <div className="dis-time">
            <p className="increasing-time" ref={increasingTime}>1:05</p>
            <p className="decreasing-time" ref={decreasingTime}>2:40</p>
          </div>
          <div className="progress-amount">
            <div
              className="indicator"
              onTouchMove={(e) => {
                const indicator = e.target.parentNode;
                console.log(e.changedTouches[0].pageX);
                var touches = e.changedTouches;
                if (touches[0].pageX > 335) console.log("Length Completed")
                if (touches[0].pageX < 333 && touches[0].pageX > 0) {
                  indicator.style.left = `${(touches[0].pageX / 330) * 100}%`;
                }
              }}>
              <div className="inside"></div>
            </div>
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
              <audio
                src={songSrc}
                type="audio/mp3"
                onEnded={handleAudioEnded}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleMetaData} />
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