import { ActionType } from "../action-types";
import { Action } from "../actions";
import { SingleIngredient } from "../../utils/customTypes";
export interface IngredientsState {
  loading: boolean;
  error: string | null;
  ingredients: SingleIngredient[];
  selectedIngredients: string[];
  searchSubmitted: boolean;
}
const initialState = {
  loading: false,
  error: null,
  ingredients: [],
  selectedIngredients: [],
  searchSubmitted: false,
};
const ingredientsReducer = (
  state: IngredientsState = initialState,
  action: Action
): IngredientsState => {
  switch (action.type) {
    case ActionType.INGREDIENTS_FETCH:
      return {
        ...state,
        loading: true,
        error: null,
        ingredients: [],
      };
    case ActionType.INGREDIENTS_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        ingredients: action.payload,
      };
    case ActionType.INGREDIENTS_FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        ingredients: [],
      };
    case ActionType.INGREDIENT_SELECT:
      return {
        ...state,
        selectedIngredients: action.payload,
      };
    case ActionType.INGREDIENT_SUBMIT_SEARCH:
      return {
        ...state,
        searchSubmitted: action.payload,
      };
    default:
      return state;
  }
};
export default ingredientsReducer;
