import React, { useRef, useState, useEffect } from "react";
import { useMediaQuery } from "../../hooks/useMediaQuery";

export default function Paragraph() {
  const textHeight = useRef();
  const mediaQuery = useMediaQuery("lg");
  const handleMediaQuery = (big, small, size) => {
    const getHeight = textHeight.current?.offsetHeight.toString();
    let sizeSelect = mediaQuery;
    if (size === "medium") sizeSelect = mediaQueryMd;
    if (sizeSelect) {
      return {
        height: `${getHeight}px`,
        clipPath: "polygon(0 6%, 100% 0, 100% 100%, 0 94%)",
      };
    } else {
      return {
        height: `${getHeight}px`,
        clipPath: "polygon(0 6%, 100% 0, 100% 100%, 0 94%)",
      };
    }
  };

  return (
    <div className="home-paragraph-container" style={handleMediaQuery()}>
      <div className="home-paragraph" ref={textHeight}>
        <div>
          <h2>We make stuff</h2>
          <p>
            Welcome to the Video Game Development Club! We are actors, artists, designers,
            musicians, programmers, writers, and more! All skill levels are welcome, and
            we’re always willing to teach.
          </p>
        </div>
        <img src="/images/home/VGDC_Home_Photo.jpg" />
      </div>
    </div>
  );
}
