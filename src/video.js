import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import './video.css'

class video extends Component {
  render() {
    return (
      <ReactPlayer url='https://www.youtube.com/watch?v=v7bnOxV4jAc' playing />
    );
  }
}

export default video;