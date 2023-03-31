import React from "react";
import { Link } from "react-router-dom";

export default function NavbarExposedItems() {
  return (
    <>
      <li>
        <Link to="/about">ABOUT</Link>
      </li>
      <li>
        <Link to="/faq">FAQ</Link>
      </li>
      <li>
        <Link to="/games">GAMES</Link>
      </li>
    </>
  );
}
