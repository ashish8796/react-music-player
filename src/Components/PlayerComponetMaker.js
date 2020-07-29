/* eslint-disable default-case */
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRef } from "react";
import convertSecToMin from "../utils/changeTime";

export const CreateHelpingButtons = () => {
  return (
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
  )
}

export const CreateSongPic = () => {
  return (
    <article className="song-pic">
      <div className="circle">
      </div>
    </article>
  )
}

export const CreateSongName = () => {
  const { songStatus, songsUrl } = useSelector(state => state);
  const currentSong = songsUrl.filter(url => songStatus.currentSong == url.id)[0];

  const name = songsUrl.length > 0 && currentSong.name.slice(0, 20);
  return (
    <article className="song-name">
      <p>{name}...</p>
    </article>
  )
}

export const CreateSongProgress = () => {
  const { songCurrentTime, songDuration } = useSelector(state => state);
  const increasingTime = useRef();
  const decreasingTime = useRef();
  const seek = useRef();
  const proxyPlayer = document.getElementById("proxy-player");

  useEffect(() => {
    increasingTime.current.innerText = convertSecToMin(songCurrentTime);
    decreasingTime.current.innerText = convertSecToMin(songDuration);
    seek.current.max = songDuration > 0 ? songDuration : 100;
    seek.current.value = songCurrentTime > 0 ? songCurrentTime : 0;
  }, [songCurrentTime, songDuration])

  return (
    <article className="song-progress">
      <div className="dis-time">
        <p className="increasing-time" ref={increasingTime}>0:00</p>
        <p className="decreasing-time" ref={decreasingTime}>0:00</p>
      </div>
      <div className="progress-bar">
        <input
          type="range"
          min="0"
          max="100"
          defaultValue={0}
          ref={seek}
          onChange={(e) => {
            proxyPlayer.currentTime = e.target.value;
          }} />
      </div>
    </article>
  )
}