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
        { name: ['The I hates Abid Blues'],
          artist: ['Camille'],
          album: ['Ode to Tejas']
        },
        { name: ['Abid go away'],
          artist: ['The Whole World'],
          album: ['tejas is the best']
        },
        { name: ['Saqi'],
          artist: ['The Crazy Ones'],
          album: ['From Calcutta with Joy']
        },
        { name: ['Song Name'],
          artist: ['Artist'],
          album: ['Album Name']
        }
      ],
      playlistName: ['The YoYo'],
      playlistTracks: [
        { name: ['1playlist song name'],
          artist: ['1 artist'],
          album: ['1 album']
        },
        { name: ['2playlist song name'],
          artist: ['2 artist'],
          album: ['2 album']
        },
        { name: ['3playlist song name'],
          artist: ['3 artist'],
          album: ['3 album']
        }
      ]
    };
    this.addTrack = this.addTrack.bind(this);
  }
  addTrack(track) {
    // console.log(track.id);
    console.log(this.state.playlistTracks);
    if(track !== this.state.playlistTracks) {
      this.state.playlistTracks.push(track);
    }
  }
  render() {
    //console.log(this.state.track);
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar/>
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
            <PlayList playlistName={this.state.playlistName} playlistTrack={this.state.playlistTracks}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;