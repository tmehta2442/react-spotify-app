import React from 'react';
import './PlayList.css';
import TrackList from '../TrackList/TrackList';

class PlayList extends React.Component {
  render() {
    return (
      <div className="Playlist">
        <input value="New Playlist"/>
        <TrackList tracks={this.props.playlistTrack} onRemove={this.props.onRemove}/>
        <a className="Playlist-save">SAVE TO SPOTIFY</a>
      </div>
    );
  }
}

export default PlayList;