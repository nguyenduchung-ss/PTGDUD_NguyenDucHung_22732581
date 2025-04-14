import React from 'react'

export default function SideBar() {
  return (
    <div className='w-1/5 min-h-screen bg-white shadow-md flex flex-col justify-between'>
      <div>
        {/* Logo */}
        <img src='/icons/Image 1858.png' alt='dashboard' className='p-5' />

        {/* Navigation */}
        <nav className='px-4'>
          <ul className='space-y-6'>
            <li className='flex items-center text-gray-700 cursor-pointer'>
              <img src='/icons/Squares four 1.png' alt='dashboard' className='w-5 h-5 mr-3' />
              Dashboard
            </li>
            <li className='flex items-center text-gray-700 cursor-pointer'>
              <img src='/icons/Folder.png' alt='projects' className='w-5 h-5 mr-3' />
              Projects
            </li>
            <li className='flex items-center text-gray-700 cursor-pointer'>
              <img src='/icons/Groups.png' alt='teams' className='w-5 h-5 mr-3' />
              Teams
            </li>
            <li className='flex items-center text-gray-700 cursor-pointer'>
              <img src='/icons/Pie chart.png' alt='analytics' className='w-5 h-5 mr-3' />
              Analytics
            </li>
            <li className='flex items-center text-gray-700 cursor-pointer'>
              <img src='/icons/Chat.png' alt='messages' className='w-5 h-5 mr-3' />
              Messages
            </li>
            <li className='flex items-center text-gray-700 cursor-pointer'>
              <img src='/icons/Code.png' alt='integrations' className='w-5 h-5 mr-3' />
              Integrations
            </li>
          </ul>
          
          <img src='/icons/Group.png' alt='integrations' className='p-5' />
        </nav>
      </div>

      {/* Footer */}
      <div className='p-4'>
        <div className='text-sm text-gray-400'>Made with ❤️ by Visily</div>
        <button className='mt-2 bg-blue-100 text-blue-700 px-4 py-2 rounded text-sm'>Try now</button>
      </div>
    </div>
  )
}
