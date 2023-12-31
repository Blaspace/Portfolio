import React from "react";

function Nav() {
  return (
    <nav className="nav">
      <div className="nav-con">
        <h2>
          <span>J</span>ames
        </h2>

        <ul>
          <a href="#first">
            <li data-text="01.">About</li>
          </a>
          <a href="#second">
            <li data-text="02.">Skills</li>
          </a>
          <a href="#third">
            <li data-text="03.">Projects</li>
          </a>
          <a href="#fourth">
            <li data-text="04.">Contact</li>
          </a>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
