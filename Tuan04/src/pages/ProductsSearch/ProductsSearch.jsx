import React, { useEffect, useState } from "react";
import FoodBox from "../../components/FoodBox/FoodBox";
import Filter from "../../components/Filters/Filter";
import "bootstrap/dist/css/bootstrap.min.css";
import Pagination from "../../components/Pagination/Pagination";


export default function ProductsSearch() {

  const[array, setArray] = useState([])

  useEffect(() =>{
    var fn = fetch('https://67c81e1f0acf98d07084f012.mockapi.io/FoodBox')
    var fn1 = fn.then((res)=> {return res.json()})
    var fn2 = fn1.then((data) => {
      setArray(data)
    })
  },[])

  return (
    <div className="d-flex container my-0 pt-5">
      <div>
        <Filter />
      </div>
      <div className="mt-0">
        <div className="d-flex align-items-center justify-content-between">
          <h2 style={{ fontWeight: "bold", marginBottom: "20px" }}>
            Salad (32)
          </h2>
          <div className="dropdown">
            <button
              className="btn btn-outline-secondary dropdown-toggle d-flex justify-content-between align-items-center text-start"
              type="button"
              style={{ width: "200px", opacity: 0.9 }}
            >
              A - Z
            </button>
          </div>
        </div>
        <div className="row justify-content-between">
          {array.map((food) => (
            <div key={food.id} className="col-md-4 mb-4">
              <FoodBox image={food.image} title={food.title} time={food.time} />
            </div>
          ))}
        </div>
        <div>
          <Pagination />
        </div>
      </div>
    </div>
  );
}
