import React from "react";

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
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Causes</a>
            </li>
            <li>
              <a href="#">Event</a>
            </li>
            <li>
              <a href="#">News</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
