import React, { Component } from 'react';
import styled from '@emotion/styled';


const Styled ={
  Button:styled.button`
    border:0;
    margin:0 3px;
    padding:5px 15px;
    border-radius:5px;
    cursor: pointer;
    &:hover{
      background: rgba(255,255,255,0.9);
    }
  `
}
class Post extends Component {
  render() {
    const {number,up,down,pending,error,data} = this.props;
    return (
      <div>
        
        <div>Post {number}</div>
        <div>
          <Styled.Button onClick={up}>+</Styled.Button>
          <Styled.Button onClick={down}>-</Styled.Button>
        </div>
        <div>
        { pending && <h3>Loading...</h3>}
        { error
          ?<h3>Error</h3>
          :(
            <div>
              <h4>{data.title}</h4>
              <p>{data.content}</p>
            </div>
          )
        }
        </div>
      </div>
    );
  }
}

export default Post;

