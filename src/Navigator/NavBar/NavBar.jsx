import React from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  const goTo = (id) => {
    if (id === "home") {
      navigate("/");
    }
    if (id === "product-list") {
      navigate("/products");
    }
    if (id === "favourites") {
      navigate("/favourites");
    }
    if (id === "about") {
      navigate("/about");
    }
  };

  return (
    <div className="NavBar">
      <button
        id="home"
        onClick={(e) => goTo(e.target.id)}
      >
        Home
      </button>
      <button
        id="product-list"
        onClick={(e) => goTo(e.target.id)}
      >
        Products
      </button>
      <button
        id="favourites"
        onClick={(e) => goTo(e.target.id)}
      >
        Favourites
      </button>
      <button
        id="about"
        onClick={(e) => goTo(e.target.id)}
      >
        About
      </button>
    </div>
  );
};
export default NavBar;
