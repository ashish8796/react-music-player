import React from "react";
import { useSelector } from "react-redux";
import { useRef } from "react";
import { useEffect } from "react";

function ProxyPlayer() {
  const proxyAudio = useRef();
  const { songStatus, songsUrl } = useSelector(state => state);

  console.log({ songsUrl, songStatus })

  const url = songsUrl.length > 0 ? songsUrl.filter(item => item.id == songStatus.currentSong.split('-')[1])[0] : null

  // useEffect(() => {
  //   const { pathname } = window.location;

  //   if (!songStatus.playSong) {
  //     proxyAudio.current.play();
  //     proxyAudio.current.currenTime = songStatus.currenTime;
  //   }
  // }, [songStatus]);

  console.log({ url })

  return (
    <audio ref={proxyAudio} id="proxy-player" style={{ opacity: 0 }} src={url ? url.url : null} />
  );
}

export default ProxyPlayer;