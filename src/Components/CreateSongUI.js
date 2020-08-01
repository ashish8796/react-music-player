import React, { useState } from "react";
import { useSelector } from "react-redux";
import AddTrack from "./AddTrackInPlaylist";

function CreateSongUI() {
  const songUrlArr = useSelector(state => state.songsUrl);
  const [clickeTime, setClickedTime] = useState("");

  const currentSong = (e) => {
    setClickedTime(Date.now());
  }

  return (
    songUrlArr.map(item =>
      <AddTrack item={item} key={item.id} currentSong={currentSong} clickeTime={clickeTime} />
    )
  )
}

export default CreateSongUI;