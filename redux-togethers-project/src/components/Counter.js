

import React from 'react';

const Counter = ({ value, onIncrement, onDecrement, onIncrementAsync }) =>
  <div>
    {' '}
    <button onClick={onIncrementAsync}>
      Increment after 1 second
    </button>
    <hr />
    <div>
      Clicked: {value} times
    </div>
  </div>

export default Counter;