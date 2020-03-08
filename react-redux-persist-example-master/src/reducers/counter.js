import update from 'immutability-helper'

let defaultState = {
  count: 0,
  test:true
}

const counter = (state = defaultState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      var state = {count: state.count + 1}
      return state
    case 'DECREMENT':
      return {count: state.count - 1}
    default:
      return state
  }
}

export default counter
