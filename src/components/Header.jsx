import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [Toggle, setToggle] = useState("");
  const path = window.location.href;
  useEffect(() => {
    console.log(path);
    console.log("d");
  }, []);

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
      <div
        class={"header-links " + Toggle}
        onClick={() => {
          setToggle("");
        }}
      >
        <ul>
          <Link to="/" className="w-[100%] sm:w-auto">
            <li>
              <a href="#">Home</a>
            </li>
          </Link>
          <Link to="/about" className="w-[100%] sm:w-auto">
            <li>
              <a href="#">About</a>
            </li>
          </Link>
          <Link to="/causes" className="w-[100%] sm:w-auto">
            <li>
              <a href="#">Causes</a>
            </li>
          </Link>
          <Link to="/events" className="w-[100%] sm:w-auto">
            <li>
              <a href="#">Event</a>
            </li>
          </Link>

          <Link to="/news" className="w-[100%] sm:w-auto">
            <li>
              <a href="#">News</a>
            </li>
          </Link>
          <Link to="contact" className="w-[100%] sm:w-auto">
            <li>
              <a href="#">Contact</a>
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
