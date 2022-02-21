import { ActionType } from "../action-types";
import { Action } from "../actions";
interface DrinksState{
    loading:boolean;
    error:string|null;
    data:string[];
}
const initialState = {
    loading:false,
    error:null,
    data:[]
}
const drinksReducer = (state:DrinksState = initialState, action:Action):DrinksState => {
    switch(action.type){
        case ActionType.SEARCH_DRINKS:
            return {loading:true,error:null,data:[]};
        case ActionType.SEARCH_DRINKS_SUCCESS:
            return {loading:false,error:null,data:action.payload};
        case ActionType.SEARCH_DRINKS_ERROR:
            return {loading:false, error:action.payload, data:[]};
        default:
            return state;
    }
}
export default drinksReducer;