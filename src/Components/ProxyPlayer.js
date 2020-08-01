import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../store/actionTypes";

function ProxyPlayer() {
  const proxyAudio = useRef();
  const { songStatus, songsUrl } = useSelector(state => state);
  const dispatch = useDispatch();
  const autoPlay = useState(false);

  const url = songsUrl.length > 0 ? songsUrl.filter(item => item.id == songStatus.currentSong)[0] : null

  useEffect(() => {
    songStatus.playSong ? proxyAudio.current.play() : proxyAudio.current.pause();
  }, [songStatus]);

  const handleTimeUpdate = (e) => {
    const currentTime = e.target.currentTime;
    if (currentTime) {
      dispatch(actions.songCurrentTime(currentTime));
    }
    if (e.target.duration !== currentTime) {
      dispatch(actions.isSongCompleted(false));
    }
  }

  return (
    <audio
      ref={proxyAudio}
      id="proxy-player"
      style={{ opacity: 0 }}
      src={url ? url.url : null}
      onTimeUpdate={handleTimeUpdate}
      onEnded={() => {
        dispatch(actions.isSongCompleted(true))
        const index = songsUrl.findIndex(item => songStatus.currentSong == item.id);

        const nextSongId = songsUrl[(index < songsUrl.length - 1) ? index + 1 : 0].id
        dispatch(actions.changeCurrentSong(nextSongId, "", true));
      }}
      onLoadedMetadata={(e) => {
        dispatch(actions.songCurrentTime(e.target.currentTime));
        dispatch(actions.songDuration(e.target.duration));
      }} />
  );
}

export default ProxyPlayer;