import React, { useState } from "react";
import { useSelector } from "react-redux";
import AddTrack from "./AddTrackInPlaylist";

function CreateSongUI() {
  const songUrlArr = useSelector(state => state.songsUrl);
  const [currentSongId, setCurrentSongId] = useState("");
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