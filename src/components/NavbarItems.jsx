import React from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "../hooks/useMediaQuery";
import NavbarExposedItems from "./NavbarExposedItems";

export default function NavbarItems() {
  const mediaQuery = useMediaQuery("lg");
  const mediaQueryMd = useMediaQuery("md");

  const handleMediaQuery = (big, small, size) => {
    let sizeSelect = mediaQuery;
    if (size === "medium") sizeSelect = mediaQueryMd;
    if (sizeSelect) {
      return big;
    } else {
      return small;
    }
  };

  return (
    <>
      {handleMediaQuery(
        null,
        <li>
          <a className="discord-button-mobile" href="https://discord.gg/Yst7Zwn4wk" target="_blank">
            DISCORD
          </a>
        </li>, 'medium'
      )}
      {handleMediaQuery(null, <NavbarExposedItems />)}
      <li>
        <Link to="/blog">BLOG</Link>
      </li>
      <li>
        <Link to="/contact-us">CONTACT</Link>
      </li>
      <li>
        <Link to="/submit-games">SUBMIT GAMES</Link>
      </li>
    </>
  );
}
