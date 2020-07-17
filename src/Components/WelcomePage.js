import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actions } from "../store/actionTypes";


export default function CreatePlayList() {
  const history = useHistory();
  const [createPlaylist, setCreatePlaylist] = useState(false)
  const dispatch = useDispatch();

  const selectSongs = (e) => {
    const files = e.target.files;
    const urlArr = [];

    for (let i = 0; i < files.length; i++) {
      let file = files[i];
      // console.log("lastModified" in file);
      let url = URL.createObjectURL(new Blob([file], { type: "audio" }));
      let name, id;
      for (let key in file) {
        if (key === "name") {
          name = file[key]
        };
        if (key === "lastModified") {
          id = file[key]
        };
      }
      urlArr.push({
        name: name.split(".")[0],
        url: url,
        id: id
      });
    }
    dispatch(actions.storeSongUrl(urlArr));
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