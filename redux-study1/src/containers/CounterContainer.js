import React, { Component } from 'react';
import Counter from 'components/Counter';
import {connect} from 'react-redux';
import {
  CounterActions,
  PostActions
} from 'store/actionCreators';



class CounterContainer extends Component {
  handleIncrement =() =>{
    CounterActions.increment();
  }
  handleDecrement =() =>{
    CounterActions.decrement();
  }
  handleIncrementAsync = () =>{
    CounterActions.incrementAsync()
  }
  handleRequestChunk=()=>{
    CounterActions.requestTest()
  }

  componentDidMount(){
    // 컴포넌트가 처음 마운트 될 때 현재 number를 postId로 사용하여 포스트 내용을 불러옵니다,
    const {number} = this.props;
    this.getPost(number);
  }

  componentWillReceiveProps(nextProps){
    // 현재 number와 새로 받을 number가 다를 경우에 요청을 시도합니다,
    if(this.props.number !== nextProps.number){
      this.getPost(nextProps.number)
    }
  }

  getPost =async (postId) =>{
    try{
      await PostActions.getPost(postId);
      console.log('요청이 완료 된 다음에 실행됨')
    }catch(e){
      console.log('에러가 발생');
      console.log(e);
    }
  }

  
  render() {
    const {number,text, post, error, loading} = this.props;
    return (
      <div>

        <Counter 
          number={number} 
          text={text}
          requestTest={this.handleRequestTest}
          increment={this.handleIncrement}
          decrement={this.handleDecrement}
          // incrementAsync = {this.handleRequestChunk}
        />
        {loading && <h2>로딩중...</h2>}
        {error
        ?<h1>에러발생!</h1>
        :(
          <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        )}
      </div>
    );
  }
}

export default connect(
  ({counter,post})=>({
    number:counter.number,
    text:counter.text,
    post:post.data,
    loading:post.pending,
    error:post.error
  })
)(CounterContainer);