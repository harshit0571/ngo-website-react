import React from "react";
import { useNavigate } from "react-router-dom";

const HeaderNav = () => {
  const nav = useNavigate();
  const send = (e) => {
    nav(e);
  };
  return (
    <nav>
      <div class="links">
        <a href="https://facebook.com" target="blank">
          <i class="fa fa-facebook-f i-fb"></i>
        </a>
        <a href="https://x.com" target="blank">
          <i class="fa fa-twitter i-tw"></i>
        </a>
        <a href="https://linkedin.com" target="blank">
          <i class="fa fa-linkedin i-ln"></i>
        </a>

        <a href="https://meta.com" target="blank">
          <i class="fa fa-vine i-vn"></i>
        </a>
        <a href="https://instagram.com" target="blank">
          <i class="fa fa-instagram i-ig"></i>
        </a>
      </div>
    </nav>
  );
};

export default HeaderNav;
