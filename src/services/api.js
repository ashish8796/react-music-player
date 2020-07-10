export class FetchService {
  constructor() {
    this.authApi = `https://accounts.spotify.com/authorize`;
    this.serviceApi = `https://api.spotify.com/v1/`;
    this.accessToken = localStorage.getItem('accessToken');
  }

  static getAuthApi() {
    return `https://accounts.spotify.com/authorize`;
  }

  getToken() {
    // console.log(localStorage.getItem('accessToken'))
    return localStorage.getItem('accessToken').split('"')[1];
  }

  get(endPoint = "") {
    return fetch(`${this.serviceApi}` + endPoint, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${this.getToken()}`
      }
    })
  }

  post(endPoint, data = {}) {
    return fetch(`${this.serviceApi}`, data, {
      method: 'POST',
      headers: {
        'Authorization': "Bearer" + this.getToken()
      }
    })
  }

  delete(endPoint) {
    return fetch(`${this.serviceApi}`, {
      method: "DELETE",
      headers: {
        "Authorization": "Bearer" + this.getToken()
      }
    })
  }

  put(endPoint, data = {}) {
    return fetch(`${this.serviceApi}`, data, {
      method: 'PUT',
      headers: {
        'Authorization': "Bearer" + this.getToken()
      }
    })
  }
}


export const getUser = () => {
  // console.log(new FetchService().get("me"))
  (new FetchService().get("me"))
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
}
// getUser();

export const getTracks = () => {
  new FetchService().get("browse/categories/toplists/playlists/")
    .then(response => response.json())
    .then(data => {
      fetch(data.playlists.items[0].tracks.href, {
        method: "GET",
        headers: { 'Authorization': `Bearer ${new FetchService().getToken()}` }
      })
        .then(response => response.json())
        .then(data => {
          // console.log(data);
          const trackArr = (data.error) ? [] : (data.items.map(item => item.track.external_urls.spotify));
          console.log(trackArr);
          // (trackArr.length) && setTracks(trackArr);
        })
    })
}

// getTracks();

export default new FetchService();