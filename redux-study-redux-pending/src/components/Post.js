import React, { Component } from 'react';

class Post extends Component {
  render() {
    const {onClick,pending,error,data} = this.props;
    return (
      <div>
        <button onClick={onClick}>Get POST !</button>
        <h5>{data.title}</h5>
        <p>{data.body}</p>
      </div>
    );
  }
}

export default Post;