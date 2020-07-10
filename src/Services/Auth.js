import React, { useState } from "react";
import { FetchService } from "../services/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";

function Authorization() {
  const clientId = "e181e5c473824f39b125b6fe9b8c3c7f";
  const redirectUri = "http://localhost:3000/__auth_spotify_callback__";

  function login() {

    function getLoginURL(scopes) {
      return FetchService.getAuthApi() + '?client_id=' + clientId +
        '&redirect_uri=' + encodeURIComponent(redirectUri) +
        '&scope=' + encodeURIComponent(scopes.join(' ')) +
        '&response_type=token';
    }

    const url = getLoginURL([
      'user-read-email'
    ]);

    const width = 450,
      height = 730,
      left = (window.screen.width / 2) - (width / 2),
      top = (window.screen.height / 2) - (height / 2);

    const win = window.open(url,
      'Spotify'
    );
  }

  return (
    <>
      <article className="first-look">
        <div className="music-cover">
          <div className="music-circle">
            <div className="overlay"></div>
          </div>
        </div>
        <div className="logIn-text">
          <p>Please Log In to </p> <FontAwesomeIcon icon={faSpotify} />.
        </div>
      </article>

      <div className="logInDiv">
        <button className="log-in" onClick={login}>Log In</button>
      </div>
    </>
  )
}

export default Authorization;