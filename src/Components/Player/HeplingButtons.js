import React, { useEffect, useRef, useState, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../store/actionTypes";
import { useHistory } from "react-router-dom";

export const CreateHelpingButtons = () => {
  const history = useHistory();
  const song = useRef();
  const [showPlaylist, setShowPlaylist] = useState(false);
  const { songStatus, songsUrl, isSongCompleted } = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    if (song.current && isSongCompleted) {
      song.current.style.cssText = "background-color: #212428;border: 2px solid #2a2d31;"
    }
  }, [isSongCompleted])

  useEffect(() => {
    if (song.current && song.current.id.split("-")[1] !== songStatus.currentSong) {
      song.current.style.cssText = "background-color: #212428;border: 2px solid #2a2d31;"
      song.current = document.getElementById("track-" + songStatus.currentSong);
      song.current.style.cssText = "background-color: #ea453b;border: 2px solid #cc3533";
    }
    if (!song.current && songStatus.playSong) {
      song.current = document.getElementById("track-" + songStatus.currentSong);
      song.current.style.cssText = "background-color: #ea453b;border: 2px solid #cc3533";
    }
  }, [songStatus])

  return (
    <article className="control-button">
      <div className="back-button-cover">
        <div className="proxy-back-button" onClick={(e) => {
          console.log(e.target);
          history.replace("/")
        }}></div>
        <button id="back-button">
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
      </div>
      <p className="text">Playing Now</p>
      <div className="option-lines-cover" >
        <div className="raw-option-btn" onClick={(e) => {
          setShowPlaylist(!showPlaylist);
        }}></div>
        <div
          id="playlist"
          style={{ display: showPlaylist ? "flex" : "none" }}>
          {songsUrl.map((item, index) => (
            <div
              id={"track-" + item.id}
              className="track"
              key={index}
              onClick={(e) => {
                if (song.current) {
                  song.current.style.cssText = "background-color: #212428;border: 2px solid #2a2d31;"
                }
                song.current = e.target.id === "songName" ? e.target.parentNode : e.target;
                dispatch(actions.changeCurrentSong(song.current.id.split("-")[1], "", true));
                song.current.style.cssText = "background-color: #ea453b;border: 2px solid #cc3533"
              }}>
              <p id="songName">{item.name.slice(0, 30)}</p>
            </div>
          ))}
        </div>
        <svg id="Layer_1" enableBackground="new 0 0 511.449 511.449" height="512" viewBox="0 0 511.449 511.449" width="512" xmlns="http://www.w3.org/2000/svg"><path style={{ fill: "#212428" }} d="m436.508 74.941c-99.912-99.914-261.639-99.93-361.566 0-99.914 99.912-99.93 261.639 0 361.566 99.912 99.914 261.639 99.93 361.566 0 99.914-99.911 99.929-261.638 0-361.566zm-266.116 74.451h170.666c11.598 0 21 9.402 21 21s-9.402 21-21 21h-170.666c-11.598 0-21-9.402-21-21s9.402-21 21-21zm64 212.666h-64c-11.598 0-21-9.402-21-21s9.402-21 21-21h64c11.598 0 21 9.402 21 21s-9.403 21-21 21zm-64-85.333c-11.598 0-21-9.402-21-21s9.402-21 21-21h106.666c11.598 0 21 9.402 21 21s-9.402 21-21 21zm242.783 9.724c-5.188 10.373-17.8 14.579-28.175 9.392l-12.275-6.138v51.354c0 23.343-18.99 42.334-42.333 42.334s-42.334-18.991-42.334-42.334c0-22.902 18.417-42.333 42.667-42.333v-43c0-15.603 16.453-25.75 30.392-18.783l42.667 21.333c10.372 5.187 14.577 17.801 9.391 28.175z" /></svg>
        <button id="option-lines"></button>
      </div>
    </article >
  )
}