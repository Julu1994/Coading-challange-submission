import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    symbol: [],
    concertedCurrency: "",
};

export const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        GetSymbol(state, action) {
            state.symbol.push(action.payload);
        },
        GetCurrency(state, action) {
            state.concertedCurrency = action.payload;
        },
    },
});

export const dataActions = dataSlice.actions;
