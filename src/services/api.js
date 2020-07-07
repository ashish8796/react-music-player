export class FetchService {
  constructor() {
    this.authApi = `https://accounts.spotify.com/authorize`;
    this.serviceApi = `https://api.spotify.com/v1/`
  }

  static getAuthApi() {
    return `https://accounts.spotify.com/authorize`;
  }

  getToken() {
    return localStorage.getItem('accessToken');
  }

  get(endPoint) {
    return fetch(`${this.serviceApi}`, {
      headers: {
        'Authorization': this.getToken()
      }
    })
  }

  post(endPoint, data = {}) {
    return fetch(`${this.serviceApi}`, data, {
      method: 'POST',
      headers: {
        'Authorization': this.getToken()
      }
    })
  }

  delete(endPoint) {
    return fetch(`${this.serviceApi}`, {
      method: "DELETE",
      headers: {
        'Authorization': this.getToken()
      }
    })
  }

  put(endPoint, data = {}) {
    return fetch(`${this.serviceApi}`, data, {
      method: 'PUT',
      headers: {
        'Authorization': this.getToken()
      }
    })
  }
}

export default new FetchService();