import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { store } from "./state";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DrinkDetailsPage from "./pages/DrinkDetailsPage";
import RegularSearch from "./views/RegularSearch";
import SearchByIngredient from "./views/SearchByIngredient";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/drink-search" element={<RegularSearch />} />
          <Route
            path="/ingredient-search"
            element={<SearchByIngredient />}
          />
          <Route path="/drinks/*" element={<DrinkDetailsPage />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
