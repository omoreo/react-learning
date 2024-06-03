import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreament, increament } from './redux/actions';

export default function Counter() {

        const count = useSelector((state) => state.count);
        const dispatch = useDispatch();
    

  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={() => dispatch(increament())}>Increament</button>
        <button onClick={() => dispatch(decreament())}>Decreament</button>
    </div>
  )
}
