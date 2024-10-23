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
      <div className="shadow-2xl p-10 rounded-lg bg-white">
        <button 
          className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg mb-6 transform transition-transform hover:scale-105 active:scale-95" 
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <span className="text-4xl font-bold mb-6 text-gray-800">{count}</span>
        <button 
          className="bg-red-600 text-white px-6 py-3 rounded-full shadow-lg transform transition-transform hover:scale-105 active:scale-95" 
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
    </div>
  );
}