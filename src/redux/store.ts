import { baseApi } from "./api/baseApi";
import storage from 'redux-persist/lib/storage'
import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../redux/features/auth/authSlice'
import { persistStore, persistReducer,PERSIST,REHYDRATE } from 'redux-persist'




const persistConfig = {
    key: "Auth",
    storage
}

const persistAuthReducer = persistReducer(persistConfig, authReducer)

export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        auth: persistAuthReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck:{
            ignoredActions:[PERSIST,REHYDRATE]
        }
    }).concat(baseApi.middleware)
})



export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const persistor = persistStore(store)