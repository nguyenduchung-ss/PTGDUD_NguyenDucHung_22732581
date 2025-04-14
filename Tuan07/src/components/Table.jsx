import React from 'react'

export default function Table() {
  const data = [
    {
      name: 'Elizabeth Lee',
      avatar: '/icons/Avatar (1).png',
      company: 'AvatarSystems',
      value: '$359',
      date: '10/07/2023',
      status: 'New',
      statusColor: 'bg-blue-100 text-blue-600'
    },
    {
      name: 'Carlos Garcia',
      avatar: '/icons/Avatar (2).png',
      company: 'SmoozeShift',
      value: '$747',
      date: '24/07/2023',
      status: 'New',
      statusColor: 'bg-blue-100 text-blue-600'
    },
    {
      name: 'Elizabeth Bailey',
      avatar: '/icons/Avatar (3).png',
      company: 'Prime Time Telecom',
      value: '$564',
      date: '08/08/2023',
      status: 'In-progress',
      statusColor: 'bg-yellow-100 text-yellow-600'
    },
    {
      name: 'Ryan Brown',
      avatar: '/icons/Avatar (4).png',
      company: 'OmniTech Corporation',
      value: '$541',
      date: '31/08/2023',
      status: 'In-progress',
      statusColor: 'bg-yellow-100 text-yellow-600'
    },
    {
      name: 'Ryan Young',
      avatar: '/icons/Avatar (5).png',
      company: 'DataStream Inc.',
      value: '$769',
      date: '01/05/2023',
      status: 'Completed',
      statusColor: 'bg-green-100 text-green-600'
    },
    {
      name: 'Hailey Adams',
      avatar: '/icons/Avatar 313.png',
      company: 'FlowRush',
      value: '$922',
      date: '10/06/2023',
      status: 'Completed',
      statusColor: 'bg-green-100 text-green-600'
    },
  ];

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