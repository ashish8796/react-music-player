import React, { useEffect, useState } from "react";
import { PlayerUI } from "./PlayerUI";
import Queue from "./Queue";
import { Switch, Route } from "react-router-dom";


function Dashboard() {

  return (
    <Switch>
      <Route path="/">
        <Queue />
      </Route>
      <Route path="/playerUi">
        <PlayerUI />
      </Route >
    </Switch>
  )
}

export default Dashboard;