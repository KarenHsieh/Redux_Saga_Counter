import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import * as actions from './actions';


function Counter() {

  // react-redux 7.1 用 useDispatch 和 useSelector 取代 connect
  const dispatch = useDispatch();
  const count = useSelector(state => state.count);
  // useSelector 從 Redux 的 store 拿到 state

  return (
    <div>
      <div>Counter: {count}</div>
      <button onClick={() => { dispatch(actions.increment()); }}>+1</button>
      <button onClick={() => { dispatch(actions.decrement()); }}>-1</button>
      <button onClick={() => { dispatch(actions.incrementAsync()); }}>+1 after 2 second</button>
    </div>
  );
}

// function mapStateToProps(state) {
//   return {
//     count: state.count
//   };
// }

// export default connect(mapStateToProps)(Counter);

export default Counter;

