import { Link } from "react-router-dom";
import { FetchedDrink } from "../../utils/customTypes";
import {
  DrinkCardWrapper,
  DrinkImage,
  DrinkInstructions,
  DrinkName,
} from "./DrinkCard.style";
interface DrinkCardInterface {
  item: FetchedDrink;
}
const DrinkCard = ({ item }: DrinkCardInterface): JSX.Element => {
  const { strDrink, idDrink, strDrinkThumb, strInstructions } = item;
  return (
    <DrinkCardWrapper to={`/drinks/${strDrink}`} key={idDrink}>
      <DrinkName>{strDrink}</DrinkName>
      <DrinkImage src={strDrinkThumb} alt={strDrink} />
      <DrinkInstructions>{strInstructions}</DrinkInstructions>
    </DrinkCardWrapper>
  );
};
export default DrinkCard;
