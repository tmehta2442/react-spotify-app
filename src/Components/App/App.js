import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import PlayList from '../PlayList/PlayList';
import Spotify from '../../util/Spotify';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      playlistName: 'New Playlist',
      playlistTracks: []
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlayList = this.savePlayList.bind(this);
    this.search = this.search.bind(this);
    this.savePlayList = this.savePlayList.bind(this);
  }
  addTrack(track) {
    let idExists = false;
    for (let num = 0; num < this.state.playlistTracks.length; num++) {
      if(track.id === this.state.playlistTracks[num].id) {
        let idExists = true;
      }
    }
    if(!idExists) {
      this.state.playlistTracks.push(track);
    }
    this.setState(this.state.playlistTracks);
  }
  removeTrack(track) {
    let idExists = false;
    let objNum;
    for (let num = 0; num < this.state.playlistTracks.length; num++) {
      if(track.id === this.state.playlistTracks[num].id) {
        idExists = true;
        objNum = num;
      }
    }
    if(idExists) {
      this.state.playlistTracks.splice(objNum, 1);
    }
    this.setState((this.state.playlistTracks));
  }
  updatePlaylistName(name) {
    this.setState({playlistName: name});    
  }
  savePlayList() {
    const trackUris = this.state.playlistTracks.map(track => track.uri);
    Spotify.savePlaylist(this.state.playlistName, trackUris).then(() => {
      this.setState({
        playlistName:'New Playlist',
        playlistTracks: []
      })
    })
  }
  search(query) {
    Spotify.search(query).then(searchResults => {
      this.setState({searchResults: searchResults});
    });
  }
  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults  searchResults={this.state.searchResults}
                            onAdd={this.addTrack} />
            <PlayList playlistName={this.state.playlistName}
                      playlistTrack={this.state.playlistTracks}
                      onRemove={this.removeTrack}
                      onNameChange={this.updatePlaylistName}
                      onSave={this.savePlayList} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;