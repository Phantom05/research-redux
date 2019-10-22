import React, { Component } from 'react';
import FullscreenError from 'components/base/FullscreenError';

class Home extends Component {
  render() {
    const {number,data,onClick,error} = this.props;
    if(error) return <FullscreenError />
    return (
      <div>
        <h1>{number}</h1>
        <div>
          <button onClick={()=>onClick('increment')}>+</button>
          <button onClick={()=>onClick('decrement')}>-</button>
        </div>
        <button onClick={()=>onClick('getUser')}>Get User</button> <br/>
        <button onClick={() => onClick('test')}>TEST BUTTON</button>
        <div>{data}</div>
      </div>
    );
  }
}

export default Home;