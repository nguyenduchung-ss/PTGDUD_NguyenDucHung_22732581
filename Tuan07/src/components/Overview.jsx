import React from 'react'

export default function Overview() {
  return (
    <div>
        <div className='flex'>
        <img src="../../img/Lab_05/Squares four 1.png" alt="" /><h5>Overview</h5>
        </div>
    <div className='flex justify-center p-4 border-2 border-blue-400'>
        <div className='flex m-10'>
            <div>
            <h6>Turnover</h6>
            <p>$92,405</p>
            <p>tang 5%</p>
            </div>
            <img src="../../img/Lab_05/Button 1509.png" alt="" />
        </div>
        <div className='flex m-10'>
        <div>
            <h6>Profit</h6>
            <p>$92,405</p>
            <p>tang 5%</p>
        </div>
        <img src="../../img/Lab_05/Button 1529.png" alt="" />
        </div>
        <div className='flex m-10'>
        <div>
            <h6>New customer</h6>
            <p>298</p>
            <p>tang 5%</p>
        </div>
        <img src="../../img/Lab_05/Button 1530.png" alt="" />
        </div>
    </div>
    </div>
  )
}
