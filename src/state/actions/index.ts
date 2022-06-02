import { ActionType } from "../action-types";
import {
  FetchedDrink,
  SingleIngredient,
} from "../../utils/customTypes";
interface SearchAction {
  type: ActionType.SEARCH;
}
interface SearchSuccessAction {
  type: ActionType.SEARCH_SUCCESS;
  payload: FetchedDrink[];
}
interface SearchErrorAction {
  type: ActionType.SEARCH_ERROR;
  payload: string;
}
interface IngredientsFetch {
  type: ActionType.INGREDIENTS_FETCH;
}
interface IngredientsFetchSuccessAction {
  type: ActionType.INGREDIENTS_FETCH_SUCCESS;
  payload: SingleIngredient[];
}
interface IngredientsFetchErrorAction {
  type: ActionType.INGREDIENTS_FETCH_ERROR;
  payload: string;
}
interface IngredientSelectAction {
  type: ActionType.INGREDIENT_SELECT;
  payload: string[];
}
export type Action =
  | SearchAction
  | SearchErrorAction
  | SearchSuccessAction
  | IngredientsFetch
  | IngredientsFetchErrorAction
  | IngredientsFetchSuccessAction
  | IngredientSelectAction;
