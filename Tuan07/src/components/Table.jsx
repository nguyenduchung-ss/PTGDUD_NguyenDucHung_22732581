import React from 'react';

const statusColors = {
  New: 'bg-blue-100 text-blue-600',
  'In-progress': 'bg-yellow-100 text-yellow-600',
  Completed: 'bg-green-100 text-green-600',
};

const rows = [
  { name: 'Elizabeth Lee', company: 'AvatarSystems', value: '$359', date: '10/07/2023', status: 'New' },
  { name: 'Carlos Garcia', company: 'SmoozeShift', value: '$747', date: '24/07/2023', status: 'New' },
  { name: 'Elizabeth Bailey', company: 'Prime Time Telecom', value: '$564', date: '08/08/2023', status: 'In-progress' },
  { name: 'Ryan Brown', company: 'OmniTech Corporation', value: '$541', date: '31/08/2023', status: 'In-progress' },
  { name: 'Ryan Young', company: 'DataStream Inc.', value: '$769', date: '01/05/2023', status: 'Completed' },
  { name: 'Hailey Adams', company: 'FlowRush', value: '$922', date: '10/06/2023', status: 'Completed' },
];

export default function Table() {
  return (
    <div className='p-6'>
      <div className='flex justify-between mb-4'>
        <h2 className='text-lg font-semibold'>Detailed report</h2>
        <div className='space-x-2'>
          <button className='px-4 py-2 border rounded text-pink-400'>Import</button>
          <button className='px-4 py-2 border rounded text-pink-400'>Export</button>
        </div>
      </div>
      <table className='w-full table-auto border border-gray-200'>
        <thead className='bg-gray-50'>
          <tr>
            <th className='p-3 border'>Customer Name</th>
            <th className='p-3 border'>Company</th>
            <th className='p-3 border'>Order Value</th>
            <th className='p-3 border'>Order Date</th>
            <th className='p-3 border'>Status</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr key={idx} className='text-center'>
              <td className='p-3 border'>{row.name}</td>
              <td className='p-3 border'>{row.company}</td>
              <td className='p-3 border'>{row.value}</td>
              <td className='p-3 border'>{row.date}</td>
              <td className='p-3 border'>
                <span className={`px-3 py-1 rounded-full text-sm ${statusColors[row.status]}`}>
                  {row.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
