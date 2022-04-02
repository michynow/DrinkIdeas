import { AppWrapper } from "./styles/App.style";
import RegularSearch from "./views/RegularSearch";
import SearchByIngredient from "./views/SearchByIngredient";
function App() {
  return (
    <>
      <AppWrapper>
        <RegularSearch />
        {/* <SearchByIngredient /> */}
      </AppWrapper>
    </>
  );
}

export default App;
