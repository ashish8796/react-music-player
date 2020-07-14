import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function CreatePlayList() {
  const history = useHistory();
  const [createPlaylist, setCreatePlaylist] = useState(false);
  const [trackArr, setTrackArr] = useState([]);
  console.log(trackArr);


  const selectSongs = (e) => {
    console.log(e.target.files);
    const files = e.target.files;
    const urlArr = [];
    for (let i = 0; i < files.length; i++) {
      let file = files[0];
      let url = URL.createObjectURL(new Blob([file], { type: "audio" }));
      urlArr.push(url);
    }
    console.log(urlArr);
    setTrackArr(urlArr);
    history.push("/dashboard");
  }

  return (
    <>
      <article className="first-look">
        <p className="welcome-text">
          Welcome to <span>Custom Music Player</span>.
        </p>
        <div className="music-cover">
          <div className="music-circle">
            <div className="overlay"></div>
          </div>
        </div>

        <div className="playlist-text">
          <p>Create a playlist of your favriout songs.</p>
        </div>
      </article>
      {
        !createPlaylist ?
          (
            <div className="add-song-btn">
              <button className="add-song" onClick={() => {
                setCreatePlaylist(true)
              }} >Create Playlist</button>
            </div>
          )
          :
          (
            <div className="chose-track">
              <input className="choose-song" type="file" onChange={selectSongs} multiple />
              <div className="style-input">Select Songs
              <div className="shadow"></div></div>
            </div>
          )
      }
    </>
  )
}