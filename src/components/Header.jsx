import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [Toggle, setToggle] = useState("");

  return (
    <header>
      <div class="logo-container">
        <Link to="/">
          <img src="assets/ribbon.png" class="logo" />
        </Link>
        <Link to="/">
          <div class="logo-text">
            <h1 class="logo-header">NON PROFIT</h1>
            <p>ORGANISATION</p>
          </div>
        </Link>
      </div>

      <div class="ham-btn">
        {Toggle == "active" ? (
          <i
            class="fa fa-times"
            onClick={() => {
              setToggle("");
            }}
          ></i>
        ) : (
          <i
            class="fa fa-solid fa-bars"
            onClick={() => {
              setToggle("active");
            }}
          ></i>
        )}
      </div>
      <div class={"header-links " + Toggle}>
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
  );
};

export default Header;
