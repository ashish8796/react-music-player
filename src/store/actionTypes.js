export const STORE_SONG_URL = "STORE_SONG_URL";
export const CHANGE_CURRENT_SONG = "CHANGE_CURRENT_SONG";

export const actions = {
  storeSongUrl(arr) {
    return {
      type: STORE_SONG_URL,
      payload: {
        urlArr: arr
      }
    }
  },

  changeCurrentSong(currentSongId) {
    return {
      type: CHANGE_CURRENT_SONG,
      payload: {
        id: currentSongId
      }
    }
  }

}