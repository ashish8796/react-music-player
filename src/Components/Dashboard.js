import React, { useEffect, useState } from "react";
import { PlayerUI } from "./PlayerUI";
import Queue from "./Queue";

function Dashboard({ channel, token }) {

  return (
    <>
      <PlayerUI />
      {/* <Queue /> */}
    </>
  )
}

export default Dashboard;