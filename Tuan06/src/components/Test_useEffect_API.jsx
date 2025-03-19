import React, { useEffect, useState } from 'react'

export default function Test_useEffect_API() {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/')
        .then(response => response.json())
        .then(data => setTodos(data))
    }, []);
  return (
    <div>
         {todos.map( (todo) => {
            return(<li key={todo.id}>{todo.title}</li>)
         }
         )}
    </div>
  )
}
