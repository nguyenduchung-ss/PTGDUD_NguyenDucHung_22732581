import React, { useEffect, useState } from 'react'

export default function Test_useEffect() {

    const [data, setData] = useState([])
    const [data2, setData2] = useState([])

    const fetchData = (url, setDataResponse) =>{
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setDataResponse(data)
            })
    }
    
    useEffect(() => {
        fetchData("https://jsonplaceholder.typicode.com/todos/2", setData)
        fetchData("https://jsonplaceholder.typicode.com/todos/1", setData2)
    },[]);

    return (
    <div>
        <p>{data.id}</p> <br />
        <p>{data.title}</p> <br />
        <p>{data.completed}</p> <br />
        <p>{data2.title}</p>

    </div>
  )
}
