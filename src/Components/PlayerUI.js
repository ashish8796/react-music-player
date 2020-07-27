/* eslint-disable no-lone-blocks */
/* eslint-disable default-case */
import React, { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { CreateHelpingButtons, CreateSongPic, CreateSongName, CreateSongProgress } from "./PlayerComponetMaker";
import CreatePlayerControls from "./PlayerControls";

export default function PlayerUI() {
  const [currentSongID, setCurrentSongID] = useState("");
  const [songSrc, setSongSrc] = useState("");
  const [songName, setSongName] = useState("");
  const { songStatus, songsUrl: songsArr } = useSelector(state => state);
  const playing = useRef();

  const { currentSong: songId } = songStatus;

  useEffect(() => {
    if (songsArr.length > 0) {
      const currentSong = songsArr.filter(item => songId == item.id)[0];
      const url = currentSong.url;
      changeSongName(songId);
      setSongSrc(url);
    }
    setCurrentSongID(songId);
  }, [])

  useEffect(() => {
    // if (playing.current) {
    //   playing.current.play();
    // }
  }, [currentSongID]);

  const changeSongName = (songId) => {
    const currentSong = songsArr.filter(url => songId == url.id)[0];
    const name = currentSong.name.slice(0, 20);
    setSongName(name);
  }

  const changeSong = (type) => {
    const index = songsArr.findIndex(item => item.id == currentSongID);
    let songId, songUrl;

    switch (type) {

      case "nextSong": {
        songId = songsArr[(index < songsArr.length - 1) ? (index + 1) : (songsArr.length - (index + 1))].id;
        songUrl = songsArr[(index < songsArr.length - 1) ? (index + 1) : (songsArr.length - (index + 1))].url;

      };
        break;
      case "previousSong": {
        songId = songsArr[(index < 1) ? ((songsArr.length - 1) - index) : (index - 1)].id;
        songUrl = songsArr[(index < 1) ? ((songsArr.length - 1) - index) : (index - 1)].url;
      }
    }
    if (playing.current) playing.current.pause();
    setCurrentSongID(songId);
    changeSongName(songId);
    setSongSrc(songUrl);
  }

  return (
    <div className="player-wrapper">
      <CreateHelpingButtons />
      <CreateSongPic />
      <CreateSongName songName={songName} />
      <CreateSongProgress />
      <CreatePlayerControls
        currentSongID={currentSongID}
        playing={playing}
        songSrc={songSrc}
        changeSong={changeSong}
      />
    </div>
  )
}