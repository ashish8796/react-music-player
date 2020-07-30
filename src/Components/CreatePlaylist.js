import React from "react";
import { useDispatch } from "react-redux";
import { actions } from "../store/actionTypes";

export default function CreatePlayList() {
  const dispatch = useDispatch();

  const selectSongs = (e) => {
    const files = e.target.files;
    const urlArr = [];

    for (let i = 0; i < files.length; i++) {
      let file = files[i];
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
          <p>Create a playlist of your favorite songs.</p>
        </div>
      </article>
      <div className="chose-track">
        <input className="choose-song" type="file" onChange={selectSongs} multiple />
        <div className="style-input">Create Playlist
          <div className="shadow"></div>
        </div>
      </div>
    </>
  )
}