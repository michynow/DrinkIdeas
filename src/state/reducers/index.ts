import { combineReducers } from "@reduxjs/toolkit";
import drinksReducer from './drinksReducer';
const reducers = combineReducers({
    drinks:drinksReducer
})
export default reducers;
export type RootState = ReturnType<typeof reducers>