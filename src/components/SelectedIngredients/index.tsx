import { useTypedSelector } from "../../hooks/useTypedSelector";
import { StyledSelectedIngredientWrapper } from "./SelectedIngredients";
import { useActions } from "../../hooks/useActions";
// interface SelectedIngredientsInterface {}

const SelectedIngredients = () => {
  const ingredientStore: string[] = useTypedSelector(
    (state) => state.ingredients?.selectedIngredients
  );
  const { selectIngredients } = useActions();
  const removeIngredientHandler = (e: any) => {
    selectIngredients(
      ingredientStore.filter(
        (ingredient) =>
          ingredient !== e.target.getAttribute("data-value")
      )
    );
  };
  return (
    <StyledSelectedIngredientWrapper>
      {ingredientStore.map((item: string) => {
        return (
          <span
            key={`selected-${item}`}
            onClick={removeIngredientHandler}
            data-value={item}
            title={`Remove ${item}`}
          >
            {item}
            <button>x</button>
          </span>
        );
      })}
    </StyledSelectedIngredientWrapper>
  );
};

export default SelectedIngredients;
