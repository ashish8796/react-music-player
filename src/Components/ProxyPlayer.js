import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRef } from "react";
import { useEffect } from "react";
import { actions } from "../store/actionTypes";

function ProxyPlayer() {
  const proxyAudio = useRef();
  const { songStatus, songsUrl } = useSelector(state => state);
  const dispatch = useDispatch();

  // console.log({ songsUrl, songStatus })

  const url = songsUrl.length > 0 ? songsUrl.filter(item => item.id == songStatus.currentSong)[0] : null

  useEffect(() => {
    // console.log({ vale: songStatus.playSong })

    songStatus.playSong ? proxyAudio.current.play() : proxyAudio.current.pause();
    // if (!)
    //   proxyAudio.current.play();
    //   proxyAudio.current.currenTime = songStatus.currenTime;
    // }
  }, [songStatus]);

  // console.log({ url })

  const handleTimeUpdate = (e) => {
    console.log({ currentTime: e.target.currentTime })
    dispatch(actions.songCurrentTime(e.target.currentTime));
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
      }} />
  );
}

export default ProxyPlayer;