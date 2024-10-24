'use client';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '@/redux-toolkit/CounterSlice/counterslice';

export default function Home() {
  return (
    <div>
      <Counter />
    </div>
  );
}


const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="shadow-2xl flex flex-col gap-8 justify-center items-center p-10 rounded-lg bg-white">
        <button 
          className="bg-slate-900 rounded-md w-40 py-1 px-4 text-white" 
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <span className="text-4xl font-bold text-gray-800">{count}</span>
        <button 
          className="bg-slate-900 rounded-md w-40 py-1 px-4 text-white" 
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
    </div>
  );
}