export const STORE_SONG_URL = "STORE_SONG_URL";

export const actions = {
  storeSongUrl(arr) {
    return {
      type: STORE_SONG_URL,
      payload: {
        urlArr: arr
      }
    }
  }

}