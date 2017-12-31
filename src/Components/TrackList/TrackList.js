import React from 'react';
import './TrackList.css';
import Track from '../Track/Track';

class TrackList extends React.Component {
  render() {
    return (
       <div className="TrackList">
          map method that renders a set of Track components here
          <Track/>
      </div>
    );
  }
}

export default TrackList;