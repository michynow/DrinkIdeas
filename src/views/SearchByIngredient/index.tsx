import { useEffect, useState } from "react";
import { SearchType } from "../../utils/searchTypes";
import SearchResults from "../../components/SearchResults";
import { IngredientSearchResults } from "./SearchByIngredient.style";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import useFetchIngredients from "../../hooks/useFetchIngredients";
import IngredientSelectForm from "../../components/IngredientSelectForm";
import SelectedIngredients from "../../components/SelectedIngredients";

const SearchByIngredient = () => {
  useFetchIngredients();
  const [randomSearch, setRandomSearch] = useState<Boolean>(false);
  const [formString, setFormString] = useState<string>("");
  const ingredientStore = useTypedSelector(
    (state) => state.ingredients
  );
  const { loading } = ingredientStore;
  useEffect(() => {
    if (!formString) {
      setRandomSearch(true);
      return;
    }
    setRandomSearch(false);
  }, [formString]);
  return (
    <>
      <IngredientSearchResults>
        <IngredientSelectForm setFormString={setFormString} />
        <section>
          <h1>Find a drink, by selecting ingredients you have!</h1>
          <SelectedIngredients />
          {randomSearch && (
            <SearchResults
              term=""
              searchType={SearchType.RANDOM_10}
            />
          )}
          {!randomSearch && !loading && (
            <SearchResults
              term={formString}
              searchType={SearchType.BY_INGREDIENTS}
            />
          )}
        </section>
      </IngredientSearchResults>
    </>
  );
};
export default SearchByIngredient;
