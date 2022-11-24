import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    from: "AUD",
    to: "AUD",
    amount: 0,
};

export const inputSlice = createSlice({
    name: "input",
    initialState,
    reducers: {
        InputFrom(state, action) {
            state.from = action.payload;
        },
        InputTo(state, action) {
            state.to = action.payload;
        },
        InputAmount(state, action) {
            state.amount = action.payload;
        },
    },
});

export const inputActions = inputSlice.actions;
