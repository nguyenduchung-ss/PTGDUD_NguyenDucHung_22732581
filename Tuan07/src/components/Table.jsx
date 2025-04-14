import React, { useState } from 'react'
import { useEffect } from 'react'

export default function Table() {
  const [data, setData] = useState([])
  
      const fetchData = (url, setDataResponse) =>{
          fetch(url)
              .then((response) => response.json())
              .then((data) => {
                  setDataResponse(data)
              })
      }
  
      useEffect(() => {
          fetchData("https://67de7a15471aaaa7428491fc.mockapi.io/table", setData)
      },data);

  return (
    <div className='p-4'>
      <div className='overflow-x-auto rounded-lg shadow'>
        <table className='w-full text-sm text-left text-gray-700'>
          <thead className='bg-gray-100 text-gray-600 uppercase'>
            <tr>
              <th className='p-4'>
                <input type='checkbox' />
              </th>
              <th className='p-4'>Customer Name</th>
              <th className='p-4'>Company</th>
              <th className='p-4'>Order Value</th>
              <th className='p-4'>Order Date</th>
              <th className='p-4'>Status</th>
              <th className='p-4'></th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, idx) => (
              <tr key={idx} className='border-b'>
                <td className='p-4'>
                  <input type='checkbox' />
                </td>
                <td className='p-4 flex items-center'>
                  <img src={item.avatar} alt='avatar' className='w-8 h-8 rounded-full mr-3' />
                  <span className='font-medium'>{item.name}</span>
                </td>
                <td className='p-4'>{item.company}</td>
                <td className='p-4'>{item.value}</td>
                <td className='p-4'>{item.date}</td>
                <td className='p-4'>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${item.statusColor}`}>
                    {item.status}
                  </span>
                </td>
<td className='p-4'>
                  <img src='/icons/edit.png' alt='edit' className='w-4 h-4 cursor-pointer' />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className='flex justify-between items-center mt-4 px-2 text-sm text-gray-500'>
        <div>63 results</div>
        <div className='flex items-center space-x-2'>
          {[1, 2, 3, 4, 5, 10, 11].map((n) => (
            <button
              key={n}
              className={`w-8 h-8 flex items-center justify-center rounded-full ${n === 1 ? 'bg-pink-500 text-white' : 'text-gray-600 hover:bg-gray-200'}`}
            >
              {n}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}