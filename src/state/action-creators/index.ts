import { Dispatch } from "react";
import { ActionType } from "../action-types";
import { Action } from "../actions";
import { SearchType } from "../../utils/searchTypes";
const url = `https://www.thecocktaildb.com/api/json/v2/9973533/`;
export const search = (
  term: string,
  searchType: SearchType = SearchType.BY_NAME
) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH,
    });
    try {
      const data = await fetch(url + searchType + term)
        .then((response) => response.json())
        .then((object) => object.drinks);
      dispatch({
        type: ActionType.SEARCH_SUCCESS,
        payload: (typeof data !== "string" && data) || [],
      });
    } catch (err) {
      if (err instanceof Error) {
        dispatch({
          type: ActionType.SEARCH_ERROR,
          payload: err.message,
        });
      }
    }
  };
};
export const selectIngredients = (ingredients: string[]) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.INGREDIENT_SELECT,
      payload: ingredients,
    });
  };
};
export const fetchIngredients = (
  searchType: SearchType = SearchType.INGREDIENTS_LIST
) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.INGREDIENTS_FETCH,
    });
    try {
      const ingredients = await fetch(url + searchType)
        .then((response) => response.json())
        .then((result) => result.drinks);

      dispatch({
        type: ActionType.INGREDIENTS_FETCH_SUCCESS,
        payload: ingredients,
      });
    } catch (err) {
      if (err instanceof Error) {
        dispatch({
          type: ActionType.INGREDIENTS_FETCH_ERROR,
          payload: err.message,
        });
      }
    }
  };
};
