import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { store } from "./state";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DrinkDetailsPage from "./pages/DrinkDetailsPage";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/drinks/*" element={<DrinkDetailsPage />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
