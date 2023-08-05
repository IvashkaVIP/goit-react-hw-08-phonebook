// src > components > TestComp > TestComp.jsx

import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from 'redux/store';


export const TestComponent = () => {

    const dispatch = useDispatch();
    const value = useSelector(state=>state.myValue)
    return (
      <>
        <h1>Test : {value}</h1>
        <button onClick={() => dispatch(increment(5))}>Increment</button>
        <button onClick={() => dispatch(decrement(5))}>Decrement</button>
      </>
    );
}