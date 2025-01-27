// counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Initial state for the counter
const initialState = {
  value: 0
};

// Creating a slice
const counterSlice = createSlice({
  name: 'counter',  // Name of the slice
  initialState,     // Initial state of the slice
  reducers: {
    // Reducer to increment the counter
    increment: (state) => {
      state.value += 1;
    },
    // Reducer to decrement the counter
    decrement: (state) => {
      state.value -= 1;
    }
  }
});

// Export the actions generated by the slice
export const { increment, decrement } = counterSlice.actions;

// Export the reducer to be used in the store
export default counterSlice.reducer;