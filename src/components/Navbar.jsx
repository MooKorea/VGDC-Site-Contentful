import React from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "../hooks/useMediaQuery";

export default function navbar() {
  const mediaQuery = useMediaQuery("lg");
  const logoText = () => {
    if (!mediaQuery) return;
    return (
      <div className="logo-text">
        University of Minnesota <br /> Video Game Development Club
      </div>
    );
  };

  return (
    <>
      <nav>
        <Link to="/" className="navbar-logo-button">
          <img className="navbar-logo" src="/images/Navbar-logo.png" />
            {logoText()}
          <img className="navbar-triangles" src="/images/Triangle-Graphic.svg" />
        </Link>
        <div className="main-navigation-container">
          <ul className="main-navigation">
            <li>
              <Link to="/blog">BLOG</Link>
            </li>
            <li>
              <Link to="/contact-us">CONTACT</Link>
            </li>
            <li>
              <Link to="/submit-games">SUBMIT GAMES</Link>
            </li>
            <li>
              <Link to="/games">GAMES</Link>
            </li>
          </ul>
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
