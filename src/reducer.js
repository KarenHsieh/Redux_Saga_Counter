
const initialState = {
  count: 0
}

function reducer( state = initialState, action) {
  switch(action.type) {
    case 'INCREMENT':
        return {
          count: state.count + 1
        }
    case 'DECREMENT':
        const num = state.count - 1;
        if(num === -1) return state;
        return {
          count: num
        }
    default:
      return state;
  }
}

export default reducer;