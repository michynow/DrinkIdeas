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
      console.log(data);
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
