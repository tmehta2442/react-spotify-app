import React from 'react';
import './PlayList.css';
import TrackList from '../TrackList/TrackList';

class PlayList extends React.Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.save = this.save.bind(this);
  }
  handleNameChange(e) {
    this.props.onNameChange(e.target.value);
  }
  save() {
    this.props.onSave();
  }
  render() {
    return (
      <div className="Playlist">
        <input  onChange={this.handleNameChange} value={this.props.playlistName}             
                 />
        <TrackList  tracks={this.props.playlistTrack}
                    minus={true}
                    onRemove={this.props.onRemove} />
        <a className="Playlist-save" onClick={this.save} >SAVE TO SPOTIFY</a>
      </div>
    );
  }
}

export default PlayList;