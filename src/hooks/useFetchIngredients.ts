import { useActions } from "./useActions";
import { SearchType } from "../utils/searchTypes";
import { useEffect } from "react";
import { useTypedSelector } from "./useTypedSelector";
const useFetchIngredients = (
  searchType: SearchType = SearchType.INGREDIENTS_LIST
) => {
  const { fetchIngredients } = useActions();
  useEffect(() => {
    fetchIngredients();
  }, []);
  return useTypedSelector((state) => state.ingredients);
};
export default useFetchIngredients;
