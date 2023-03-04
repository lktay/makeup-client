import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./Navigator/NavBar/NavBar";
import RouteNavigator from "./Navigator/RouteNavigator";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <NavBar />
      <RouteNavigator />
    </Router>
  </React.StrictMode>
);
