import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import AddTrack from "./AddTrackInPlaylist";
import { actions } from "../store/actionTypes";

function CreateSongUI() {
  const dispatch = useDispatch();
  const songUrlArr = useSelector(state => state.songsUrl);
  const [currentSongId, setCurrentSongId] = useState("");
  const playing = useRef();
  const [clickeTime, setClickedTime] = useState("");

  const currentSong = (e) => {
    const currentSong = e.target.children[0];
    const nextSongId = currentSong.id;
    dispatch(actions.changeCurrentSong(nextSongId));
    if (playing.current && nextSongId !== currentSongId) {
      playing.current.pause();
    }

    playing.current = currentSong;
    nextSongId !== currentSongId && playing.current.play();

    if (nextSongId === currentSongId) {
      !currentSong.paused ? currentSong.pause() : currentSong.play()
    }

    setCurrentSongId(nextSongId);
    setClickedTime(Date.now());
  }

  return (
    songUrlArr.map(item =>
      <AddTrack item={item} key={item.id} currentSong={currentSong} currentSongId={currentSongId} clickeTime={clickeTime} />
    )
  )
}

export default CreateSongUI;