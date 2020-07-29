export const STORE_SONG_URL = "STORE_SONG_URL";
export const CHANGE_CURRENT_SONG = "CHANGE_CURRENT_SONG";
export const IS_SONG_COMPLETED = "IS_SONG_COMPLETED";
export const SONG_CURRENT_TIME = "SONG_CURRENT_TIME";
export const SONG_DURATION = "SONG_DURATION";

export const actions = {
  storeSongUrl(arr) {
    return {
      type: STORE_SONG_URL,
      payload: {
        urlArr: arr
      }
    }
  },

  changeCurrentSong(currentSongId, currentTime = "", playSong = "") {
    return {
      type: CHANGE_CURRENT_SONG,
      payload: {
        id: currentSongId,
        currentTime,
        playSong
      }
    }
  },

  isSongCompleted(isCompleted) {
    return {
      type: IS_SONG_COMPLETED,
      payload: {
        isCompleted
      }
    }
  },

  songCurrentTime(currentTime) {
    return {
      type: SONG_CURRENT_TIME,
      payload: {
        currentTime
      }
    }
  },

  songDuration(songDuration) {
    return {
      type: SONG_DURATION,
      payload: {
        songDuration
      }
    }
  }

}