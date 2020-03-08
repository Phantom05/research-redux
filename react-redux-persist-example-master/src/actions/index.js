export const changeStateProps = (prop, value) => {
  return {
    type: 'CHANGE_STATE_PROPS',
    state: {
      prop,
      value
    }
  }
}
