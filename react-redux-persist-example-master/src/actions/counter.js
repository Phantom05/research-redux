export const increment = () => {
  return {
    type: 'INCREMENT',
  }
}

export const decrement = () => {
  return {
    type: 'DECREMENT',
  }
}

export const logout = () => {
  return {
    type: 'USER_LOGGED_OUT',
  }
}