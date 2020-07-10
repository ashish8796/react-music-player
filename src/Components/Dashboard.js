import React, { useEffect } from "react";
import { PlayerUI } from "./PlayerUI";
import Queue from "./Queue";
import { getUser, getTracks } from "../services/api";



function Dashboard({ channel, token }) {
  channel.close();
  useEffect(() => {
    getUser();
    getTracks();
  })

  return (
    <>
      {/* <PlayerUI /> */}
      <Queue />
    </>
  )
}

export default Dashboard;