import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "../hooks/useMediaQuery";
import NavbarExposedItems from "./NavbarExposedItems";
import Sidebar from "./Sidebar";
import { useLocation } from "react-router-dom";

export default function navbar() {
  const mediaQuery = useMediaQuery("lg");
  const mediaQueryMd = useMediaQuery("md");
  const mediaQueryXl = useMediaQuery("xl");

  let [sidebarToggle, setSidebarToggle] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setSidebarToggle(false);
  }, [location]);

  const handleMediaQuery = (big, small, size) => {
    let sizeSelect = mediaQuery;
    if (size === 'medium') sizeSelect = mediaQueryMd;
    if (size === 'xl') sizeSelect = mediaQueryXl;
    if (sizeSelect) {
      return small;
    } else {
      return big;
    }
  };

  return (
    <>
      <nav>
        {sidebarToggle && <Sidebar />}
        <div className="top-nav">
          <Link to="/" className="navbar-logo-button">
            <picture>
              <source srcSet="/images/Navbar-logo.webp" type="image/webp" />
              <source srcSet="/images/Navbar-logo.png" type="image/png" />
              <img className="navbar-logo" src="/images/Navbar-logo.png" alt="VGDC Logo" />
            </picture>
            {handleMediaQuery(
              null,
              <div className="logo-text">
                University of Minnesota <br /> Video Game Development Club
              </div>,
              'xl'
            )}
            <img className="navbar-triangles" src="/images/Triangle-Graphic.svg" alt="background graphic" />
          </Link>
          <div className="main-navigation-container">
            <ul className="main-navigation">
              {handleMediaQuery(null, <NavbarExposedItems />)}
              <li>
                <img
                  src="/images/menu-512.webp"
                  onClick={() => setSidebarToggle(!sidebarToggle)}
                  alt="navigation expand button"
                />
              </li>
            </ul>
            {handleMediaQuery(
              null,
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
              </ul>,
              'medium'
            )}
          </div>
        </div>
      </nav>
      <div className="nav-drop-shadow"></div>
    </>
  );
}
