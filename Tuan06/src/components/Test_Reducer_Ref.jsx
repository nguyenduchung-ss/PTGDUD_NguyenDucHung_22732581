import React, { useReducer, useRef } from 'react'

export default function Test_Reducer_Ref() {
    const reducer = (state, action) =>{
        switch(action.type){
            case '+': return {count:state.count+1};
            case '-': return {count:state.count-1}
            default: return state.count;
        }
    }

const [state, dispacth] = useReducer(reducer, {count: 0});

const handleInput = () =>{
    console.log(valueInput.current.value)
}

const valueInput = useRef(0);
  return (
    <>
        <input ref={valueInput} type="text" name="" id="" />
        <button onClick={handleInput}>Click</button>
        <hr />
        <br />
        <span>{state.count}</span>
        <br />
        <button onClick={() => {dispacth({type: '+'})}}>+</button>
        <button onClick={() => {dispacth({type: '-'})}}>-</button>
    </>
  )
}
