import { createStore } from "redux";
import { STORE_SONG_URL, CHANGE_CURRENT_SONG } from "./actionTypes";

const initialState = {
  songStatus: {
    currentSong: "",
    currentTime: ""
  },
  songsUrl: []
}
function reducer(state = initialState, action) {

  switch (action.type) {
    case STORE_SONG_URL: {
      return { ...state, songsUrl: action.payload.urlArr }
    }

    case CHANGE_CURRENT_SONG: {
      return {
        ...state, songStatus: {
          currentSong: action.payload.id,
          currentTime: action.payload.currentTime,
          playSong: action.payload.playSong
        }
      }
    }

    default: return state;
  }
}


export const store = createStore(reducer);