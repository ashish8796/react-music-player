/* eslint-disable no-lone-blocks */
/* eslint-disable default-case */
import React from "react";
import { CreateSongPic, CreateSongName, } from "./SongInfo";
import CreatePlayerControls from "./PlayerControls";
import CreateSongProgress from "./SongProgress";
import { CreateHelpingButtons } from "./HeplingButtons";

export default function PlayerUI() {
  return (
    <div className="player-wrapper" style={{ height: window.innerHeight }}>
      <CreateHelpingButtons />
      <CreateSongPic />
      <CreateSongName />
      <CreateSongProgress />
      <CreatePlayerControls />
    </div>
  )
}