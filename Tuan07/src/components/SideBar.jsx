import React from 'react'
import { NavLink } from 'react-router-dom'

export default function SideBar() {
  const navClass = ({ isActive }) =>
    isActive
      ? 'flex items-center text-white bg-pink-500 px-3 py-2 rounded cursor-pointer'
      : 'flex items-center text-gray-700 hover:bg-pink-100 px-3 py-2 rounded cursor-pointer'

  return (
    <div className='w-1/5 min-h-screen bg-white shadow-md flex flex-col justify-between'>
      <div>
        {/* Logo */}
        <img src='/icons/Image 1858.png' alt='dashboard' className='p-5' />

        {/* Navigation */}
        <nav className='px-4'>
          <ul className='space-y-4'>
            <li>
              <NavLink to='/' className={navClass}>
                <img src='/icons/Squares four 1.png' alt='dashboard' className='w-5 h-5 mr-3' />
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to='/projects' className={navClass}>
                <img src='/icons/Folder.png' alt='projects' className='w-5 h-5 mr-3' />
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to='/teams' className={navClass}>
                <img src='/icons/Groups.png' alt='teams' className='w-5 h-5 mr-3' />
                Teams
              </NavLink>
            </li>
            <li>
              <NavLink to='/analytics' className={navClass}>
                <img src='/icons/Pie chart.png' alt='analytics' className='w-5 h-5 mr-3' />
                Analytics
              </NavLink>
            </li>
            <li>
              <NavLink to='/messages' className={navClass}>
                <img src='/icons/Chat.png' alt='messages' className='w-5 h-5 mr-3' />
                Messages
              </NavLink>
            </li>
            <li>
              <NavLink to='/integrations' className={navClass}>
                <img src='/icons/Code.png' alt='integrations' className='w-5 h-5 mr-3' />
                Integrations
              </NavLink>
            </li>
          </ul>

          <img src='/icons/Group.png' alt='decor' className='p-5' />
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
