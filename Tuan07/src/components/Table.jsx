import React from 'react'

export default function Table() {
  return (
    <div className=' h-139   p-4 border-2 border-blue-400'>
      <table className='w-full h-129 border border-gray-600 text-center '>
          <thead>
            <tr>
              <th className='border border-gray-600 p-2'>Column 1</th>
              <th className='border border-gray-600 p-2'>Column 2</th>
              <th className='border border-gray-600 p-2'>Column 3</th>
              <th className='border border-gray-600 p-2'>Column 4</th>
              <th className='border border-gray-600 p-2'>Column 5</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='border border-gray-600 p-2'>Row1-1</td>
              <td className='border border-gray-600 p-2'>Row1-2</td>
              <td className='border border-gray-600 p-2'>Row1-3</td>
              <td className='border border-gray-600 p-2'>Row1-4</td>
              <td className='border border-gray-600 p-2'>Row1-5</td>
            </tr>
            <tr>
              <td className='border border-gray-600 p-2'>Row2-1</td>
              <td className='border border-gray-600 p-2'>Row2-2</td>
              <td className='border border-gray-600 p-2'>Row2-3</td>
              <td className='border border-gray-600 p-2'>Row2-4</td>
              <td className='border border-gray-600 p-2'>Row2-5</td>
            </tr>
            <tr>
              <td className='border border-gray-600 p-2'>Row3-1</td>
              <td className='border border-gray-600 p-2'>Row3-2</td>
              <td className='border border-gray-600 p-2'>Row3-3</td>  
              <td className='border border-gray-600 p-2'>Row3-4</td>
              <td className='border border-gray-600 p-2'>Row3-5</td>
            </tr>
          </tbody>
      </table>
    </div>
  )
}
