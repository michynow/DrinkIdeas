import { ActionType } from "../action-types";
interface SearchDrinksAction{
    type:ActionType.SEARCH_DRINKS
}
interface SearchDrinksSuccessAction{
    type:ActionType.SEARCH_DRINKS_SUCCESS,
    payload:string[],
}
interface SearchDrinksErrorAction{
    type:ActionType.SEARCH_DRINKS_ERROR
    payload:string,
}
export type Action = SearchDrinksAction | SearchDrinksErrorAction | SearchDrinksSuccessAction;