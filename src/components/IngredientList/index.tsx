import { useEffect, useState } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { FetchedDrink } from "../../utils/customTypes";
interface IngredientsInterface {
  ingMeasure: string | null;
  ingName: string | null;
}
const IngredientList = () => {
  const { data } = useTypedSelector((state) => state.drinks);
  const drinkData: FetchedDrink | null = data[0] || null;
  const [ingredients, setIngredients] = useState<
    IngredientsInterface[]
  >([]);
  const handleIngredients = () => {
    const ingredients: string[] = [];
    const metrics: string[] = [];
    const ingredientsCombined: IngredientsInterface[] = [];
    if (drinkData) {
      for (const [key, value] of Object.entries(drinkData)) {
        if (key.includes("strIngredient") && value !== null) {
          ingredients.push(value);
        }
        if (key.includes("strMeasure") && value !== null) {
          metrics.push(value);
        }
      }
      ingredients.forEach((item, index) => {
        ingredientsCombined.push({
          ingName: item,
          ingMeasure: metrics[index],
        });
      });
    }
    return ingredientsCombined;
  };
  useEffect(() => {
    const ingredientsSet = handleIngredients();
    setIngredients(ingredientsSet);
  }, []);
  return (
    <>
      {ingredients.map((item, i) => {
        const { ingMeasure, ingName } = item;
        if (ingName) {
          return (
            <li key={i}>
              {ingMeasure || ""} {ingName || ""}
            </li>
          );
        }
        return null;
      })}
    </>
  );
};
export default IngredientList;
