/* eslint-disable default-case */
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

export const CreateSongPic = () => {
  return (
    <article className="song-pic">
      <div className="circle">
      </div>
    </article>
  )
}

export const CreateSongName = () => {
  const { songStatus, songsUrl } = useSelector(state => state);
  const currentSong = songsUrl.filter(url => songStatus.currentSong == url.id)[0];

  const name = songsUrl.length > 0 && currentSong.name.slice(0, 20);
  return (
    <article className="song-name">
      <p>{name}...</p>
    </article>
  )
}