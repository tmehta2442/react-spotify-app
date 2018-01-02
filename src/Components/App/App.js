import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import PlayList from '../PlayList/PlayList';

class App extends React.Component {
  constructor(props) {
    super(props);
    //hardcoded stuff
    this.state = {
      searchResults: [
        { name: 'The I hates Abid Blues',
          artist: 'Camille',
          album: 'Ode to Tejas',
          id: 1
        },
        { name: 'Abid go away',
          artist: 'The Whole World',
          album: 'tejas is the best',
          id: 2
        },
        { name: 'Saqi',
          artist: 'The Crazy Ones',
          album: 'From Calcutta with Joy',
          id: 3
        },
        { name: 'Song Name',
          artist: 'Artist',
          album: 'Album Name',
          id: 4
        }
      ],
      playlistName: 'The YoYo',
      playlistTracks: [
        { name: '1playlist song name',
          artist: '1 artist',
          album: '1 album',
          id: 5
        },
        { name: '2playlist song name',
          artist: '2 artist',
          album: '2 album',
          id: 6
        },
        { name: '3playlist song name',
          artist: '3 artist',
          album: '3 album',
          id: 7
        },
        { name: '4PlaylistSong Name',
          artist: '4Artist',
          album: '4Album Name',
          id: 8
        }
      ]
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
  }
  addTrack(track) {
    let idExists = false;
    for (let num = 0; num < this.state.playlistTracks.length; num++) {
      if(track.id === this.state.playlistTracks[num].id) {
        idExists = true;
      }
    }
    if(!idExists) {
      this.state.playlistTracks.push(track);
    }
    this.setState(this.state.playlistTracks);
    //console.log(this.state.playlistTracks);
  }
  removeTrack(track) {
    console.log(track.id);
    console.log('-------');
    //console.log(this.state.playlistTracks.id);
    //this.state.playlistTracks.filter(del => del.id === track.id);
    //this.state.playlistTracks.filter(test => test.id !== track.id);
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
    console.log(this.state);
  }
  updatePlaylistName(name) {
    //let updatedName = this.state.playlistName;
    // this.setState(updatedName = name);
    //this.state.playlistName = name;
    this.setState({playlistName: name}, () => {console.log(this.state.playlistName)});
    
    
  }
  viewPlaylistNames() {
    console.log(this.state.playlistName);
  }
  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar/>
          <div className="App-playlist">
            <SearchResults  searchResults={this.state.searchResults}
                            onAdd={this.addTrack} />
            <PlayList playlistName={this.state.playlistName}
                      playlistTrack={this.state.playlistTracks}
                      onRemove={this.removeTrack}
                      onNameChange={this.updatePlaylistName} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;