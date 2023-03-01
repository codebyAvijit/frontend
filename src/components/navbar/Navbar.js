import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <div id="head">Navbar</div>
      <div className="linkers">
        <Link to="/signup">
          <li>Sign Up</li>
        </Link>
        <Link to="/signin">
          <li>Sign In</li>
        </Link>
        <Link to="/profile">
          <li>Profile</li>
        </Link>
        <Link to="/Post">
          <span class="material-symbols-outlined">add_a_photo</span>
        </Link>
      </div>
    </>
  );
}
export default Navbar;
