import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "../hooks/useMediaQuery";
import NavbarItems from "./NavbarItems";
import Sidebar from "./Sidebar";
import { useLocation } from "react-router-dom";

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

  let [sidebarToggle, setSidebarToggle] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setSidebarToggle(false)
  }, [location]);

  const handleMainNav = () => {
    if (mediaQuery)
      return (
        <li>
          <Link to="/games">GAMES</Link>
        </li>
      );
  };

  return (
    <>
      <nav>
        {sidebarToggle && <Sidebar />}
        <div className="top-nav">
          <Link to="/" className="navbar-logo-button">
            <img className="navbar-logo" src="/images/Navbar-logo.png" />
            {logoText()}
            <img
              className="navbar-triangles"
              src="/images/Triangle-Graphic.svg"
            />
          </Link>
          <div className="main-navigation-container">
            <ul className="main-navigation">
              {handleMainNav()}
              <li>
                <img
                  src="/images/menu-512.webp"
                  onClick={() => setSidebarToggle(!sidebarToggle)}
                />
              </li>
            </ul>
            <ul>
              <li>
                <a
                  className="discord"
                  href="https://discord.gg/Yst7Zwn4wk"
                  target="_blank"
                >
                  DISCORD
                  <img src="/images/window-expand.png" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="nav-drop-shadow"></div>
    </>
  );
}
