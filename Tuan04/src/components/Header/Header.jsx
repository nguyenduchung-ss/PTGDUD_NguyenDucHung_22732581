import React, { useEffect, useState } from "react";
import "./Header.css";

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
      <div className="header-container">
        <div className="header-logo">      
            <img src="/images/chefify.png" style={{width: "100%"}} />
        </div>
        <div className="search-container">
          <input type="text" className="search-input" placeholder="Tìm kiếm" />
        </div>
        <div className="navigation-container">
          <ul>
            {
              array.map((item, index) => {
                return(
                  <li key={index}>
                    {item.name}
                  </li>
                )
              })
            }
          </ul>
        </div>

        <div className="information-box">
          <div className="recipe-box">
            <span className="text">Your Recipe Box</span>
          </div>

          <div className="avatar-container">
            <img src="/images/avatar.png" alt="Avatar" />
          </div>
        </div>
      </div>
    </>
  );
}
