import { createStore } from "redux";
import { STORE_SONG_URL, CHANGE_CURRENT_SONG } from "./actionTypes";

const initialState = {
  currentSong: "",
  songsUrl: []
}
function reducer(state = initialState, action) {

  switch (action.type) {
    case STORE_SONG_URL: {
      return { ...state, songsUrl: action.payload.urlArr }
    }

    case CHANGE_CURRENT_SONG: {
      return { ...state, currentSong: action.payload.id }
    }

    default: return state;
  }
}


export const store = createStore(reducer);