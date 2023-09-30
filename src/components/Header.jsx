import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav>
        <div class="links">
          <i class="fa fa-facebook-f i-fb"></i>
          <i class="fa fa-twitter i-tw"></i>
          <i class="fa fa-linkedin i-ln"></i>
          <i class="fa fa-vine i-vn"></i>
          <i class="fa fa-instagram i-ig"></i>
        </div>
      </nav>

      <header>
        <div class="logo-container">
          <img src="assets/ribbon.png" class="logo" />
          <div class="logo-text">
            <h1 class="logo-header">NON PROFIT</h1>
            <p>ORGANISATION</p>
          </div>
        </div>
        <div class="ham-btn">
          <i class="fa fa-solid fa-bars"></i>
        </div>
        <div class="header-links">
          <ul>
            <li>
              <Link to="/">
                <a href="#">Home</a>
              </Link>
            </li>
            <li>
              <Link to="/about">
                <a href="#">About</a>
              </Link>
            </li>
            <li>
              <Link to="/causes">
                <a href="#">Causes</a>
              </Link>
            </li>
            <li>
              <Link to="/events">
                <a href="#">Event</a>
              </Link>
            </li>
            <li>
              <Link to="/news">
                <a href="#">News</a>
              </Link>
            </li>
            <li>
              <Link to="contact">
                <a href="#">Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
