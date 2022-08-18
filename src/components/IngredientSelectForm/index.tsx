import { useState, useEffect } from "react";
import Loader from "../Loader";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { StyledIngredientSelectForm } from "./IngredientSelectForm.style";
import { useActions } from "../../hooks/useActions";
import { SearchType } from "../../utils/searchTypes";

interface IngredientSelectFormProps {
  children?: React.ReactNode;
}
const IngredientSelectForm = ({
  children,
}: IngredientSelectFormProps) => {
  const [searchTerm, setSearchTerm] = useState<string[]>([]);
  const ingredientStore = useTypedSelector(
    (state) => state.ingredients
  );
  const { selectIngredients } = useActions();
  const { loading, error, ingredients } = ingredientStore;
  const handleIngredientSelection = (
    e: React.MouseEvent<HTMLInputElement>
  ) => {
    const target = e.target as HTMLInputElement;
    if (target.checked && !searchTerm.includes(target.value)) {
      selectIngredients([...searchTerm, target.name]);
    } else {
      selectIngredients(
        searchTerm.filter((ingredient) => ingredient !== target.name)
      );
    }
  };
  const handleFormSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  useEffect(() => {
    setSearchTerm(ingredientStore.selectedIngredients);
  }, [ingredientStore.selectedIngredients]);

  return (
    <StyledIngredientSelectForm>
      {ingredients.length < 1 && !error && loading && <Loader />}
      {error && <p>{error}</p>}
      {ingredients.map(({ strIngredient1 }, index) => {
        return (
          <div
            key={`ingredient-${index}`}
            className={`${
              searchTerm.includes(strIngredient1 as string) &&
              "selected"
            }`}
          >
            <input
              type="checkbox"
              name={strIngredient1 as string | undefined}
              id={`ingredient-${strIngredient1}` || ""}
              onClick={handleIngredientSelection}
              checked={
                searchTerm.includes(strIngredient1 as string) || false
              }
            />
            <label htmlFor={`ingredient-${strIngredient1}`}>
              {strIngredient1}
            </label>
          </div>
        );
      })}
      <button onClick={handleFormSubmit}>Search</button>
    </StyledIngredientSelectForm>
  );
};
export default IngredientSelectForm;
