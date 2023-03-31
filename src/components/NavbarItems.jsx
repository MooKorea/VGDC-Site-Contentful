import React from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "../hooks/useMediaQuery";

function ExposedItems() {
  return (
    <>
      <li>
        <Link to="/games">GAMES</Link>
      </li>
    </>
  );
}

export default function NavbarItems() {
  const mediaQuery = useMediaQuery("lg");
  const handleMediaQuery = () => {
    if (mediaQuery) return
    return (<ExposedItems />)
  }
  return (
    <>
      {handleMediaQuery()}
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
