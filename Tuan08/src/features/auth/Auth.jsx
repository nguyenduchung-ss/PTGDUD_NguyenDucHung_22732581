import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from './authSlice';

export default function Auth() {
  const [username, setUsername] = useState('');
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();

  return (
    <div>
      <h2> Auth</h2>
      {auth.isLoggedIn ? (
        <div>
          <p>Welcome, {auth.user.name}!</p>
          <button className='bg-amber-400' onClick={() => dispatch(logout())}>Logout</button>
        </div>
      ) : (
        <div>
          <input className='bg-gray-300'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter name"
          />
          <button className='bg-amber-400' onClick={() => dispatch(login({ name: username }))}>Login</button>
        </div>
      )}
    </div>
  );
}
