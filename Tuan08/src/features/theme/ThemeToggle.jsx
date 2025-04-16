import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from './themeSlice';

export default function ThemeToggle() {
  const theme = useSelector(state => state.theme);
  const dispatch = useDispatch();

  return (
    <div className={theme}>                                                                                                                                 
      <h2> Theme: {theme}</h2>
      <button className='bg-amber-300' onClick={() => dispatch(toggleTheme())}>
        Toggle Theme
      </button>
    </div>
  );
}
