/* eslint-disable no-lone-blocks */
/* eslint-disable default-case */
import React from "react";
import { CreateHelpingButtons, CreateSongPic, CreateSongName, CreateSongProgress } from "./PlayerComponetMaker";
import CreatePlayerControls from "./PlayerControls";

export default function PlayerUI() {
  return (
    <div className="player-wrapper">
      <CreateHelpingButtons />
      <CreateSongPic />
      <CreateSongName />
      <CreateSongProgress />
      <CreatePlayerControls
      />
    </div>
  )
}