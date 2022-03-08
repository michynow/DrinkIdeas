import { useState } from "react";
import { SearchType } from "../../utils/searchTypes";
import useFetchData from "../../hooks/useFetchData";
const SearchByIngredient = () => {
  const { loading, error, data } = useFetchData(
    "",
    SearchType.INGREDIENTS_LIST
  );
  const [state, setState] = useState([]);
  return (
    <>
      <h1>Search by ingredients!</h1>
      {data.length < 1 && !error && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {data.map(({ strIngredient1 }, index) => {
        return <li key={index}>{strIngredient1}</li>;
      })}
    </>
  );
};
export default SearchByIngredient;
