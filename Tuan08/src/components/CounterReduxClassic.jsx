// components/CounterReduxClassic.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function CounterReduxClassic() {
  const count = useSelector((state) => state.counterClassic.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Redux Classic Counter</h3>
      <p>Count: {count}</p>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
    </div>
  );
}
