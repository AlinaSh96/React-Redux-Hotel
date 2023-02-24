import { combineReducers, configureStore } from "@reduxjs/toolkit";
//import { pizzaApi } from "../services/pizzaService";
import hotelReducer from './hotel/hotelSlice';
import createSagaMiddleware from "redux-saga";
import fetchUserWatcher  from "../services/hotelService";


const rootReducer = combineReducers({
    hotelReducer
 // [pizzaApi.reducerPath]: pizzaApi.reducer,
});

const saga = createSagaMiddleware();

export const setupStore = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(saga),
})

saga.run(fetchUserWatcher);

