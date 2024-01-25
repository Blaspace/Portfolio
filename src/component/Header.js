import React from "react";
import cv from "../public/JAMES.docx";

function Header() {
  return (
    <header className="header">
      <div className="header-con">
        <div className="header-text">
          <h1>James Ngbede Samuel</h1>
          <p>
            <small>{"<"}</small>Full Stack Web Developer<small>{">"}</small>
          </p>
          <div>
            <a href="#fourth">
              <button className="hbtn">Contact</button>
            </a>
            <a href={cv} download>
              <button className="hbtn2">Download CV</button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
