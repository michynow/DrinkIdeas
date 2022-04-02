import { useEffect, useCallback, useState } from "react";
import { search } from "../../state/action-creators";
import { FetchedDrink } from "../../utils/customTypes";
import { SearchType } from "../../utils/searchTypes";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import Loader from "../../components/Loader";
import { H1Heading } from "../../styles/App.style";
import IngredientList from "../../components/IngredientList";
const DrinkDetailsPage = () => {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const { data, error, loading } = useTypedSelector(
    (state) => state.drinks
  );
  const { search } = useActions();
  const drinkName: string = window.location.pathname.replace(
    "/drinks/",
    ""
  );
  const checkURL = useCallback(() => {
    const drinkStr: string = data[0]?.strDrink || "";
    if (data.length === 1 && drinkName !== drinkStr) {
      window.history.replaceState(null, "", `/drinks/${drinkStr}`);
    }
  }, [data, drinkName]);
  useEffect(() => {
    search(drinkName, SearchType.BY_NAME);
  }, [drinkName]);
  return (
    <>
      {loading && <Loader />}
      {!loading && !error && data && data.length === 1 ? (
        <>
          <H1Heading>{data[0]?.strDrink}</H1Heading>
          <section>
            <aside>
              <img
                src={data[0]?.strDrinkThumb}
                alt={data[0].strDrink}
              />
            </aside>
            <section>
              <article>
                <h2>Ingredients:</h2>
                <IngredientList />
              </article>
            </section>
          </section>
        </>
      ) : null}
      {!loading && error ? <p>{error}</p> : null}
      {!loading && !error && data.length > 1 ? (
        <p>No results were found. </p>
      ) : null}
      {checkURL()}
    </>
  );
};
export default DrinkDetailsPage;
