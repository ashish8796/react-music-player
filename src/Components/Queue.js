import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import CreateSongUI from "./CreateSongUI";


export default function Queue({ idArr }) {

  return (
    <div className="queue">
      <section className="sect-1">
        <article className="album">
          <p><span>EVOL</span> . <span>FUTURE</span></p>
        </article>
        <article className="features">
          <div className="btn-cover">
            <button className="like btn">
              <FontAwesomeIcon icon={faHeart} />
            </button>
          </div>
          <div className="song-cover">
            <div className="song-picture"></div>
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
          <CreateSongUI />
        </article>
      </section>
    </div>
  )
}