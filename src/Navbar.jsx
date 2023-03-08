import React from "react";
import { Link } from "react-router-dom";

export default function navbar() {
  return (
    <>
      <nav>
        <Link to="/" className="navbar-logo-button">
          <img className="navbar-logo" src="/images/Navbar-logo.png" />
          <p>
            University of Minnesota <br /> Video Game Development Club
          </p>
          <img className="navbar-triangles" src="/images/Triangle-Graphic.svg" />
        </Link>
        <div className="main-navigation-container">
          <ul>
            <li>
              <a className="discord" href="https://discord.gg/Yst7Zwn4wk" target="_blank">
                DISCORD
                <img src="/images/window-expand.png" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="nav-drop-shadow"></div>
    </>
  );
}
