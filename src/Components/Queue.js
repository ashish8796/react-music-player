import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import CreateSongUI from "./CreateSongUI";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../store/actionTypes";


export default function Queue() {
  const currentSongName = useRef();
  const dispatch = useDispatch();
  const { songStatus, songsUrl } = useSelector(state => state);

  const songName = (songId) => {
    return songId && songsUrl.filter(item => item.id == songId)[0].name;
  }

  useEffect(() => {
    currentSongName.current.innerText = songStatus.currentSong ? songName(songStatus.currentSong) : "";
  }, [songStatus])

  return (
    <div className="queue">
      <section className="sect-1">
        <article className="album">
          <marquee ref={currentSongName}
            style={{ color: songStatus.currentSong && "#ea453b" }}
          ></marquee>
        </article>
        <article className="features">
          <div className="btn-cover">
            <button className="like btn">
              <FontAwesomeIcon icon={faHeart} />
            </button>
          </div>
          <div className="song-cover">
            <div className="song-picture" onClick={(e) => {
              songStatus.currentSong && dispatch(actions.changeCurrentSong(songStatus.currentSong, songStatus.currentTime, !songStatus.playSong))
            }}></div>
          </div>
          <div className="btn-cover">
            <button className="option-btn btn">
              <FontAwesomeIcon icon={faEllipsisH} />
            </button>
          </div>
        </article>
      </section>
      <section className="sect-2">
        <article className="songs-list">
          <CreateSongUI songName={currentSongName} />
        </article>
      </section>
    </div>
  )
}