import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './counterSlice';

export default function Counter() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h2> Counter</h2>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(decrement())}>➖</button>
      <button onClick={() => dispatch(increment())}>➕</button>
    </div>
  );
}
