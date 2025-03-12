import React, { useEffect, useState } from "react";

export default function Header() {

  const [array, setArray] = useState([])

  useEffect(() => {
    var fn = fetch('https://67c81e1f0acf98d07084f012.mockapi.io/menu')
    var fn1 = fn.then((res) => {return res.json()})
    var fn2 = fn1.then((data) => {
      setArray(data)
    })
  },[])

  return (
    <>
      <div className="flex bg-white p-px justify-around items-center h-auto">
        <div className="header-logo">      
            <img src="/images/chefify.png"  />
        </div>
        <div className="w-90">
          <input type="text" className="bg-gray-200 rounded-xl w-7/10 h-7" placeholder=" Tìm kiếm" />
        </div>
        <div className="justify-center">
          <ul className="flex decoration-green-50">
            {
              array.map((item, index) => {
                return(
                  <li className="m-4 text-gray-500 text-lg" key={index}>
                    {item.name}
                  </li>
                )
              })
            }
          </ul>
        </div>

        <div className="flex  justify-center">
          <div className="bg-pink-100 rounded-2xl mr-3 items-center">
            <span className="text-pink-600 text-10 p-2 mt-6">Your Recipe Box</span>
          </div>

          <div className="avatar-container">
            <img src="/images/avatar.png" alt="Avatar" />
          </div>
        </div>
      </div>
    </>
  );
}
