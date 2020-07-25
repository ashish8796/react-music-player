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
    const currentSong = e.target;
    const nextSongId = currentSong.id;
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