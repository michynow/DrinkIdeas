import { Link } from "react-router-dom";
import { AppWrapper } from "./styles/App.style";
import RegularSearch from "./views/RegularSearch";
import SearchByIngredient from "./views/SearchByIngredient";
function App() {
  return (
    <>
      <AppWrapper>
        <h1>Index</h1>
        <Link to={`/drink-search`}>Search for a drink</Link>
        <Link to={`/ingredient-search`}>
          Search for an ingredient
        </Link>
      </AppWrapper>
    </>
  );
}

export default App;
