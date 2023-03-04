import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "../App";
import Products from "../Pages/Products/Products";
import Favourites from "../Pages/Favourites/Favourites";
import About from "../Pages/About/About";

const RouteNavigator = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<App />}
      />
      <Route
        path="/products"
        element={<Products />}
      />
      <Route
        path="/favourites"
        element={<Favourites />}
      />
      <Route
        path="/about"
        element={<About />}
      />
    </Routes>
  );
};

export default RouteNavigator;
