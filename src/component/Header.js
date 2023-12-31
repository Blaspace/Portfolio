import React from "react";

function Header() {
  return (
    <header className="header">
      <div className="header-con">
        <div className="header-text">
          <h1>James Ngbede Samuel</h1>
          <p>
            <small>{"<"}</small>Full Stack Web Developer<small>{">"}</small>
          </p>
          <a href="#fourth">
            <button>Contact</button>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
