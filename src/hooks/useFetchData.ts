import { useActions } from "./useActions";
import { SearchType } from "../utils/searchTypes";
import { useEffect } from "react";
import { useTypedSelector } from "./useTypedSelector";
const useFetchData = (term: string, searchType: SearchType) => {
  const { search } = useActions();
  useEffect(() => {
    search(term, searchType);
  }, []);
  // const { data, error, loading } = useTypedSelector(
  //   (state) => state.drinks
  // );
  return useTypedSelector((state) => state.drinks);
};
export default useFetchData;
