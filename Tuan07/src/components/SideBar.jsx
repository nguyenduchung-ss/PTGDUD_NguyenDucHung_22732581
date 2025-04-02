import React from 'react'

export default function SideBar() {
  return (
    <div className=' w-1/5 flex flex-col items-center border-2 border-blue-400 p-4'>
        <img src="../../img/Lab_05/Image 1858.png" alt="" />
        <nav className='mb-4'>
            
            <ul className='text-blue-500'>
                <li className='text-2xl flex text-white bg-pink-500'>
                    <img src="../../img/Lab_05/Squares four 1.png" alt=""  />
                    Dashboard</li>
                <li className='text-2xl flex text-gray-500'>
                    <img src="../../img/Lab_05/Folder.png" alt="" />
                    Projects</li>
                <li className='text-2xl flex text-gray-500'>
                    <img src="../../img/Lab_05/Groups.png" alt="" />
                    Teams</li>
                <li className='text-2xl flex text-gray-500'>
                    <img src="../../img/Lab_05/Pie chart.png" alt="" />
                    Analytics</li>
                <li className='text-2xl flex text-gray-500'>
                    <img src="../../img/Lab_05/Chat.png" alt="" />
                    Messages</li>
                <li className='text-2xl flex text-gray-500'>
                    <img src="../../img/Lab_05/Code.png" alt="" />
                    Integrations</li>
                
            </ul>
        </nav>
        <img src="../../img/Lab_05/Group.png" alt="" />
        <p>V2.0 is available</p>
    </div>
  )
}
