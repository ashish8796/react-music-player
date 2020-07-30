import React, { useEffect, useRef } from "react";
import convertSecToMin from "./../../utils/changeTime";
import { useSelector } from "react-redux";

const CreateSongProgress = () => {
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

export default CreateSongProgress;