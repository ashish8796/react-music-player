import { createStore } from "redux";
import { STORE_SONG_URL, CHANGE_CURRENT_SONG, IS_SONG_COMPLETED, SONG_CURRENT_TIME, SONG_DURATION, actions } from "./actionTypes";

const initialState = {
  songStatus: {
    currentSong: "",
    currentTime: ""
  },
  isSongCompleted: "",
  songCurrentTime: "",
  songDuration: "",
  songsUrl: []
}

function reducer(state = initialState, action) {

  switch (action.type) {
    case STORE_SONG_URL: {
      return { ...state, songsUrl: action.payload.urlArr }
    }

    case CHANGE_CURRENT_SONG: {
      return {
        ...state,
        songStatus: {
          currentSong: action.payload.id,
          currentTime: action.payload.currentTime,
          playSong: action.payload.playSong
        }
      }
    }

    case IS_SONG_COMPLETED: {
      return {
        ...state,
        isSongCompleted: action.payload.isCompleted
      }
    }

    case SONG_CURRENT_TIME: {
      return {
        ...state,
        songCurrentTime: action.payload.currentTime
      }
    }

    case SONG_DURATION: {
      return {
        ...state,
        songDuration: action.payload.songDuration
      }
    }

    default: return state;
  }
}

export const store = createStore(reducer);