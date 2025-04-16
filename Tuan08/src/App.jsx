import React from 'react';
import './App.css'
import CounterUseReducer from './components/CounterUseReducer';
import CounterReduxClassic from './components/CounterReduxClassic';
import CounterReduxToolkit from './components/CounterReduxToolkit';
import Counter from './features/counter/Counter';
import TodoList from './features/todos/TodoList';
import ThemeToggle from './features/theme/ThemeToggle';
import Cart from './features/cart/Cart';
import Auth from './features/auth/Auth';
import { useSelector } from 'react-redux';

export default function App() {

  const theme = useSelector(state => state.theme);
  return (
    <div>
      <div style={{ padding: '2rem' }}>
      <h1>Counter Comparison: useReducer vs Redux vs Redux Toolkit</h1>
      <div style={{ display: 'flex', gap: '2rem' }}>
        <CounterUseReducer />
        <CounterReduxClassic />
        <CounterReduxToolkit />
      </div>
    </div>
    <div className={theme === 'dark' ? 'bg-gray-100' : 'bg-pink-100'}>
      <h1> Redux Toolkit App Demo</h1>
      <ThemeToggle />
      <Auth />
      <Counter />
      <TodoList />
      <Cart />
    </div>
    </div>
  );
}
