import React, { Component } from 'react';
import FullscreenError from 'components/base/FullscreenError';

class Home extends Component {
  render() {
    const {number,data,onClick,error,wsConnect} = this.props;
    if(error) return <FullscreenError />
    return (
      <div>
        <h1>{number}</h1>
        <div>
          <button id="ff" onClick={()=>onClick('increment')}>+</button>
          <button onClick={()=>onClick('decrement')}>-</button>
        </div>
        <button onClick={()=>onClick('getUser')}>Get User</button> <br/>
        <button onClick={()=>onClick('wsSend')}>Socket REQUEST</button>
        <button onClick={()=>onClick('blocking')}>Blocking</button>
        <button onClick={()=>onClick('unblocking')}>unBlocking</button>
        <hr/>
        <button>DOF</button>
        <div>
          {wsConnect ? 'connect' : 'disconnect'}
        </div>
        <div>{data}</div>
      </div>
    );
  }
}

export default Home;