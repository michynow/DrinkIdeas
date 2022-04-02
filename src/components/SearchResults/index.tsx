import { FetchedDrink } from "../../utils/customTypes";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { SearchType } from "../../utils/searchTypes";
import DrinkCard from "../DrinkCard";
import { SearchResultsContainer } from "./SearchResults.style";
import Loader from "../Loader";
import { useMemo, useEffect } from "react";
import useFetchData from "../../hooks/useFetchData";
interface SearchResultsInterface {
  term: string;
  searchType?: SearchType;
}
const SearchResults = ({
  term,
  searchType = SearchType.BY_NAME,
}: SearchResultsInterface) => {
  const { data, error, loading } = useFetchData(term, searchType);
  return (
    <SearchResultsContainer>
      {error && <h3>{error}</h3>}
      {loading && <Loader />}
      {error === null &&
        !loading &&
        data !== null &&
        term !== "" &&
        data.map((item: FetchedDrink, index: number) => {
          if (item.strDrink && item.strDrinkThumb) {
            return <DrinkCard item={item} key={index} />;
          }
          return null;
        })}
      {data !== null &&
        data.length === 0 &&
        error === null &&
        !loading &&
        term !== "" && <p>No results found</p>}
    </SearchResultsContainer>
  );
};

export default SearchResults;
