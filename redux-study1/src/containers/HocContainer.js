import React, { Component } from 'react';
import Post from 'components/modules/Post';
import Comments from 'components/modules/Comments';

class HocContainer extends Component {
  render() {
    return (
      <div>
        <Post/>
        <Comments/>
      </div>
    );
  }
}

export default HocContainer;