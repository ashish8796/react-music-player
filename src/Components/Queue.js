import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faEllipsisH } from "@fortawesome/free-solid-svg-icons";

export default function Queue() {
  return (
    <div className="queue">
      <section className="sect-1">
        <article className="album">
          <p><span>EVOL</span> . <span>FUTURE</span></p>
        </article>
        <article className="features">
          <div className="btn-cover">
            <button className="like">
              <FontAwesomeIcon icon={faHeart} />
            </button>
          </div>
          <div className="song-cover">
            <div className="song-picture"></div>
          </div>
          <div className="btn-cover">
            <button className="option-btn">
              <FontAwesomeIcon icon={faEllipsisH} />
            </button>
          </div>
        </article>
      </section>
      <section className="sect-2">
        <article className="songs-list">
          <div className="song">
            <div className="song-info">
              <p>Ain't No Time</p>
              <p>Future</p>
            </div>
            <div className="btn-shell">
              <button className="song-btn"></button>
            </div>
          </div>
        </article>

      </section>
    </div>
  )
}