import React, { Component } from 'react';
import withRequest from 'hoc/withRequest';
class Post extends Component {


  render() {
    const {data} = this.props;
    if(!data) return null;
    return (
      <div>
        <h2>Post</h2>
        <div>{JSON.stringify(data)}</div>
      </div>
    );
  }
}

export default withRequest('https://jsonplaceholder.typicode.com/posts/1')(Post);