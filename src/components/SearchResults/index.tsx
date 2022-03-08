import { FetchedDrink } from "../../utils/customTypes";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { SearchType } from "../../utils/searchTypes";
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
    <>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {error === null &&
        !loading &&
        data !== null &&
        term !== "" &&
        data.map((item: FetchedDrink) => {
          const { idDrink, strDrink, strDrinkThumb } = item;
          return (
            <div key={idDrink}>
              <h2>{strDrink}</h2>
              <img
                loading="lazy"
                src={strDrinkThumb}
                alt={strDrink}
              />
            </div>
          );
        })}
      {data !== null &&
        data.length === 0 &&
        error === null &&
        !loading &&
        term !== "" && <p>No results found</p>}
    </>
  );
};
export default SearchResults;
