import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../redux/features/auth/authSlice'
import { baseApi } from "./api/baseApi";
export const store = configureStore({
    reducer:{
        [baseApi.reducerPath]:baseApi.reducer,
        auth: authReducer,
    }
})



export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch