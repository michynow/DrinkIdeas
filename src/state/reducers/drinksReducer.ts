import { ActionType } from "../action-types";
import { Action } from "../actions";
import { FetchedDrink } from "../../utils/customTypes";
export interface DrinksState {
  loading: boolean;
  error: string | null;
  data: FetchedDrink[];
}
const initialState = {
  loading: false,
  error: null,
  data: [],
};
const drinksReducer = (
  state: DrinksState = initialState,
  action: Action
): DrinksState => {
  switch (action.type) {
    case ActionType.SEARCH:
      return {
        loading: true,
        error: null,
        data: [],
      };
    case ActionType.SEARCH_SUCCESS:
      return {
        loading: false,
        error: null,
        data: action.payload,
      };
    case ActionType.SEARCH_ERROR:
      return {
        loading: false,
        error: action.payload,
        data: [],
      };
    default:
      return state;
  }
};
export default drinksReducer;
