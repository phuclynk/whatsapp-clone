import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        increment: state => state + 1,
        decrement: state => state - 1,
        decrement_async: state => state,
        increment_async: state => state 
    }
});

export const { 
    reducer : counterReducer, 
    actions : counterActions 
}  = counterSlice;