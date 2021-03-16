import React from "react";
import {
  Link
} from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
        <div id="links">
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/location">Locations</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/cart">Cart</Link>
        </div>
     </nav>
  );
};

export default Navigation;