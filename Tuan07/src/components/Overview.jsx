import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';



export default function Overview() {

      const [data, setData] = useState([])

    const fetchData = (url, setDataResponse) =>{
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setDataResponse(data)
            })
    }

    useEffect(() => {
        fetchData("https://67de7a15471aaaa7428491fc.mockapi.io/Overview", setData)
    },data);
  return (
    <div className='grid grid-cols-3 gap-6 p-6'>
      {data.map((item, idx) => (
        <div key={idx} className={`p-6 rounded-xl ${item.color}`}>
          <div className='text-sm text-gray-600'>{item.title}</div>
          <div className='text-2xl font-bold'>{item.value}</div>
          <div className='text-green-600 text-sm'>{item.change} period of change</div>
        </div>
      ))}
    </div>
  );
}
