import React from 'react';

export default function Header() {
  return (
    <div className='flex justify-between items-center p-6 border-b border-gray-200'>
      <h1 className='text-2xl font-bold text-pink-600'>Dashboard</h1>
      <div className='flex items-center space-x-4'>
        <input
          type='text'
          placeholder='Search...'
          className='px-4 py-2 border rounded-md focus:outline-none bg-gray-300 text-white'
        />
        <span className='bg-gray-100 p-2 rounded-full'>🔔</span>
        <span className='bg-gray-100 p-2 rounded-full'>❓</span>
        <img
          src='/icons/Avatar.png'
          alt='avatar'
          className='w-8 h-8 rounded-full'
        />
      </div>
    </div>
  );
}
