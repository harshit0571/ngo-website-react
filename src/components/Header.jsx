import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UseGlobal from "../hooks/UseGlobal";

const Header = ({ path, user }) => {
  const [Toggle, setToggle] = useState("");
  const active = "text-red-500 underline";
  const [User, setUser] = useState(user);
  console.log(User, "hello");
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
        <ul className="scroll-auto">
          <Link to="/" className="w-[100%] lg:w-auto">
            <li>
              <a href="#" style={{ color: path == "/" ? "red" : "black" }}>
                Home
              </a>
            </li>
          </Link>
          <Link to="/about" className="w-[100%] lg:w-auto">
            <li>
              <a href="#" style={{ color: path == "/about" ? "red" : "black" }}>
                About
              </a>
            </li>
          </Link>
          <Link to="/causes" className="w-[100%] lg:w-auto">
            <li>
              <a
                href="#"
                style={{ color: path == "/causes" ? "red" : "black" }}
              >
                Causes
              </a>
            </li>
          </Link>
          <Link to="/events" className="w-[100%] lg:w-auto">
            <li>
              <a
                href="#"
                style={{ color: path == "/events" ? "red" : "black" }}
              >
                Event
              </a>
            </li>
          </Link>
          <Link to="/news" className="w-[100%] lg:w-auto">
            <li>
              <a href="#" style={{ color: path == "/news" ? "red" : "black" }}>
                News
              </a>
            </li>
          </Link>
          <Link to="contact" className="w-[100%] lg:w-auto">
            <li>
              <a
                href="#"
                style={{ color: path == "/contact" ? "red" : "black" }}
              >
                Contact
              </a>
            </li>
          </Link>
          <Link to="login" className="w-[100%] lg:w-auto">
            <li>
              <a href="#" style={{ color: path == "/login" ? "red" : "black" }}>
                <i class="fa fa-user" aria-hidden="true"></i>
                {User.name ? User.name : " Sign in"}
              </a>
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
