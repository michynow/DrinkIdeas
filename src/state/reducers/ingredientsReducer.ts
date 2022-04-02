import { ActionType } from "../action-types";
import { Action } from "../actions";
import { SingleIngredient } from "../../utils/customTypes";
export interface IngredientsState {
  loading: boolean;
  error: string | null;
  ingredients: SingleIngredient[];
}
const initialState = {
  loading: false,
  error: null,
  ingredients: [],
};
const ingredientsReducer = (
  state: IngredientsState = initialState,
  action: Action
): IngredientsState => {
  switch (action.type) {
    case ActionType.INGREDIENTS_FETCH:
      return {
        loading: true,
        error: null,
        ingredients: [],
      };
    case ActionType.INGREDIENTS_FETCH_SUCCESS:
      return {
        loading: false,
        error: null,
        ingredients: action.payload,
      };
    case ActionType.INGREDIENTS_FETCH_ERROR:
      return {
        loading: false,
        error: action.payload,
        ingredients: [],
      };
    default:
      return state;
  }
};
export default ingredientsReducer;
