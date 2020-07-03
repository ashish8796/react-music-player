import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Authorization() {
  // const [win, setWindow] = useState(null)
  const history = useHistory();


  const clientId = "e181e5c473824f39b125b6fe9b8c3c7f";
  const redirectUri = "http://localhost:3000/__auth_spotify_callback__";

  function login() {

    function getLoginURL(scopes) {
      return 'https://accounts.spotify.com/authorize?client_id=' + clientId +
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

    const w = window.open(url,
      'Spotify'
    );
    // setWindow(w)

    // console.log(window.location)
  }


  // const query = new URLSearchParams(window.location.search);
  // const accessToken = query.get("access_token");
  // console.log(accessToken);
  // login()

  return (
    <button onClick={() => {
      login();
      // history.push("//__auth_spotify_callback__");
    }}>Log In</button>
  )

}

export default Authorization;