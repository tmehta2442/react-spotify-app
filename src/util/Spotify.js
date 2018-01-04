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
      setAccessToken = accessToken[1];
      const expiration = Number(expirationTime[1]);
      window.setTimeout(() => setAccessToken = '', expiration * 1000);
      window.history.pushState('Access Token', null, '/');
      return setAccessToken;
    } else {
      const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;

      window.location = accessUrl;
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
      return jsonResponse.tracks.items.map(track => ({
        id: track.id,
        name: track.name,
        artists: track.artists[0].name,
        album: track.album.name,
        uri: track.uri
      }));
    });
  },
  savePlaylist(playlistName, trackUris) {
    if(!playlistName || !trackUris) {
      return;
    }
    const accessToken = Spotify.getAccessToken();
    const headers = { Authorization: `Bearer ${accessToken}`};
    let userId;
    return fetch(`https://api.spotify.com/v1/me`, { headers: headers
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      userId = jsonResponse.id;
      return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
        headers: headers,
        method: 'POST',
        body: JSON.stringify({ name: playlistName})
      }).then(response => {
        return response.json();
      }).then(jsonResponse => {
        const playlistId = jsonResponse.id;
        return fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`, {
          headers: headers,
          method: 'POST',
          body: JSON.stringify({ uris: trackUris })
        })
      })
    })

  }
};

export default Spotify;