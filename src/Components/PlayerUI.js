import React, { useState } from "react";

export function PlayerUI() {
  const [songControl, setSongControl] = useState(true);

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
            {/* <img src="./../image/matheo-jbt-Y8QmGCl8lLk-unsplash.jpg" alt="song image" /> */}
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
          <div className="indicator"></div>
          <div className="progress-bar"></div>
        </article>

        <article className="player-controls">
          <button className="previous-song">
            &#x025C2;&#x025C2;
          </button>
          <button className="paly-pause" onClick={() => {
            setSongControl(!songControl);
          }}>
            {songControl ? <p>&#x025B8;</p> : <p>&#x0003D;</p>}
          </button>
          <button className="next-song">&#x025B8;&#x025B8;</button>
        </article>

      </div>


    </>
  )
}

