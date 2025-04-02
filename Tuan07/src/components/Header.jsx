import React from 'react'

export default function Header() {
  return (
    <div className='p-4 text-center font-bold border-2 border-blue-400 justify-between flex'>
      <p className='font-bold text-pink-500'>Dashboard</p>
      <div className='flex'>
      <input className='border border-gray-300 rounded-xl' type="text"  placeholder='       Search'/>
      <img src="../../img/Lab_05/Bell 1.png" alt="" />
      <img src="../../img/Lab_05/Question 1.png" alt="" />  
      <img src="../../img/Lab_05/Avatar (5).png" alt="" />
      </div>
      
    </div>
  )
}
