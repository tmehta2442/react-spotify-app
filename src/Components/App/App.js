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
        { name: ['1playlist name'],
          artist: ['1playlist artist'],
          album: ['1playlist album']
        },
        { name: ['2playlist name'],
          artist: ['2playlist artist'],
          album: ['2playlist album']
        },
        { name: ['3playlist name'],
          artist: ['3playlist artist'],
          album: ['3playlist album']
        }
      ]
    };
    //console.log(this.state.searchResults);
  }
  render() {
    //console.log(this.state.playlistTrack);
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar/>
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults}/>
            <PlayList playlistName={this.state.playlistName} playlistTrack={this.state.playlistTracks}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;