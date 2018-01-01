import React from 'react';
import './Track.css';

class Track extends React.Component {
  constructor(props) {
    super(props);
    this.addTrack = this.addTrack.bind(this);
  }
  addTrack(e) {
    return this.props.onAdd(this.props.track);
  }
  render() {
    console.log(this.props.track);
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>{this.props.track.artist} | {this.props.track.album}</p>
        </div>
        <a className="Track-action" onClick={this.addTrack}>+</a> or <a className="Track-action">-</a>
      </div>
    );
  }
}

export default Track;