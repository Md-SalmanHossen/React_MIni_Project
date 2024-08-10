import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { decrement, increment, incrementDecrement, reset } from '../features/Counter';


const Account = () => {

    const count =useSelector((state)=>state.account.value);
    const dispatch=useDispatch();
    
    return (
        <div className='text-center'>
            <h1 className='text-center text-4xl '>Current Count : {count}</h1>
            <button className='bg-indigo-950 text-white  p-2 rounded-lg' onClick={()=>dispatch(increment())}>increment</button>
            <button className='m-4 bg-indigo-950 text-white  p-2 rounded-lg' onClick={()=>dispatch(decrement())}>decrement</button>
            <button className='m-4 bg-indigo-950 text-white  p-2 rounded-lg' onClick={()=>dispatch(reset())}>reset</button>
            <button className='m-4 bg-indigo-950 text-white  p-2 rounded-lg' onClick={()=>dispatch(incrementDecrement(5))}>increment by 5</button>
        </div>
    );
};

export default Account;