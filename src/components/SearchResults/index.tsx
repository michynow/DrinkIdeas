import { FetchedDrink } from "../../utils/customTypes";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { SearchType } from "../../utils/searchTypes";
import { Link } from "react-router-dom";
import DrinkCard from "../DrinkCard";
import { SearchResultsContainer } from "./SearchResults.style";
import Loader from "../Loader";
interface SearchResultsInterface {
  term: string | string[];
  searchType?: SearchType;
}
const SearchResults = ({
  term,
  searchType,
}: SearchResultsInterface) => {
  const { data, error, loading } = useTypedSelector(
    (state) => state.drinks
  );
  return (
    <SearchResultsContainer>
      {error && <h3>{error}</h3>}
      {loading && <Loader />}
      {error === null &&
        !loading &&
        data !== null &&
        term !== "" &&
        data.map((item: FetchedDrink, index: number) => {
          const {
            idDrink,
            strDrink,
            strDrinkThumb,
            strInstructions,
          } = item;
          return <DrinkCard item={item} key={index} />;
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
