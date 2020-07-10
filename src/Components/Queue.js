import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faEllipsisH, faPlay, faPause } from "@fortawesome/free-solid-svg-icons";

export default function Queue() {
  const [regulateSong, setRegulateSong] = useState(true);

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
          <div className={`song ${!regulateSong && "song-playing"}`}>
            <div className="song-info">
              <p>Ain't No Time</p>
              <p>Future</p>
            </div>
            <div className={`btn-shell ${!regulateSong && "playing"}`} style={{ boxShadow: regulateSong ? "-4px -4px 5px 4px #3c4348" : "-4px -4px 5px 4px #23272a" }}>
              <button className='song-btn btn' onClick={() => {
                setRegulateSong(!regulateSong);
              }}>
                {regulateSong ? <p style={{ marginLeft: "4px" }}><FontAwesomeIcon icon={faPlay} /></p> : <p><FontAwesomeIcon icon={faPause} /></p>}
              </button>
            </div>
          </div>
        </article>

      </section>
    </div>
  )
}