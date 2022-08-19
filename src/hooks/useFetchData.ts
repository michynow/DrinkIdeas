import { useActions } from "./useActions";
import { SearchType } from "../utils/searchTypes";
import { useEffect } from "react";
import { useTypedSelector } from "./useTypedSelector";
const useFetchData = (term: string, searchType: SearchType) => {
  const { search } = useActions();
  useEffect(() => {
    search(term, searchType);
  }, [term]);
  return useTypedSelector((state) => state.drinks);
};
export default useFetchData;
