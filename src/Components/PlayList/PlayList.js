import React from 'react';
import './PlayList.css';

class PlayList extends React.Component {
  render() {
    return (
      <div class="Playlist">
        <input value="New Playlist"/>
        Add a TrackList component here
        <a class="Playlist-save">SAVE TO SPOTIFY</a>
      </div>
    );
  }
}

export default PlayList;