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
import IngredientSelectForm from "../../components/IngredientSelectForm";

const SearchByIngredient = () => {
  useFetchIngredients();
  const [searchTerm, setSearchTerm] = useState<string>("");
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
        <IngredientSelectForm />
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
