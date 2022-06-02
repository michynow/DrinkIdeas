import { useState, useEffect } from "react";
import Loader from "../Loader";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { StyledIngredientSelectForm } from "./IngredientSelectForm.style";
import { useActions } from "../../hooks/useActions";
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
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const target = e.target as HTMLInputElement;
    if (target.checked) {
      selectIngredients([...searchTerm, target.name]);
    } else {
      selectIngredients(
        searchTerm.filter((ingredient) => ingredient !== target.name)
      );
    }
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
          <div key={index}>
            <input
              type={"checkbox"}
              name={strIngredient1 as string | undefined}
              id={`ingredient-${strIngredient1}` || ""}
              onChange={handleIngredientSelection}
            />
            <label htmlFor={`ingredient-${strIngredient1}`}>
              {strIngredient1}
            </label>
          </div>
        );
      })}
    </StyledIngredientSelectForm>
  );
};
export default IngredientSelectForm;
