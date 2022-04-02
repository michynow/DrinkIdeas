import { combineReducers } from "@reduxjs/toolkit";
import drinksReducer from "./drinksReducer";
import ingredientsReducer from "./ingredientsReducer";
const reducers = combineReducers({
  drinks: drinksReducer,
  ingredients: ingredientsReducer,
});
export default reducers;
export type RootState = ReturnType<typeof reducers>;
