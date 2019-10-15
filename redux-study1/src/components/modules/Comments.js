import React, { Component } from 'react';
import withRequest from 'hoc/withRequest';
class Comments extends Component {

  render() {
    const {data} = this.props;
    if(!data) return null;
    return (
      <div>
        <h2>Comments</h2>
        <div>{JSON.stringify(data)}</div>
      </div>
    );
  }
}

export default withRequest({
  url:`https://jsonplaceholder.typicode.com/comments?postId=1`,
  method:"get"
})(Comments);

