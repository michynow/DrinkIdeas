import { useEffect, useState } from "react";
import { SearchType } from "../../utils/searchTypes";
import useFetchData from "../../hooks/useFetchData";
import Loader from "../../components/Loader";
import SearchResults from "../../components/SearchResults";
import { IngredientSearchResults } from "./SearchByIngredient.style";
import { FetchedDrink } from "../../utils/customTypes";
import { fetchIngredients } from "../../state/action-creators";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import useFetchIngredients from "../../hooks/useFetchIngredients";
const SearchByIngredient = () => {
  useFetchIngredients();
  const [searchTerm, setSearchTerm] = useState<string>("vodka");
  const ingredientStore = useTypedSelector(
    (state) => state.ingredients
  );
  const { loading, error, ingredients } = ingredientStore;

  return (
    <>
      <section>
        <h1>Find a drink, by selecting ingredients you have!</h1>
      </section>
      <IngredientSearchResults>
        <form action="GET">
          {ingredients.length < 1 && !error && loading && <Loader />}
          {error && <p>{error}</p>}
          {ingredients.map(({ strIngredient1 }, index) => {
            return (
              <div key={index}>
                <input
                  type={"checkbox"}
                  name={`ingredient-${strIngredient1}`}
                  id={`ingredient-${strIngredient1}` || ""}
                />
                <label htmlFor={`ingredient-${strIngredient1}`}>
                  {strIngredient1}
                </label>
              </div>
            );
          })}
        </form>
        {searchTerm !== "" && (
          <SearchResults
            term={searchTerm}
            searchType={SearchType.BY_NAME}
          />
        )}
      </IngredientSearchResults>
    </>
  );
};
export default SearchByIngredient;
