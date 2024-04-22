import React, { useState } from "react";
import "./NavBar.css";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };
  return (
    <nav class="nav-bar">
      <div class="icon-nav">
        <i class="fas fa-moon"></i>
        <span class="logo">Your logo</span>
      </div>

      <ul class={`list-nav-bar ${showMenu && "active"} `}>
        <li class="list-item">
          <a href="#">home</a>
        </li>
        <li class="list-item">
          <a href="#">pricing</a>
        </li>
        <li class="list-item">
          <a href="#">faq</a>
        </li>
        <li class="list-item">
          <a href="#">about</a>
        </li>
        <li class="list-item">
          <a href="#">contact</a>
        </li>
      </ul>
      <div class="fas burger-menu" id="burger-menu" onClick={handleMenuClick}>
        &#9776;
      </div>
    </nav>
  );
};

export default NavBar;
