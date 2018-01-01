import React from 'react';
import './PlayList.css';
import TrackList from '../TrackList/TrackList';

class PlayList extends React.Component {
  render() {
    //console.log(this.props.playlistTrack)
    return (
      <div className="Playlist">
        <input value="New Playlist"/>
        <TrackList tracks={this.props.playlistTrack}/>
        <a className="Playlist-save">SAVE TO SPOTIFY</a>
      </div>
    );
  }
}

export default PlayList;