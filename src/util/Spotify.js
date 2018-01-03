import {safeKey} from '../hidden/keys';

//const key = safekey();
const clientId = '38c69baa872042fea4adacce68c86956';
const redirectUri = 'http://localhost:3000/';

let setAccessToken;

const Spotify = {
  getAccessToken() {
    if(setAccessToken) {
      return setAccessToken;
    }

    const accessToken = window.location.href.match(/access_token=([^&]*)/);
    const expirationTime = window.location.href.match(/expires_in=([^&]*)/);
    if(accessToken && expirationTime) {
      setAccessToken = accessToken;
      const expiration = expirationTime;
      window.setTimeout(() => setAccessToken = '', expiration * 1000);
      window.history.pushState('Access Token', null, '/');
      return setAccessToken;
    } else {
      // const redirectUser = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
      // window.location = redirectUser;
    }
  },
  search(searchTerm) {
    const accessToken = Spotify.getAccessToken();
    return fetch(`https://api.spotify.com/v1/search?type=track&q=${searchTerm}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if(!jsonResponse) {
        return [];
      }
      console.log(jsonResponse.track);
      // return jsonResponse.track.map(track => ({
      //   id: track.id,
      //   name: track.name,
      //   artist: track.artist[0].name,
      //   album: track.album.name,
      //   uri: track.uri
      // }));
    });
  },
  savePlaylist(playlistName, trackUris) {
    // if(!playlistName || !trackUris) {
    //   return;
    // }
    // const accessToken = Spoifty.getAccessToken();
    // const headers = { Authorization: `Bearer ${}`}
  }
};

export default Spotify;