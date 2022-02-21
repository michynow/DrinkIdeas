import { Dispatch } from "react";
import { ActionType } from "../action-types";
import { Action } from "../actions";
const key = "9973533";
export const SearchDrinks = (term: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH_DRINKS,
    });
    try {
      const data: any = await fetch(
        `https://www.thecocktaildb.com/api/json/v2/${key}/recent.php`
      ); // to be changed
      const drinks: any = data.map((result: any) => {
        return result;
      }); //to be changed
      dispatch({
        type: ActionType.SEARCH_DRINKS_SUCCESS,
        payload: drinks,
      });
    } catch (err) {
      if (err instanceof Error) {
        dispatch({
          type: ActionType.SEARCH_DRINKS_ERROR,
          payload: err.message,
        });
      }
    }
  };
};
