import React from "react";
import Button from "./lcomp/Button";
import { Link } from "react-router-dom";
import "../index.css";

const Navbar = () => {
  return (
    <nav className="dflex_btw">
      <div className="logo">
        <Link to="/">
          Alfreza<span className="green">.</span>
        </Link>
      </div>
      <ul className="navlist dflex_btw">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="">Services</Link>
        </li>
        <li>
          <Link to="">Work</Link>
        </li>
        <li>
          <Link to="">About Us</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>

        <Button className="btn_no_bg" btnText="Contact" />
      </ul>
    </nav>
  );
};

export default Navbar;
