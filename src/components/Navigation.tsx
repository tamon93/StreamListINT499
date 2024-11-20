import React from "react";

import { NavLink } from "react-router-dom";

import { FaHome, FaFilm, FaShoppingCart, FaInfoCircle } from "react-icons/fa";

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" activeClassName="active" exact>
            <FaHome /> StreamList
          </NavLink>
        </li>

        <li>
          <NavLink to="/movies" activeClassName="active">
            <FaFilm /> Movies
          </NavLink>
        </li>

        <li>
          <NavLink to="/cart" activeClassName="active">
            <FaShoppingCart /> Cart
          </NavLink>
        </li>

        <li>
          <NavLink to="/about" activeClassName="active">
            <FaInfoCircle /> About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
