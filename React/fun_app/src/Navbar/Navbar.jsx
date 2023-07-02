import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark text-white navbar-expand-lg">
      <Link to="/home" className="navbar-brand ms-3">
        <h1>FunApp</h1>
      </Link>
      <div className="ms-auto">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/apps" className="nav-link">
              <h4>Apps</h4>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/shop" className="nav-link">
              <h4>Shop</h4>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/cart" className="nav-link">
              <h4>Cart</h4>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/register" className="nav-link">
              <h4>Register</h4>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link">
              <h4>Login</h4>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
