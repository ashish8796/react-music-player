import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import AddTrack from "./AddTrackInPlaylist";

function CreateSongUI() {
  const songUrlArr = useSelector(state => state);
  const [currentSongId, setCurrentSongId] = useState("");
  const playing = useRef();
  const [clickeTime, setClickedTime] = useState("");

  const currentSong = (e) => {
    const currentSong = e.target.children[0];
    const nextSongId = currentSong.id;

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