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
  const ingredientStore = useTypedSelector(
    (state) => state.ingredients
  );
  const searchTerm: string =
    ingredientStore.selectedIngredients.join(",");
  const { loading, error, ingredients } = ingredientStore;
  const drinksStore = useTypedSelector((state) => state.drinks);

  return (
    <>
      <section>
        <h1>Find a drink, by selecting ingredients you have!</h1>
      </section>
      <SelectedIngredients />
      <IngredientSearchResults>
        <IngredientSelectForm />
        {searchTerm !== "" &&
          drinksStore.data.length > 0 &&
          !loading && (
            <SearchResults
              term={searchTerm}
              searchType={SearchType.BY_INGREDIENTS}
            />
          )}
        {searchTerm !== "" &&
          !drinksStore.data.length &&
          !loading && <p>No results found</p>}
      </IngredientSearchResults>
    </>
  );
};
export default SearchByIngredient;
