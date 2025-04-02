import React from 'react'

export default function SideBar() {
  return (
    <div className=' w-1/5 flex flex-col items-center border-2 border-blue-400 p-4'>
        <nav className='mb-4'>
            <ul className='text-blue-500'>
                <li className='text-2xl'>Link1</li>
                <li className='text-2xl'>Link2</li>
                <li className='text-2xl'>Link3</li>
            </ul>
        </nav>
    </div>
  )
}
