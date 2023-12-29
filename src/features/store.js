import { configureStore } from "@reduxjs/toolkit";
import coinReducer from "../features/coinSlice"
const store = configureStore({
    reducer:{
coins : coinReducer
    }
})
export default store
    