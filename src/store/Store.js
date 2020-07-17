import { createStore } from "redux";
import { STORE_SONG_URL } from "./actionTypes";


function reducer(state = [], action) {

  switch (action.type) {
    case STORE_SONG_URL: {
      return [...state, ...action.payload.urlArr]
    }
    default: return state;
  }
}


export const store = createStore(reducer);