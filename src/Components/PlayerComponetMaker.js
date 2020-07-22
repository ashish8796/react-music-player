/* eslint-disable default-case */
import React from "react";

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

export const CreateSongName = ({ songName }) => {
  return (
    <article className="song-name">
      <p>{songName}...</p>
    </article>
  )
}

export const CreateSongProgress = ({ increasingTime, decreasingTime }) => {
  return (
    <article className="song-progress">
      <div className="dis-time">
        <p className="increasing-time" ref={increasingTime}>1:05</p>
        <p className="decreasing-time" ref={decreasingTime}>2:40</p>
      </div>
      <div className="progress-bar">
        <input type="range" min="0" max="100" defaultValue={0} onChange={(e) => {
          document.querySelector("audio").currentTime = e.target.value;
        }} />
      </div>
    </article>
  )
}