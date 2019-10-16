import React, { Component } from 'react';
import {connect} from 'react-redux';
import Post from 'components/Post';
import {PostActions} from 'store/actionCreators';

class PostConntainer extends Component {


  handleGetPost = () =>{
    PostActions.getPostApi(2)
  }
  render() {
    const {pending,error,data} = this.props;
    console.log(data,'datadata');
    return (
      <div>
        <Post 
          onClick ={this.handleGetPost}
          peding={pending}
          error={error}
          data={data}
        />
      </div>
    );
  }
}

export default connect(
  ({post})=>({
    pending:post.pending,
    error:post.error,
    data:post.data,
  })
)(PostConntainer);