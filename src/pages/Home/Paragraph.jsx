import React, { useRef, useState, useEffect } from "react";

export default function Paragraph() {
  return (
    <div className="home-paragraph-container">
      <div className="home-paragraph">
        <div>
          <h2>Learn with us!</h2>
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
