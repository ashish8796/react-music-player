import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

const OAuthComponent = ({ setAccessToken, channel }) => {
  const history = useHistory();

  useEffect(() => {
    if ((new URLSearchParams(window.location.search)).get("error") === "access_denied") {
      console.log("Acess Denied")
    }
    else {

      const data = window.location.hash.substr(1).split("&");
      // localStorage.setItem("accessToken", JSON.stringify(data[0].split("=")[1]));
      console.log(data[0].split("=")[1]);
      setAccessToken(data[0].split("=")[1]);
      channel.close();
      // window.location.reload();
      setTimeout(() => {
        window.close();

      }, 600)
      // data && history.push("/dashboard");
    }
  }, []);

  // useEffect(() => {
  //   const getUser = () => {
  //     fetch("https://api.spotify.com/v1/me", {
  //       method: "GET",
  //       headers: { 'Authorization': `Bearer ${accessToken}` }
  //     })
  //       .then(response => response.json())
  //       .then(data => {
  //         setUserData(data);
  //       })
  //   }
  //   getUser();

  //   const getTracks = () => {
  //     fetch("https://api.spotify.com/v1/browse/categories/toplists/playlists/", {
  //       method: "GET",
  //       headers: { 'Authorization': `Bearer ${accessToken}` }
  //     })
  //       .then(response => response.json())
  //       .then(data => {

  //         fetch(data.playlists.items[0].tracks.href, {
  //           method: "GET",
  //           headers: { 'Authorization': `Bearer ${accessToken}` }
  //         })
  //           .then(response => response.json())
  //           .then(data => {
  //             // console.log(data);
  //             const trackArr = (data.error) ? [] : (data.items.map(item => item.track.external_urls.spotify));
  //             console.log(trackArr);
  //             (trackArr.length) && setTracks(trackArr);
  //           })
  //       })
  //   }

  //   getTracks();

  // }, [accessToken])


  return (
    <></>
  )
}

export default OAuthComponent;