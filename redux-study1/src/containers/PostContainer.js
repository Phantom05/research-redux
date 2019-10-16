import React, { Component } from 'react';
import {connect} from 'react-redux';
import Post from 'components/Post';
import {PostActions} from 'store/actionCreators'
class PostContainer extends Component {


  handleIncrement =() =>{
    PostActions.increment();
  }
  handleDecrement =() =>{
    PostActions.decrement();
  }

  componentDidMount(){
    const {number} = this.props;
    PostActions.getPostAsync(number)
  }
  componentWillReceiveProps(prevProps){
    const {number} = this.props;
    if(prevProps.number !== number){
      PostActions.getPostAsync(number)
    }
  }

  render() {
    const {number,data,pending,error} = this.props;
    return (
      <div>
        <Post
          number={number}
          up={this.handleIncrement}
          down={this.handleDecrement}
          data={data}
          pending={pending}
          error={error}
        />
      </div>
    );
  }
}

export default connect(
  ({post})=>({
    number:post.number,
    data:post.data,
    pending:post.pending,
    error:post.error,
  })
)(PostContainer);

