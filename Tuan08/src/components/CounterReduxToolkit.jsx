// components/CounterReduxToolkit.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../toolkit/counterSlice';

export default function CounterReduxToolkit() {
  const count = useSelector((state) => state.counterToolkit.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Redux Toolkit Counter</h3>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
}
