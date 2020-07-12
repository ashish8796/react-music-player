import React, { useEffect, useState } from "react";
import { PlayerUI } from "./PlayerUI";
import Queue from "./Queue";
import { getUser, getTracks } from "../services/api";



function Dashboard({ channel, token }) {
  const [tracks, setTracks] = useState([]);
  channel.close();
  useEffect(() => {
    getUser();
    const trackIdArr = getTracks();
    console.log(trackIdArr);
    setTracks(trackIdArr);
  }, [])

  return (
    <>
      {/* <PlayerUI /> */}
      <Queue tracks={tracks} />
    </>
  )
}

export default Dashboard;