function useState(initialState) {
  const State = {
    _value: initialState,
    setState(newState) {
      State._value = newState
    },
    getState() {
      return State._value
    },
  }
  return [State.getState, State.setState]
}

export default useState
