import { ActionType } from "../action-types";
import { FetchedDrink } from "../../utils/customTypes";
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
export type Action =
  | SearchAction
  | SearchErrorAction
  | SearchSuccessAction;
