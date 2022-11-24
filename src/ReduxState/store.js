import { configureStore } from "@reduxjs/toolkit";
import { dataSlice } from "./Features/data";
import { inputSlice } from "./Features/userInput";
export const store = configureStore({
    reducer: {
        data: dataSlice.reducer,
        input: inputSlice.reducer,
    },
});
