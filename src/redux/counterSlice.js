import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value +=1
        },
        decrement: (state) => {
            state.value -=1
        },
        icrimentByAmount: (state, action) => {
            state.value += action.payload
        }
    }
})

export const { increment, decrement, icrimentByAmount } = counterSlice.actions

export const counterReducer= counterSlice.reducer